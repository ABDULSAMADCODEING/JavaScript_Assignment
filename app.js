
/***********************************************************
 * JavaScript Assignment – FULLY COMMENTED (Teacher Level)
 * Student Name: ______________________
 * Roll No: ___________________________
 * Class / Section: ___________________
 ***********************************************************/

/******************** QUESTION 1 ***************************/
const productName = "Laptop";
const price = 999.99;
const inStock = true;
console.log(productName, price, inStock);

/******************** QUESTION 2 ***************************/
console.log(27 % 4);
console.log(12 ** 2);
let num = 8;
num++;
console.log(num);
let num2 = 15;
num2 -= 2;
console.log(num2);

/******************** QUESTION 3 ***************************/
const firstName = "alex";
const lastName = "SMITH";
const fullName =
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + " " +
  lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
console.log(fullName, fullName.length);

/******************** QUESTION 4 ***************************/
const temperature = 25;
if (temperature > 30) console.log("Hot day");
else if (temperature >= 20) console.log("Pleasant day");
else console.log("Cold day");

/******************** QUESTION 5 ***************************/
console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 !== 10 || 5 > 3);

/******************** QUESTION 6 ***************************/
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors, colors.length);

/******************** QUESTION 7 ***************************/
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
console.log(fruits, fruits.slice(1, 4));

/******************** QUESTION 8 ***************************/
for (let i = 1; i <= 5; i++) console.log("*".repeat(i));

/******************** QUESTION 9 ***************************/
let text = "The quick brown fox jumps over the lazy dog";
console.log(text.indexOf("fox"));
console.log(text.slice(10, 19));
console.log(text.includes("dog"));
console.log(text.charAt(10));

/******************** QUESTION 10 ***************************/
let sentence = "I love JavaScript and JavaScript is awesome";
console.log(sentence.replace("JavaScript", "Coding"));
console.log(sentence.replaceAll("JavaScript", "JS"));
console.log(sentence.replace("awesome", "AWESOME"));

/******************** QUESTION 11 ***************************/
let value = 123.456789;
console.log(value.toFixed(2));
console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(value.toFixed(4));

/******************** QUESTION 12 ***************************/
function handleClick() {
  const input = document.getElementById("username");
  const greeting = document.getElementById("greeting");
  if (input.value.trim() === "") {
    alert("Please enter your name");
    return;
  }
  greeting.innerText = "Welcome, " + input.value + "!";
  input.value = "";
}