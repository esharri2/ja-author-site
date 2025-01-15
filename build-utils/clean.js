// const del = require("del");
import { deleteAsync } from "del";

(async () => {
  const deletedPaths = await deleteAsync(["dist/**/*"]);
})();
