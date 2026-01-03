/* =====================================================
Question 1:
Declare and initialize variables and display them.
===================================================== */
var productName = "Laptop";
var price = 999.99;
var inStock = true;
console.log(productName, price, inStock);


/* =====================================================
Question 2:
Perform mathematical operations using operators.
===================================================== */
// Remainder
console.log(27 % 4);

// Square of 12
console.log(12 ** 2);

// Increment
var num = 8;
num++;
console.log(num);

// Decrement
var number = 15;
number -= 2;
console.log(number);


/* =====================================================
Question 3:
String concatenation, case conversion and length.
===================================================== */
var firstName = "alex";
var lastName = "SMITH";

var fullName =
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() +
  " " +
  lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

console.log(fullName);
console.log(fullName.length);


/* =====================================================
Question 4:
if-else conditional statement.
===================================================== */
var temperature = 25;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Pleasant day");
} else {
  console.log("Cold day");
}


/* =====================================================
Question 5:
Comparison and logical operators.
===================================================== */
console.log(15 === "15");
console.log(20 > 15 && 20 < 25);
console.log(10 != 10 || 5 > 3);


/* =====================================================
Question 6:
Basic array manipulation.
===================================================== */
var colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");

console.log(colors);
console.log(colors.length);


/* =====================================================
Question 7:
Array manipulation using splice().
===================================================== */
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1);                 // Remove "cherry"
fruits.splice(2, 1, "dragonfruit");  // Replace "date"

var middleFruits = fruits.splice(1, 3); // Extract middle elements

console.log(fruits);
console.log(middleFruits);


/* =====================================================
Question 8:
Array sorting and joining.
===================================================== */
var nums = [40, 10, 100, 30];

nums.sort(function (a, b) {
  return a - b;
});

console.log(nums);
console.log(nums.join("-"));


/* =====================================================
Question 9:
Nested for loop star pattern.
===================================================== */
for (var i = 1; i <= 5; i++) {
  var stars = "";
  for (var j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}


/* =====================================================
Question 10:
String searching and extraction.
===================================================== */
var text = "The quick brown fox jumps over the lazy dog";

console.log(text.indexOf("fox"));
console.log(text.slice(10, 19));
console.log(text.includes("dog"));
console.log(text.charAt(10));


/* =====================================================
Question 11:
String replacement.
===================================================== */
var sentence = "I love JavaScript and JavaScript is awesome";

console.log(sentence.replace("JavaScript", "coding"));
console.log(sentence.replaceAll("JavaScript", "JS"));
console.log(sentence.replace("awesome", "AWESOME"));


/* =====================================================
Question 12:
Number rounding and formatting.
===================================================== */
var numVal = 123.456789;

console.log(numVal.toFixed(2));
console.log(Math.round(numVal));
console.log(Math.floor(numVal));
console.log(Math.ceil(numVal));
console.log(numVal.toFixed(4));


/* =====================================================
Question 13:
Random number generation.
===================================================== */
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.random().toFixed(3));
console.log(Math.floor(Math.random() * 26) + 50);


/* =====================================================
Question 14:
Type conversion.
===================================================== */
console.log(Number("123"));
console.log(parseFloat("45.67"));
console.log(String(789));
console.log(typeof Boolean("true"));


/* =====================================================
Question 15:
Date and time operations.
===================================================== */
var today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getHours());

console.log(
  today.getFullYear() + "-" +
  (today.getMonth() + 1) + "-" +
  today.getDate()
);

var christmas = new Date(2024, 11, 25);
console.log(christmas);


/* =====================================================
Question 16:
Calculator function with switch.
===================================================== */
function calculate(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Error: Division by zero" : a / b;
    default: return "Invalid operator";
  }
}

console.log(calculate(10, 5, "+"));


/* =====================================================
Question 17:
Local vs Global variables.
===================================================== */
var globalCounter = 0;

function incrementCounter() {
  var globalCounter = 0; // Local variable
  globalCounter++;
  window.globalCounter++;
  console.log("Local Counter:", globalCounter);
}

incrementCounter();
incrementCounter();
console.log("Global Counter:", globalCounter);


/* =====================================================
Question 18:
Switch statement (Day of week).
===================================================== */
var day = 3;

switch (day) {
  case 0: console.log("Sunday"); break;
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  default: console.log("Invalid day");
}


/* =====================================================
Question 19:
while loop and factorial.
===================================================== */
var i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
console.log("Blast off!");

var n = 5;
var factorial = 1;

while (n > 0) {
  factorial *= n;
  n--;
}
console.log("Factorial:", factorial);


/* =====================================================
Question 20:
do...while loop simulation.
===================================================== */
var password = "";
var attempts = 0;

do {
  attempts++;
  password = "wrong";
} while (password !== "secret123" && attempts < 5);


/* =====================================================
Question 21:
Array operations using loops.
===================================================== */
var numbers = [12, 45, 78, 23, 56, 89, 34];
var max = numbers[0];
var sum = 0;
var greater50 = [];
var reverse = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  sum += numbers[i];
  if (numbers[i] > 50) greater50.push(numbers[i]);
}

for (var i = numbers.length - 1; i >= 0; i--) {
  reverse.push(numbers[i]);
}

console.log(max);
console.log(sum / numbers.length);
console.log(greater50);
console.log(reverse);


/* =====================================================
Question 22:
Event handling function.
===================================================== */
function handleClick() {
  var input = document.getElementById("username");
  var greeting = document.getElementById("greeting");

  if (input.value === "") {
    alert("Please enter name");
  } else {
    greeting.innerText = "Welcome " + input.value;
    input.value = "";
  }
}


/* =====================================================
Question 23:
Form validation function.
===================================================== */
function validateForm(email, password) {
  if (!email.includes("@")) return false;
  if (password.length < 8) return false;
  return true;
}


/* =====================================================
Question 24:
Temperature converter.
===================================================== */
function convertTemperature(temp, unit) {
  if (unit === "C") {
    return ((temp * 9) / 5 + 32).toFixed(1);
  } else if (unit === "F") {
    return ((temp - 32) * 5 / 9).toFixed(1);
  } else {
    return "Invalid unit";
  }
}

console.log(convertTemperature(37, "C"));


/* =====================================================
Question 25:
Shopping cart system.
===================================================== */
var cart = [];

function addItem(name, price) {
  cart.push({ name: name, price: price });
}

function removeItem(name) {
  cart = cart.filter(function (item) {
    return item.name !== name;
  });
}

function calculateTotal() {
  return cart.reduce(function (total, item) {
    return total + item.price;
  }, 0);
}

function applyDiscount(percent) {
  return (calculateTotal() * (1 - percent / 100)).toFixed(1);
}

function listItems() {
  return cart.map(function (item) {
    return item.name;
  });
}
