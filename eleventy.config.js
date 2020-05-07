const markdown = require("markdown-it")({
  html: true
});
const path = require("path");
const addSrcSet = require("./site/transforms/addSrcSet.js");
const minifyHTML = require("./site/transforms/minifyHTML.js");

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");



module.exports = config => {

  // Plugins
  config.addPlugin(eleventyNavigationPlugin);

  // Layout alias
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("about", "layouts/about.njk");
  config.addLayoutAlias("container", "layouts/container.njk");

  // Include our static assets
  config.addPassthroughCopy("site/admin");
  config.addPassthroughCopy({"site/media/uploads" : "/media/source"});
  config.addPassthroughCopy({ "site/media/art": "/media/source" });
  config.addPassthroughCopy({"site/media/site_icons": "/" });
  config.addPassthroughCopy({ "site/assets": "/" });
  config.setUseGitIgnore(false);

  // Short codes
  config.addPairedShortcode("markdown", content => markdown.render(content));
  config.addNunjucksShortcode("currentYear", () => new Date().getFullYear().toString());
  config.addNunjucksShortcode("srcset", img => {
    const {dir, name, ext} = path.parse(img);
    // TODO this duplicates size names and sizes that are in imageConverter.js; could be simplified.
    return `
      ${dir}/${name}-lg${ext} 1080w, 
      ${dir}/${name}-md${ext} 720w,
      ${dir}/${name}-sm${ext} 480w
    `;
  });
    config.addNunjucksShortcode("src", (img) => {
      const { dir, name, ext } = path.parse(img);
      // TODO this duplicates size names and sizes that are in imageConverter.js; could be simplified.
      return `${dir}/${name}-md${ext}`;
    });


  // Filters
  config.addFilter("prettyDateAndTime", (value) => {
    const date = new Date(Date.parse(value));
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    return `${date.toLocaleDateString('en-US')} - ${date.toLocaleTimeString('en-us', options)}`
  });

  config.addFilter("prettyDate", value => {
    const date = new Date(Date.parse(value));
    return date.toLocaleDateString("en-US");
  });

  config.addFilter("prettyMonthAndYear", (value) => {
    const date = new Date(Date.parse(value));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  });

  // Transforms
  config.addTransform("add srcset", addSrcSet );
  config.addTransform("minify html", minifyHTML );

  return {
    templateFormats: ["md", "njk", "json"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data"
    }
  };
};
