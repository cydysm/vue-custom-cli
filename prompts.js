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
    message: "是否需要lint(默认 是)",
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
];
