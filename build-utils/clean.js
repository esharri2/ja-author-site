const del = require("del");

(async () => {
  const deletedPaths = await del(["dist/**/*"]);
})();
