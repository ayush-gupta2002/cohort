() => {
  console.log("Hi!");
  promisifiedTimeout(3000)
    .then(() => {
      console.log("Hello!");
    })
    .then(() => {
      console.log("Hi There!");
    });
}