const { log } = require("console");
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is async result ${first} and ${second}`,
      (err, result) => {
        if (err) {
          log(err);
          return;
        }
        log(result);
      }
    );
  });
});
