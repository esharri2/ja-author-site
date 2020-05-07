const jsdom = require("jsdom");
const path = require("path");
const { JSDOM } = jsdom;

module.exports = function (value, outputPath) {
  if (outputPath.endsWith(".html")) {
    const DOM = new JSDOM(value, {
      resources: "usable",
    });
    const document = DOM.window.document;
    const markdownImages = [...document.querySelectorAll(".cmp-markdown img")];

    if (markdownImages.length) {
      markdownImages.forEach((image) => {
        image.setAttribute("loading", "lazy");
        if (image.hasAttribute("srcset")) return;
        
        const imageName = image.getAttribute("src");
        const { dir, name, ext } = path.parse(imageName);
        // TODO this duplicates size names and sizes that are in imageConverter.js; could be simplified.

        const srcSet = `
          ${dir}/${name}-lg${ext} 1080w, 
          ${dir}/${name}-md${ext} 720w,
          ${dir}/${name}-sm${ext} 480w
        `;
        image.setAttribute("src", `${dir}/${name}-md${ext}`);
        image.setAttribute("srcset", srcSet);
      });
    }

    return "<!DOCTYPE html>\r\n" + document.documentElement.outerHTML;
  }
  return value;
};
