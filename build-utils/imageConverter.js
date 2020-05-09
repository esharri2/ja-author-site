const sharp = require("sharp");
const path = require("path");
const glob = require("glob");
const del = require("del");

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

  const promises = sizes.map((size) => {
    sharp(image)
      .resize({ width: size.size, withoutEnlargement: true })
      .toFile(`./dist/media/${name}-${size.tag}${ext}`)
      .then(() => {
        return true;
      })
      .catch((error) => console.error(error));
  });

  Promise.all(promises).then((values) => values);
};

const init = () => {
  const imageNames = getImageNames();

  Promise.all(
    imageNames.map((img) => {
      createImages(img);
    })
  )
    .then(async (values) => {
      const deletePaths = await del(["dist/media/source/*"]);
      console.log(`${deletePaths.length} images have been deleted.`);
    })
    .catch((error) => console.error(error));

  // (async () => {
  //   const deletePaths = await del(["dist/media/source/*"]);
  //   console.log(`${deletePaths.length} images have been deleted.`);
  // })();
};

init();
