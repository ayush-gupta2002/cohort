const fs = require("fs");
// const promisifiedFetch = (url) => {
//   return new Promise((resolve) => {
//     const response = fetch(url);
//     resolve(response);
//   });
// };

// function resolve(response) {
//   console.log(response);
// }

// promisifiedFetch("https://api.nationalize.io/?name=nathaniel").then(resolve);

// const promisiedReadFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// function resolve(text) {
//   console.log(text);
// }

// promisiedReadFile("a.txt")
//   .then(resolve)
//   .catch((err) => {
//     console.log(err);
//   });

const promisifiedWriteFile = (filename, textToWrite) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, textToWrite, "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

promisifiedWriteFile("a.txt", "Bye! Bye!")
  .then(() => console.log("File written"))
  .catch((err) => {
    console.log(err);
  });
