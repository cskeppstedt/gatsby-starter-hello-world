const defaultLanguage = "sv"

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
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
