const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {


  // The Sass Eleventy plugin
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/**/main.scss"],
    sourcemaps: true
  });

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: "_includes/layouts",
      data: '_data',
      output: '_site',
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};