// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


const myString = str => {
    let reverseStr = "";
    for(i = str.length - 1; i >=0 ; i--){
        reverseStr = reverseStr + str.charAt(i);
    }
    return reverseStr
}

const myInput = "I live in Bangladesh";
const newStr  = myString(myInput);
console.log(newStr);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumPositiveNumbers = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum = sum + arr[i];
        }

    }
    return sum;
}

const numbers = [2, -5, 10, -3, 7];
const positiveSum = sumPositiveNumbers(numbers);
console.log(positiveSum);


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const arr = [1, 2, 2, 2, 3, 3, 3, 7, 8, 9, 5];

let s = {};

arr.map((x, i) => {
    s[x] = s[x] + 1 || 1;
});

// console.log(s);

let k = Object.keys(s);
let v = Object.values(s);

let max = Math.max(...v);

console.log(max);



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


function findTwoSumIndices(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no two numbers found, return an empty array
    return [];
}


const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 12;

const result = findTwoSumIndices(sortedArray, target);
console.log(result); // Output: [0, 4] (1 + 11 = 12)





// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.




function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

console.log(calculator(5, '+', 3)); // Output: 8 (5 + 3)
console.log(calculator(10, '-', 4)); // Output: 6 (10 - 4)
console.log(calculator(6, '*', 5)); // Output: 30 (6 * 5)
console.log(calculator(20, '/', 4)); // Output: 5 (20 / 4)
console.log(calculator(10, '/', 0)); // Output: "Error: Cannot divide by zero"
console.log(calculator(8, '%', 2)); // Output: "Error: Invalid operator"




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = length => {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase  = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allChars = upperCase + lowerCase + numberChars + specialChars;

    let password = "";

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allChars.length)
        password = password + allChars.charAt(randomIndex);
    }
    return password;
}

const password = generateRandomPassword(10);
console.log(password);

