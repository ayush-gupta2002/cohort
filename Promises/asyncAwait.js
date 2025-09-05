function promisifiedTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function printGreeting() {
  await promisifiedTimeout(1000);
  console.log("Hi");
  await promisifiedTimeout(3000);
  console.log("Hello");
  await promisifiedTimeout(5000);
  console.log("Hi There!");
}

printGreeting();
