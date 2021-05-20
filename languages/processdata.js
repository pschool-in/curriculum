import tamil from "./js/tamil/index.js";
import english from "./js/english/index.js";
import fs from "fs";
//const fs = require("fs");

function process() {
  fs.writeFileSync("./js/english/data.json", JSON.stringify(english));
}

process();
