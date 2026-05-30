module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist": "css/bootstrap"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/font": "fonts/bootstrap-icons"});

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk"
  };
};
