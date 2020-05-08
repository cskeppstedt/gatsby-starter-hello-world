const defaultLanguage = "sv"

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLanguage,
        langKeyForNull: defaultLanguage,
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
}
