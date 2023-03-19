module.exports = {
  presets: [
    "@babel/preset-typescript",
    ["@babel/preset-env", { targets: { node: "current" }, loose: false }],
  ],
  plugins: [
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    [
      "module-resolver", { alias: { 
        "@middlewares": "./src/infra/http/middlewares",
        "@helpers": "./src/helpers",
        "@handlers": "./src/handlers",
        "@config": "./src/infra/config",
        "@http": "./src/infra/http",
        "@commons": "./src/common",
        "@models": "./src/models",
        "@infra": "./src/infra",
        "@containers": "./src/infra/containers",
      }}
    ],
  ],
  ignore: ["**/*.spec.ts"],
};