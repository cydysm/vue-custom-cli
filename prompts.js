module.exports = [
  {
    type: "input",
    name: "projectName",
    message: "项目名字",
    default: "CustomProject"
  },
  {
    type: "input",
    name: "projectVersion",
    message: "项目版本",
    default: "0.0.1"
  },
  {
    type: "confirm",
    name: "vuex",
    message: "是否需要Vuex(默认 否)",
    default: false
  },
  // {
  //   type: "confirm",
  //   name: "vueRouter",
  //   message: "是否需要Vue Router(默认 是)",
  //   default: true
  // },
  {
    type: "confirm",
    name: "lint",
    message: "是否需要lint",
    default: true
  },
  {
    when: answer => answer.lint,
    type: "list",
    name: "eslintConfig",
    message: "选择ESLint config",
    choices: [
      { name: "Tencent Alloy", value: "alloy" },
      { name: "Airbnb", value: "airbnb" },
      {
        name: "Standard",
        value: "standard"
      }
    ]
  }
  // {
  //   type: "list", // 即类型为 选择项
  //   name: "module", // 名称，作为下面 generator 函数 options 的键
  //   message: "请选择你要生成的模块", // 提示语
  //   choices: [
  //     { name: "Module1", value: "module1" },
  //     { name: "Module2", value: "module2" },
  //     { name: "Module3", value: "module3" }
  //   ],
  //   default: "module0"
  // },
  // {
  //   type: "input", // 类型为 输入项
  //   name: "moduleName",
  //   message: "请输入模块名称",
  //   default: "myModule"
  // }
];
