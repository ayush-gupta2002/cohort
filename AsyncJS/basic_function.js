//Any code in which every line is running by a single thread one line at a time is synchronous code


function contSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(contSum(10));
