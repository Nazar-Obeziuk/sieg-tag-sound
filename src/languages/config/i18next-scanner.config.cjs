module.exports = {
  input: [
    "src/**/*.{js,jsx,tsx}",
    // Use ! to filter out files or directories
    "!src/**/*.spec.{js,jsx,tsx}",
    "!i18n/**",
    "!**/node_modules/**",
  ],
  output: "./",
  options: {
    compatibilityJSON: "v3",
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t", "t"],
      extensions: [".js", ".jsx", ".tsx"],
    },
    trans: {
      extensions: [".js", ".jsx", ".tsx"],
    },
    lngs: ["en", "de", "ru"],
    ns: ["translation"],
    defaultLng: "de",
    defaultNs: "translation",
    resource: {
      loadPath: "i18n/{{lng}}/{{ns}}.json",
      savePath: "i18n/{{lng}}/{{ns}}.json",
    },
  },
};
