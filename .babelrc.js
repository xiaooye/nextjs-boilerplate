// .babelrc.js
module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
    "@babel/preset-typescript",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  plugins: ["@emotion/babel-plugin", "babel-plugin-macros"],
};
