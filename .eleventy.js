const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: false
  });

  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/CNAME": "CNAME"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist": "css/bootstrap"});
  eleventyConfig.addPassthroughCopy({"node_modules/bootstrap-icons/font": "fonts/bootstrap-icons"});
  eleventyConfig.addFilter("markdown", function(value) {
    return md.render(value || "");
  });

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
