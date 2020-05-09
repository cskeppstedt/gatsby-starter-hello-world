const defaultLanguage = "sv";

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
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
};
