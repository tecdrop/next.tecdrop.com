const pluginSass = require("eleventy-plugin-sass");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {


  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/assets/images");

  // The Sass Eleventy plugin
  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/**/main.scss"],
    sourcemaps: true
  });

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

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