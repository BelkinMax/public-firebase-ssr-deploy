module.exports = {
  theme: {
    container: {
      center: true
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
