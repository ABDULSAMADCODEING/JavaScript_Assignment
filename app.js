    // Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), price (number with value 999.99), and inStock (boolean with value true). Console.log all three variables in a single statement.

var productName = "Laptop";
var price = 999.99;
var inStock = true;
console.log(productName, price, inStock);


// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

var result = 27 % 4;
console.log(result);

// Remainder Answer is a 3

var exponentiation = 12 ** 2;
console.log(exponentiation);

// Exponentiation Answer is a 144


var incre = 8;
incre++;
console.log(incre);

// Incrementing Answer is a 9

var incre = 15;
incre -= 2;
console.log(incre);

// Decrementing Answer is a 13



// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.


var firstName = "alex";
var lastName = "SMITH";
var fullName = firstName + " " + lastName;
fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLocaleLowerCase();
console.log(fullName);
console.log(fullName.length);


// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.

var temperature = 25;
if (temperature > 30) {
    console.log("Hot day");
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
}
else {
    console.log("Cold day");
}

// Answer will be  pleasant day



// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3

console.log(15 === "15"); // false
console.log(20 > 15 && 20 < 25); // true
console.log(10 !== 10 || 5 > 3); // true
// Check if 15 is strictly equal to "15" Answer is a false



if (20 > 15 && 20 < 25) {
    console.log(true);

}
else {
    console.log(false);

}

// Check if 20 is greater than 15 AND less than 25 Answer is a true


if (10 !== 10 || 5>3) {
    console.log(true);

}
else {
    console.log(false);

}

// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length



var colors = ["red", "green", "blue"]
console.log(colors);
colors.push("yellow")
console.log(colors);
colors.shift()
console.log(colors);
colors.splice(1, 0, "purple");
console.log(colors);
console.log(colors.length);



// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array

var fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1); // remove cherry
fruits.splice(2, 1, "dragonfruit"); // replace date

var middleThree = fruits.slice(1, 4);
console.log("Middle 3:", middleThree);



// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.

var sum=0;
for (let i = 1; i <= 10; i++) {
    if (i===5) {
        continue;        
    }    
    if (i===8) {
        break;
    } 
    console.log(i);
sum=sum+i;
    
}
console.log(sum);


// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

for (let i = 1; i <=5; i++) {
    var star="";    
    for (let j = 0; j < i; j++) {
        star=star+="*"        
    }
        console.log(star);

}




// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10

var text = "The quick brown fox jumps over the lazy dog";

console.log(text.indexOf("fox")); 
console.log(text.slice(10, 19)); // brown fox
console.log(text.includes("dog"));
console.log(text.charAt(10));



// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"

var sentence="I love JavaScript and JavaScript is awesome";

var repl=sentence.replace("JavaScript","coding");
console.log(repl);

var replacall=sentence.replaceAll("JavaScript","JS");
console.log(replacall);

var replaceawesome=sentence.replace("awesome","AWESOME");
console.log(replaceawesome);

// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places


var num= 123.456789;

var dec=num.toFixed(2);
console.log(dec);

 var near=Math.round(num);
console.log(near);

 var floo=Math.floor(num);
 console.log(floo);

 var cei=Math.ceil(num);
console.log(cei);

 var forma = num.toFixed(4);  
console.log(forma);
 


// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)



var inte=Math.floor(Math.random()*100)+1;
console.log(inte);

var deci=Math.random();
console.log(deci.toFixed(3));

var rand=Math.floor(Math.random()*(75-50+1))+50;
console.log(rand);





// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean


var convertnum="123";
console.log(+convertnum);

var res=+convertnum
console.log(typeof(res));


var convertstr="45.67";
console.log(convertstr);

var flo=parseFloat(convertstr);
console.log(typeof(flo));

var convertstr=789;
var str=convertstr.toString();
console.log(typeof(str));

var bol="true";
var convertbol=Boolean(bol);
console.log( typeof(convertbol));


// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
console.log(year, month, day);
var hours = currentDate.getHours();
console.log(hours);
var formattedDate = year + "-" + String(month + 1).padStart(2, '0') + "-" + String(day).padStart(2, '0');
console.log(formattedDate);
var specificDate = new Date(2024, 11, 25);
console.log(specificDate);


// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result. Handle division by zero by returning "Error: Division by zero".



// var num1 = +prompt("Enter any 1st number")
// var operatore = prompt("Enter any operation + - * /")
// var num2 = +prompt("Enter any 2st number")

function calculate(num1, operatore, num2) {

 if (operatore === "+") {
    return num1 + num2;

}

else if (operatore === "-") {
    return num1 - num2;

}

  else if (operatore === "*") {
    return num1 * num2;

    

} else if (operatore === "/") {

if (num2 === 0) {
    return  "Error: Division by zero";
}
    return num1 / num2;

}
else {
    return "Please give valid operator"
}

}
 calculate(10, "+", 5);
 calculate(10, "-", 5);
 calculate(10, "*", 5);
 calculate(10, "/", 5);
 



   

// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it, while also incrementing the global variable.
//  Show the difference after calling the function twice.


var globalCounter = 0

function incrementCounter() {

    var localvariable=0;
    localvariable++;
    globalCounter++;
    
}
incrementCounter()
incrementCounter()
console.log(globalCounter);




// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.
var userinput = 3;

switch (userinput) {
    case 0: console.log("Sunday"); break;
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    default:
        console.log("Invalid number");
}

// Write a while loop that starts at 10 and counts down to 1, printing each number. 
// Then print "Blast off!". Also calculate the factorial of 5 using a while loop.

var counts=10;
while (counts >=1) {
    console.log(counts);
    counts--;
}
console.log("Blast off!");

var factorial=5;
var calcu=1;
while (factorial> 0) {
    calcu= calcu*factorial
    factorial--;
}
console.log(calcu);


// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password.
// Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.

var enteredPassword = "";
var attempts = 0;

do {
    attempts++;

    if (attempts === 4) {
        enteredPassword = "secret123";
    } else {
        enteredPassword = "wrong";
    }

    console.log("Attempt:", attempts);

} while (enteredPassword !== "secret123" && attempts < 5);

if (enteredPassword === "secret123") {
    console.log("Welcome");
} else {
    console.log("Too many attempts");
}
// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:

// Use a for loop to find the maximum value
// Use a for loop to calculate the average
// Create a new array with only numbers greater than 50
// Reverse the array without using reverse() method

var numbers = [12, 45, 78, 23, 56, 89, 34];

// Max
var max = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
}
console.log("Max:", max);

// Average
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
var avg = total / numbers.length;
console.log("Average:", avg);

// Greater than 50
var gt50 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) gt50.push(numbers[i]);
}
console.log("Greater than 50:", gt50);

// Reverse without reverse()
var reversed = [];
for (var i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log("Reversed:", reversed);



// Question 22: Event Handling Simulation
// Create a function handleClick that:

// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting



function handleClick() {
    var nameValue = document.getElementById("username").value;

    if (nameValue === "") {
        alert("Please enter your username first");
    } 
    else {
        document.getElementById("greeting").innerText =
            "Welcome, " + nameValue + "!";

        document.getElementById("username").value = "";
    }
}




// Question 23: Form Validation Function
// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases


function validateForm(userEmail, userPassword) {

    var atFou = false;

    
    for (var i = 0; i < userEmail.length; i++) {
        if (userEmail[i] === "@") {
            atFou = true;
            break;
        }
    }

    if (atFou === false) {
        return "Email error: @ symbol missing";
    }

    
    if (userPassword.length < 8) {
        return "Password error: minimum 8 characters required";
    }

    return true;
}
console.log(validateForm("abcgmail.com", "12345678"));
console.log(validateForm("abc@gmail.com", "1234"));
console.log(validateForm("user@yahoo.com", "mypassword"));
console.log(validateForm("", ""));



// Question 24: Temperature Converter
// Create a function convertTemperature that:

// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place


function convertTemperature(value, scale) {

    var convertedTemp = 0;

    if (scale === "C") {
        convertedTemp = (value * 9) / 5 + 32;
    } 
    else if (scale === "F") {
        convertedTemp = (value - 32) * 5 / 9;
    } 
    else {
        return "Invalid unit provided";
    }

    var finalAnswer = Number(convertedTemp.toFixed(1));
    return finalAnswer;
}


console.log(convertTemperature(25, "C"));   
console.log(convertTemperature(77, "F"));   
console.log(convertTemperature(100, "C"));  
console.log(convertTemperature(50, "X"));   


// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:

// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names


var cart = [];
function addItem(n, p) {

    var obj = {};
    obj.name = n;
    obj.price = p;

    cart[cart.length] = obj;
}

function removeItem(itemName) {

    for (var i = 0; i < cart.length; i++) {

        if (cart[i].name == itemName) {

            cart.splice(i, 1);

            i = cart.length;
        }
    }
}

function calculateTotal() {

    var total = 0;

    for (var j = 0; j < cart.length; j++) {
        total = total + cart[j].price;
    }

    return total;
}

function applyDiscount(percent) {

    var totalAmount = calculateTotal();
    var finalAmount;

    finalAmount = totalAmount - (totalAmount * percent / 100);

    return finalAmount;
}

function listItems() {

    var list = [];
    var k = 0;

    while (k < cart.length) {
        list[k] = cart[k].name;
        k++;
    }

    return list;
}


addItem("Register", 320);
addItem("Calculator", 950);
addItem("Marker", 120);

console.log("Total:", calculateTotal());

console.log("After discount:", applyDiscount(20));

removeItem("Marker");

console.log("Items left:", listItems());
