// ## Topics covered:

// - **Regular expressions**
// - **ES6 and modern JavaScript features**

// ---

// 1. **Write a function that takes a string as input and returns true if the string contains only alphabets, and false otherwise.**
function containsOnlyAlphabets(str) {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(str);
  }
  
  console.log(containsOnlyAlphabets("abcDEF")); // true
  console.log(containsOnlyAlphabets("123")); // false
  console.log(containsOnlyAlphabets("a b c")); // false
  console.log(containsOnlyAlphabets("")); // false

//   Explanation:

// - The function `containsOnlyAlphabets` takes a string as input.
// - A regular expression is used to match the input string to check if it contains only alphabets.
// - The `test` method of the regular expression object is used to check if the input string matches the regular expression.
// - If the input string matches the regular expression, the function returns `true`, otherwise it returns `false`.

// Note:

// - The regular expression `/^[a-zA-Z]+$/` matches any string that contains only alphabets, regardless of case.


// question - 2 : Write a function that takes a string as input and returns true if the string contains at least one digit, false otherwise.
function containsDigit(str) {
    const regex = /\d/;
    return regex.test(str);
  }
  
  console.log(containsDigit("abc123")); // true
  console.log(containsDigit("abc")); // false
  console.log(containsDigit("123")); // true
  console.log(containsDigit("a1b2c3")); // true

//   Explanation:

// - The function `containsDigit` takes a string as input.
// - A regular expression is used to match the input string to check if it contains at least one digit.
// - The `\d` metacharacter matches any digit.
// - The `test` method of the regular expression object is used to check if the input string matches the regular expression.
// - If the input string matches the regular expression, the function returns `true`, otherwise it returns `false`.

// Note:

// - The regular expression `/\d/` matches any string that contains at least one digit.



// question -3 : Write a function that takes a string as input and replaces all occurrences of "cat" with "dog".
function replaceCatWithDog(str) {
    const regex = /cat/g;
    return str.replace(regex, "dog");
  }
  
  console.log(replaceCatWithDog("The cat sat on the mat.")); // The dog sat on the mat.
  console.log(replaceCatWithDog("The cats sat on the mats.")); // The dogs sat on the mats.
  console.log(replaceCatWithDog("Caterpillar")); // Dogerpillar
  console.log(replaceCatWithDog("Cats are cool.")); // Dogs are cool.

//   Explanation:

// - The function `replaceCatWithDog` takes a string as input.
// - A regular expression is used to match all occurrences of "cat" in the input string.
// - The `replace` method of the string object is used to replace all occurrences of "cat" with "dog".
// - The `g` flag in the regular expression specifies that all occurrences should be replaced, not just the first one.

// Note:

// - The regular expression `/cat/g` matches all occurrences of "cat" in the input string.


//question -4 : Write a function that takes a string as input and returns the number of vowels in the string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("Pranay")); // expected output: 2
  console.log(countVowels("hello")); // expected output: 2
  console.log(countVowels("abcdefghijklmnopqrstuvwxyz")); // expected output: 5
  console.log(countVowels("aeiou")); // expected output: 5
  console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // expected output: 0
  console.log(countVowels("The quick brown fox jumps over the lazy dog")); // expected output: 11
  console.log(countVowels("12345")); // expected output: 0

//   Explanation:

// - The function `countVowels` takes a string as input and returns the number of vowels in the string.
// - We define a string `vowels` that contains all the vowels in uppercase and lowercase.
// - We initialize a variable `count` to 0 to keep track of the number of vowels.
// - We loop through each character in the input string and check if it is a vowel using the `includes` method of the `vowels` string. If it is a vowel, we increment the `count` variable.
// - Finally, we return the `count` variable, which contains the number of vowels in the input string.

// Note:

// - This function only counts English vowels. If you need to count vowels in other languages, you may need to modify the `vowels` string accordingly.



// question - 5 :  Write a function that takes a string as input and returns true if the string is a valid email address, false otherwise.
function isValidEmail(email) {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  console.log(isValidEmail("pgupta@duck.com")); // false
  console.log(isValidEmail("example@example.com")); // true
  console.log(isValidEmail("example.example@example.com")); // true
  console.log(isValidEmail("example-example@example.com")); // true
  console.log(isValidEmail("example@example.co.in")); // true
  console.log(isValidEmail("example123@example.com")); // true
  console.log(isValidEmail("example@.com")); // false
  console.log(isValidEmail("example@example.")); // false
  console.log(isValidEmail("example@examplecom")); // false
  console.log(isValidEmail("example@examplecom.")); // false
  console.log(isValidEmail("example@.com.")); // false

//   Explanation:

// This function takes an email address string as input and uses a regular expression to check whether the email address is valid or not. The regular expression checks for the following conditions:

// - The email address should start with one or more word characters (alphanumeric characters or underscore), followed by zero or more groups of a period or hyphen followed by one or more word characters.
// - The "@" symbol must be present after the above pattern.
// - The domain name should consist of one or more word characters, followed by zero or more groups of a period or hyphen followed by two or three word characters (for example, ".com" or ".edu").

// Note: This regular expression does not cover all possible email address formats, but it covers the most common ones.


// question - 6 : Write a function that uses arrow function syntax to add two numbers and return the result.

const add = (a, b) => {
    // arrow function syntax used to define the function
    // takes two parameters a and b and returns their sum
    return a + b;
  }
  
  // testing the function
  console.log(add(3, 4)); // expected output: 7
  console.log(add(5, -2)); // expected output: 3

// Explanation:
// The `add` function is defined using arrow function syntax, which provides a more concise way of defining functions compared to the traditional function syntax. The function takes two parameters `a` and `b` and returns their sum using the `+` operator.

// We test the `add` function by calling it with different arguments and logging the expected output using `console.log()` statements.

// Note:
// Arrow functions can be a powerful tool for writing concise and readable code. They are especially useful when working with functions that take one or more parameters, since they allow you to define the function in a single line of code.



// question - 7 : Write a function that takes an array of numbers and uses the spread operator to find the maximum value.

const findMax = (numbers) => {
    // spread operator used to pass the array elements as arguments to Math.max()
    return Math.max(...numbers);
  }
  
  // testing the function
  console.log(findMax([5, 3, 9, 1, 7])); // expected output: 9
  console.log(findMax([0, -2, 10, 4])); // expected output: 10


//   Explanation:
// The `findMax` function takes an array of numbers as its parameter. It uses the spread operator (`...`) to pass the elements of the array as separate arguments to the `Math.max()` function, which returns the maximum value. The maximum value is then returned by the `findMax` function.

// We test the `findMax` function by calling it with different arrays of numbers and logging the expected output using `console.log()` statements.

// Note:
// The spread operator is a powerful feature of ES6 that allows you to "spread" the elements of an array or iterable object as separate arguments to a function. It can be very useful for writing concise and readable code, especially when working with mathematical functions like `Math.max()` that take multiple arguments.


// question - 8 : Write a function that takes an array of strings and returns a new array with all the strings in uppercase.

const toUpperCase = (strings) => {
    // use Array.map() to create a new array with the uppercase versions of the strings
    return strings.map((string) => string.toUpperCase());
  };
  
  // testing the function
  console.log(toUpperCase(["Pranay", "Gupta"])); // expected output: ['PRANAY', 'GUPTA']
  console.log(toUpperCase(["hello", "world"])); // expected output: ['HELLO', 'WORLD']
  console.log(toUpperCase(["abc", "DEF", "gHi"])); // expected output: ['ABC', 'DEF', 'GHI']

//   Explanation:
// The `toUpperCase` function takes an array of strings as its parameter. It uses the `Array.map()` method to create a new array with the uppercase versions of the strings. The `Array.map()` method calls a callback function for each element of the array, and the return value of the callback function is used to construct the new array. In this case, the callback function is an arrow function that uses the `toUpperCase()` method to convert each string to uppercase.

// We test the `toUpperCase` function by calling it with different arrays of strings and logging the expected output using `console.log()` statements.

// Note:
// The `Array.map()` method is a useful method for creating a new array based on an existing array. It takes a callback function as its parameter, which is called for each element of the array. The callback function should return the modified value for each element. In this case, we used it to create a new array with the uppercase versions of the strings.



// question - 9 : Write a function that takes an object and uses destructuring to extract the values of its properties and return them as an array.
const objectToArray = (obj) => {
    // use object destructuring to extract the values of the object properties
    const { prop1, prop2, prop3 } = obj;
  
    // return an array with the extracted values
    return [prop1, prop2, prop3];
  };
  
  // testing the function
  console.log(objectToArray({ prop1: 5, prop2: "hello", prop3: true })); // expected output: [5, 'hello', true]
  console.log(objectToArray({ prop1: "abc", prop2: 123, prop3: null })); // expected output: ['abc', 123, null]

//   Explanation:
// The `objectToArray` function takes an object as its parameter. It uses object destructuring to extract the values of the object properties into separate variables with the same names as the properties (`prop1`, `prop2`, and `prop3`). Then, it returns an array with these extracted values.

// We test the `objectToArray` function by calling it with different objects and logging the expected output using `console.log()` statements.

// Note:
// Object destructuring is a powerful feature of ES6 that allows you to extract the properties of an object into separate variables with the same names as the properties. It can be a useful tool for writing concise and readable code, especially when working with complex objects.


// question - 10 :Write a function that takes a string and uses template literals to create a new string with the input string and a variable inserted into it.
const createString = (inputString, variable) => {
    // use template literals to create a new string with the input string and variable
    return `${inputString} ${variable}`;
  };
  
  // testing the function
  console.log(createString("My name is", "Pranay")); // expected output: 'My name is Pranay'
  console.log(createString("Hello", "world!")); // expected output: 'Hello world!'
  console.log(createString("The value is:", 123)); // expected output: 'The value is: 123'

//   Explanation:
// The `createString` function takes two parameters: `inputString` and `variable`. It uses template literals to create a new string that combines the `inputString` and `variable` values. Template literals are enclosed in backticks ( `) and allow you to embed expressions and variables into a string using` ${...}` syntax.

// We test the `createString` function by calling it with different values and logging the expected output using `console.log()` statements.

// Note:
// Template literals are a useful feature of ES6 that can simplify string concatenation and make it easier to embed variables and expressions into strings. They are particularly useful when working with longer or more complex strings that may require multiple variables or expressions to be combined into a single output string.