const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log("waiting on a...");

  setTimeout(() => {
    console.log(contents);
  }, 2000);
});
fs.readFile("b.txt", "utf-8", (err, contents) => {
  console.log(contents);
});
fs.readFile("c.txt", "utf-8", (err, contents) => {
  console.log(contents);
});
