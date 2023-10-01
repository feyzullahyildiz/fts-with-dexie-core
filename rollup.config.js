const path = require("path");
const dist = path.resolve(__dirname, "dist");
module.exports = {
  input: "src/main.js",
  output: [
    {
      file: path.resolve(dist, "index.js"),
      format: "cjs",
    },
    {
      file: path.resolve(dist, "esm", "index.js"),
      format: "esm",
    },
  ],
};
