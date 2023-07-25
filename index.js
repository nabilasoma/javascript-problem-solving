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