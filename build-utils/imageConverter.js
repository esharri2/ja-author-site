const sharp = require("sharp");
const path = require("path");
const glob = require("glob");
const fs = require("fs");
const del = require("del");

// TODO make it so an image does not get stretched above native size

const mediaDir = "./dist/media/source/*.*";
const sizes = [
  { tag: "lg", size: 1080 },
  { tag: "md", size: 720 },
  { tag: "sm", size: 480 },
];

const getImageNames = () => glob.sync(mediaDir);

const createImages = async (image) => {
  const name = path.parse(image).name;
  const ext = path.extname(image);

  sizes.forEach((size) => {
    // if native size of image is above
    sharp(image)
      .resize({ width: size.size, withoutEnlargement: true })
      .toFile(`./dist/media/${name}-${size.tag}${ext}`)
      .then(() => {
        return true;
      });
  });
};

const init = () => {
  const imageNames = getImageNames();
  imageNames.forEach((image) => {
    createImages(image);
  });

  (async () => {
    const deletePaths = await del(["dist/media/source/*"]);
    console.log(`${deletePaths.length} images have been deleted.`);
  })();
};

init();
