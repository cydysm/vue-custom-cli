module.exports = (api, options, rootOptions) => {
  const eslintConfig = require("../eslintOptions").config(api);
  const pkg = {
    scripts: {
      test: "vue-cli-service  command"
    },
    name: options.projectName,
    version: options.projectVersion,
    eslintConfig,
    dependencies: {
      vue: "^2.6.10",
      "vue-router": "^3.1.3"
    },
    devDependencies: {
      "vue-template-compiler": "^2.6.10"
    },
    browserslist: ["> 1%", "last 2 versions"]
  };
  // 修改 `package.json` 里的字段
  const lintConfig = {
    airbnb: () => {
      eslintConfig.extends.push("@vue/airbnb");
      Object.assign(pkg.devDependencies, {
        "@vue/eslint-config-airbnb": "^5.0.0"
      });
    },
    standard: () => {
      eslintConfig.extends.push("@vue/standard");
      Object.assign(pkg.devDependencies, {
        "@vue/eslint-config-standard": "^5.0.0"
      });
    },
    alloy: () => {
      eslintConfig.extends.push("alloy", "alloy/vue");
      Object.assign(pkg.devDependencies, {
        "babel-eslint": "^10.0.3",
        eslint: "^6.8.0",
        "eslint-config-alloy": "^3.5.0",
        "eslint-plugin-vue": "^6.1.2",
        "vue-eslint-parser": "^5.0.0"
      });
    }
  };
  if (options.lint) {
    lintConfig[options.eslintConfig]();
  }
  // if (options.vuex) {
  //   Object.assign(pkg.dependencies, {
  //     vuex: "^3.1.2"
  //   });
  // }

  api.extendPackage(pkg);
  // 删除vue-cli-service 提供的template
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith("src/"))
      .forEach(path => {
        delete files[path];
      });
  });
  if (options.vuex && !api.hasPlugin('vuex')) {
    require('./addVuex')(api)
  }
  /* 复制并用 ejs 渲染 `./template` 内所有的文件
   * 可使用 ejs 模板语法
   * 根据自定义模板生成项目结构
   */
  api.render("../template");
  // if (options.vuex) {
  //   const addVuex = require("./vuex");
  //   addVuex(api);
  // }
  // if (options.vueRouter) {
  //   Object.assign(rootOptions, {
  //     vueRouter: options.vueRouter
  //   });
  // }
};
