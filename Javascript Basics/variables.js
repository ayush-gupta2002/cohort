//Variables

let firstName = "ayush";
console.log(firstName);
const age = 30;
// age = 20;
var isStudent = true;
console.log(!isStudent);

//Array
let arr = [1, 2, 3];
for (let i in arr) {
  console.log(i);
}

//Operators

let sum = 10 + 5;
console.log(sum);
console.log(sum === 15);
console.log(sum == "15");
console.log(sum === "15");

//Functions

function printName(name) {
  console.log("Name: " + name);
}

printName("Ayush");

function sumOfTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

sumOfTwoNumbers("1", "2");
sumOfTwoNumbers("1", 2);
sumOfTwoNumbers(1, 2);

function canVote(age) {
  console.log(age >= 18);
}

canVote(20);

//Loops

let s = 0;

for (let i = 0; i <= 10; i++) {
  s += i;
}

console.log(s);

let p = 1;
let j = 1;
while (j <= 10) {
  p = p * j;
  j++;
}

console.log(p);

//Objects

let mapping = { Name: "Ayush", Age: 23, Height: 182 };
console.log(mapping["Name"]);

//Testing everything in assignment

function greet(user) {
  console.log(
    "Hi " +
      user.Name +
      " your age is: " +
      user.Age +
      " and you're a " +
      user.Gender
  );
  if (user.Age >= 18) {
    console.log("You're eligible to vote");
  } else {
    console.log("You cannot vote");
  }
}

let user = { Name: "Piyush", Age: 25, Gender: "Male" };
greet(user);

let arrOfUsers = [
  { name: "ayush", age: 23, gender: "male" },
  { name: "priya", age: 24, gender: "female" },
  { name: "rahul", age: 18, gender: "male" },
];

arrOfUsers.forEach((user) => {
  if (user.gender == "male" && user.age >= 18) {
    console.log(user);
  }
});
