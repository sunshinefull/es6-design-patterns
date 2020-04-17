module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    semi: 0,
    "no-unused-vars": 0,
    "no-fallthrough": 0
  }
};
