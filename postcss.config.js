const postcssPresetEnv = require("postcss-preset-env")

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 2,
      importFrom: "src/css/variables.css",
    }),
  ],
})
