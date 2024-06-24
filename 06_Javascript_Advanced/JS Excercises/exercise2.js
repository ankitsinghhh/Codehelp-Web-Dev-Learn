//question -1 : Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

function greet(name){
    console.log(`hello ${name}`)
}

greet("ankit")


// question-2 : Write a function called 'getSquare' that takes a number parameter and returns its square.

function getSquare(number){
    return number*number;

}
console.log("getSquare", getSquare(15))


//question-3 : Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.
// needs revision
function countLetters(str) {
    // Create an empty object to store the letter counts
    const counts = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the counts object
      if (counts[char]) {
        // If it is, increment the count by 1
        counts[char]++;
      } else {
        // If it's not, add it to the object with a count of 1
        counts[char] = 1;
      }
    }
  
    // Return the counts object
    return counts;
  }
  
  // Example usage:
  const letterCounts = countLetters("WebDevelopment");
  
  console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }



//question-4 : Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

 function createCounter() {
  let count = 0; // initialize count to 0

  // define and return a function that increments count and returns its value
  return function () {
    count++; // increment count by 1
    return count; // return the new value of count
  };
}

// create a new counter function
const counter = createCounter();

// call the counter function multiple times and log the result
console.log(counter()); // prints 1
console.log(counter()); // prints 2
console.log(counter()); // prints 3

//question-5 : Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function evenSum(arr){
    let total = 0 ;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            total = total + arr[i];
        }
    }
    return total;
}

console.log(evenSum([1,2,3,4,5,6,7,8,9]))


//question-6 - Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

function evenSum(arr){
    let total = 0 ;
    for(i=0;i<arr.length;i++){
    
            total = total + arr[i];
   
    }
    return total;
}

console.log(evenSum([1,2,3,4,5,6,7,8,9]))


//questoin-7 : Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

let arr7 = ["abc", "stringer","easy", "assassin" , "normie", "ankit"]

function greaterThan5(arr){
    let arrN = []
    for(let i =0;i<arr.length;i++){
        if(arr[i].length>5)
            {
                arrN.push(arr[i])
            }
    }
    return arrN
}

console.log(greaterThan5(arr7))


//question - 8 : Write a function that takes an object and returns an array of all the keys in the object.

let obj = {
    "one":"ankit",
    "two":"assassin",
    "three":"normie",
    "four":"easy",
    "five":"arms"
}

// for(let i in obj){
//     console.log(i)
// }

function keys(obj){
    let arr=[]
    for(let i in obj){ // i in obj means i will refer to its keys and also if we need to print its elements , then we cna do arr.push(obj[i])
        arr.push(i)
    }
    return arr
}
console.log(keys(obj))


// question 9 -- Write a function that takes an array of objects and returns an array of all the values of a specified property name.

function getPropertyValues(arr, propName) {
    // Using Array.map() method to get the values of the specified property
    const values = arr.map((obj) => obj[propName]);
  
    return values;
  }
  
  // Test cases
  const people = [
    { name: "Pranay", age: 20, gender: "male" },
    { name: "Nidhi", age: 21, gender: "female" },
    { name: "Soumya", age: 21, gender: "male" },
  ];
  
  console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi", "Soumya"]
  console.log(getPropertyValues(people, "age")); //  [20, 21, 21]
  console.log(getPropertyValues(people, "gender")); // ["male", "female", "male"]
  console.log(getPropertyValues(people, "address")); // [undefined, undefined, undefined]


// question-10 :  Write a function that takes an array of objects and returns the object with the highest value for a specified property name.
function findMaxByProperty(arr, prop) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize maxObj to first object in the array
    let maxObj = arr[0];
  
    // Loop through the array starting at second object
    for (let i = 1; i < arr.length; i++) {
      // Check if the current object's property value is greater than maxObj's property value
      if (arr[i][prop] > maxObj[prop]) {
        // If yes, update maxObj to current object
        maxObj = arr[i];
      }
    }
  
    // Return the object with highest value for the specified property
    return maxObj;
  }
  
  // Test case 1
  const arr1 = [
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ];
  const maxObj1 = findMaxByProperty(arr1, "price");
  console.log(maxObj1); // { name: 'orange', price: 3 }
  
  // Test case 2
  const arr2 = [
    { name: "Pranay", age: 20 },
    { name: "Nidhi", age: 21 },
    { name: "Soumya", age: 21 },
  ];
  const maxObj2 = findMaxByProperty(arr2, "age");
  console.log(maxObj2); // { name: 'Nidhi', age: 21 }
  
  // Test case 3
  const arr3 = [];
  const maxObj3 = findMaxByProperty(arr3, "price");
  console.log(maxObj3); // null
