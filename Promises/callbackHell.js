// const printGreeting = () => {
//   setTimeout(() => {
//     console.log("Hi");
//     setTimeout(() => {
//       console.log("Hello");
//       setTimeout(() => {
//         console.log("Hi There!");
//       }, 5000);
//     }, 3000);
//   }, 1000);
// };

// printGreeting();

const promisifiedTimeout = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

promisifiedTimeout(1000)
  .then(() => {
    console.log("Hi!");
    return promisifiedTimeout(3000);
  })
  .then(() => {
    console.log("Hello");
    return promisifiedTimeout(5000);
  })
  .then(() => {
    console.log("Hi There!");
  });
