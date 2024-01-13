// Q1. Write a program that grade students based on their marks

let students = 90
 
if(students>=90){
    console.log("Grade A")
} else if (students >= 70 && students >= 90){
    console.log("Grade B")
} else if (students >= 50 && students >= 70){
    console.log("Grade C")
} else{
    console.log("Grade F")
}


// Q2. Generate numbers between any 2 given numbers

let min = 10;
let max = 25;
let random = Math.random() * (max - min) + min;
console.log(random)



// Q3. Usea nested ternary operator to check that a number is positive, negative or zero. You have to print
// "positive" if the number is positive and similarly for negative and zero also.

// Function for number checking 
function Number(n) {
	if (n > 0) {
		console.log("Positive number");
	} else if (n < 0) {
		console.log("Negative number");
	} else {
		console.log("Zero");
	}
}

// Variables holding values
let number1 = -5;
let number2 = 5;
let number3 = 0;

Number(number1); // Negative number
Number(number2); // Positive number
Number(number3); // Zero



// Q4. Describe the usage of the comma operator in JavaScript and provide an example.

function Func1() { 
	console.log('one'); 
	return 'one'; 
} 
function Func2() { 
	console.log('two'); 
	return 'two'; 
} 
function Func3() { 
	console.log('three'); 
	return 'three'; 
} 

let x = (Func1(), Func2(), Func3()); 

console.log(x);



// Q5. You're creating a basic login system. Make a login function with two things: a username anda
// password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
// successful"; if not, show "Invalid credentials."


let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
    console.log("Login Successful")
}else{
    console.log("Please enter valid information")
}


// Q6. You are working on an e-commerce platform. Write a Javascript program that takes the payment
// method ("credit", "debit", or "paypal) as input and uses a switch statement to determine and print the
// processing fee associated with each payment method. For example, "credit" may have a processing fee of
// // 2%, "debit" 1.5%, and "paypal" 3%.

// Function to determine processing fee based on payment method
function calculateProcessingFee(paymentMethod) {
    // Initializing the processing fee variable
    let processingFee;

    // Using switch statement to determine processing fee based on payment method
    switch (paymentMethod) {
        case "credit":
            processingFee = 2;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid payment method");
            return;
    }

    // Printing the result
    console.log(`The processing fee for ${paymentMethod} is ${processingFee}%`);
}

// Example usage:
let paymentMethod = "credit"; // You can replace this with the actual payment method
calculateProcessingFee(paymentMethod);



// Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
// as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
// temperature is above 30°c, the condition is "Hot"; otherwise, it is "Moderate".

// Function to determine weather condition based on temperature
function determineWeatherCondition(temperature) {
    // Using the ternary operator to check if temperature is above 30°C
    let weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    return weatherCondition;
}

// Example usage:
let currentTemperature = 28; // You can replace this with the actual temperature
let condition = determineWeatherCondition(currentTemperature);

// Printing the result
console.log("The weather condition is:", condition);


// Q8.You are creating a program to calculate the sum of numbers. Write a Javascript program that takes a
// positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
// given integer.

// Function to calculate the sum of numbers from 1 to n using a do-while loop
function calculateSum(n) {
    // Ensure the input is a positive integer
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Initializing variables
    let i = 1;
    let sum = 0;

    // Using a do-while loop to calculate the sum
    do {
        sum += i;
        i++;
    } while (i <= n);

    // Printing the result
    console.log(`The sum of numbers from 1 to ${n} is: ${sum}`);
}

// Example usage:
let positiveInteger = 5; // You can replace this with the actual positive integer
calculateSum(positiveInteger);
