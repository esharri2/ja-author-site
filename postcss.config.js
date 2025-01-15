const purgecss = require("@fullhuman/postcss-purgecss").default;

const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: ["./site/**/*.njk"],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
          cssnano({ preset: "default" }),
        ]
      : []),
  ],
};
