const { log } = require("console");
const { readFileSync, writeFileSync } = require("fs");

const path = require("path");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
log(first);
log(second);
writeFileSync(
  "./content/result-sync.txt",
  `here is the result ${first} and ${second}`,
  { flag: "a" }
);
