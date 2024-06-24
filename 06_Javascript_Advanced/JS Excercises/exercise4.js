//topics covered
// Promises and async/await
// Error handling and debugging

// question - 1 :  Write a function that returns a promise which resolves after a specified number of milliseconds.
// Solution
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

// Test case 1
console.log("start");
delay(2000).then(() => {
  console.log("2 seconds elapsed");
});
console.log("end");

// Output:
// start
// end
// 2 seconds elapsed

// Explanation:

// - The `delay` function takes in a number of milliseconds as an argument and returns a Promise object.
// - Within the Promise object, `setTimeout` is used to delay the execution of the `resolve` function by the specified number of milliseconds.
// - Once the delay is complete, the Promise is resolved.
// - In the test case, we call `delay` with 2000 milliseconds (or 2 seconds) and then output "2 seconds elapsed" to the console once the Promise is resolved.

// Note: The `delay` function can be used to simulate a delay in an asynchronous function call.




// question-2 : Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.
// /**
//  * Returns a promise which rejects with a specified error message after a specified number of milliseconds.
//  */
function rejectWithDelay(errorMessage, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, delay);
    });
  }
  
  // Example usage:
  rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
    console.error(error.message); // Output: Oops! Something went wrong.
  });

// Explanation:

// - The `delay` function takes in a number of milliseconds as an argument and returns a Promise object.
// - Within the Promise object, `setTimeout` is used to delay the execution of the `resolve` function by the specified number of milliseconds.
// - Once the delay is complete, the Promise is resolved.
// - In the test case, we call `delay` with 2000 milliseconds (or 2 seconds) and then output "2 seconds elapsed" to the console once the Promise is resolved.

// Note: The `delay` function can be used to simulate a delay in an asynchronous function call.



//question - 3 :  Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.

function getRandomNumbersArray(length, delay) {
    return new Promise((resolve, reject) => {
      // Using setTimeout to simulate delay
      setTimeout(() => {
        // Creating an array of random numbers of specified length
        const numbersArray = Array.from({ length }, () => Math.floor(Math.random() * 100));
        // Resolving the promise with the generated array
        resolve(numbersArray);
      }, delay);
    });
  }
  
  // Testing the function with delay of 2 seconds and array length of 5
  getRandomNumbersArray(5, 2000)
    .then((result) => {
      console.log(result); // Output: [23, 74, 48, 52, 63]
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Testing the function with delay of 3 seconds and array length of 10
  getRandomNumbersArray(10, 3000)
    .then((result) => {
      console.log(result); // Output: [79, 5, 64, 46, 2, 55, 33, 71, 28, 38]
    })
    .catch((error) => {
      console.error(error);
    });


//     Explanation:

// - The `getRandomNumbersArray` function takes two parameters: `length` and `delay`.
// - It returns a new Promise which resolves after the specified `delay` with an array of `length` random numbers between 0 and 100.
// - The Promise resolves using the `resolve` function and returns the generated array.
// - The Promise rejects using the `reject` function if any error occurs.
// - The function is tested using two different delay and length values.

// Note:

// - The `Array.from` method is used to generate an array of random numbers with the specified length.



// question -4 : Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.

// Function that uses async/await to make an API call and returns a promise with the response
async function fetchData(url) {
    try {
      const response = await fetch(url); // Wait for the response from the server
      const data = await response.json(); // Wait for the JSON data from the response
      return data; // Return the data as a resolved promise
    } catch (error) {
      return Promise.reject(error); // Return the error as a rejected promise
    }
  }
  
  // Example usage of the function
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
      console.log(data); // Log the fetched data
    })
    .catch((error) => {
      console.error(error); // Log any errors
    });

//     Explanation:

// - The `fetchData` function is declared using the `async` keyword, which means it will return a promise.
// - The function takes a `url` parameter which specifies the URL of the API to fetch data from.
// - Inside the function, a `try-catch` block is used to handle any errors that may occur during the API call.
// - `await` is used to wait for the response from the server and for the JSON data from the response.
// - If the API call is successful, the data is returned as a resolved promise using the `return` statement.
// - If an error occurs, the error is returned as a rejected promise using the `Promise.reject()` method.
// - The `fetchData` function can be called with the desired API URL as an argument and then can be chained with `.then()` and `.catch()` methods to handle the resolved and rejected promises respectively.

// Note:

// - The `fetch()` method is used to make an API call to fetch data from a server. It returns a promise that resolves with the `Response` object representing the response to the request.
// - The `.json()` method is used to parse the JSON data from the response and return a promise that resolves with the parsed data.


// question - 5 : Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.

// This function makes multiple API calls in parallel using async/await
async function fetchMultipleData(urls) {
    try {
      // Use Promise.all to make multiple API calls and wait for all of them to resolve
      const responses = await Promise.all(urls.map(url => fetch(url)));
  
      // Extract the response data from each API call and return as an array
      const data = await Promise.all(responses.map(response => response.json()));
      return data;
    } catch (error) {
      // Return the error message if any of the API calls fail
      return error.message;
    }
  }
  
  // Example usage
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
  ];
  
  // Call the function with the URLs and log the array of responses
  fetchMultipleData(urls)
    .then(responses => console.log(responses))
    .catch(error => console.log(error));

    .catch(error => console.log(error));
    ​
    // Explanation:
    // The fetchMultipleData function uses async/await to make multiple API calls in parallel using Promise.all.
    // The function takes an array of URLs as input and returns a promise that resolves to an array of response data.
    // Within the try block, Promise.all is used to make multiple API calls and wait for all of them to resolve.
    // The responses variable holds an array of responses from the API calls.
    // Promise.all is used again to extract the response data from each API call and return it as an array of data.
    // If any of the API calls fail, the catch block returns the error message.
    // The function is called with an array of example URLs and the array of responses is logged to the console.
    // Note: This example uses the fetch function to make the API calls, but any method of making HTTP requests (e.g. axios, superagent) can be used.



    // question - 6 : Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.

    // Function that throws an error if the parameter is not a number
function validateNumber(num) {
    return new Promise((resolve, reject) => {
      if (typeof num !== "number") {
        reject(new Error("Invalid input. Expected a number."));
      } else {
        resolve(num);
      }
    });
  }
  
  // Testing the function
  validateNumber(5)
    .then(num => console.log(num)) // Output: 5
    .catch(err => console.error(err.message));
  
  validateNumber("not a number")
    .then(num => console.log(num))
    .catch(err => console.error(err.message)); // Output: "Invalid input. Expected a number."


//     Explanation:

// - The `validateNumber` function takes a parameter `num`.
// - It returns a promise that either resolves with `num` if it is a number or rejects with an `Error` object containing the custom error message.
// - The function is tested with two examples:
//     - The first one passes a number as input and expects to see the number printed in the console.
//     - The second example passes a string as input and expects to see the custom error message printed in the console.

// Note:

// - The `typeof` operator is used to check if the input is a number or not.
// - We use `reject` to reject the promise with an error message when the input is not a number.



// question - 7 : Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.

function myFunction(num) {
    if (typeof num !== "number") {
      throw new Error("Parameter must be a number");
    }
  
    return num * 2;
  }
  
  try {
    const result = myFunction("hello");
    console.log(result);
  } catch (error) {
    console.log("Error caught:", error.message);
  }

//   Explanation:

// - We define a function `myFunction` that takes a parameter `num`.
// - Inside the function, we check if the `typeof` `num` is not equal to `"number"`. If it is not a number, we throw a new `Error` with a custom message.
// - If `num` is a number, we return its double value.
// - We then wrap a call to `myFunction` in a `try-catch` block.
// - If an error is thrown from `myFunction`, the catch block is executed and the error message is logged to the console.

// Note:

// - The `try-catch` block is used to catch and handle errors that may occur within the code. It is good practice to handle errors in this way so that the code can gracefully handle unexpected errors that may occur at runtime.



// question - 8 : Write a function that uses console.assert to check whether a variable is equal to a certain value, and throws an error if the assertion fails.

function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
  }

//   Explanation:
// This function takes in three parameters:

// - `actual`: the actual value that needs to be checked.
// - `expected`: the expected value that `actual` should be equal to.
// - `message` (optional): a custom error message to be displayed if the assertion fails.

// The function uses the `console.assert()` method to check whether `actual` is equal to `expected`. If the assertion fails, it throws an error with a default error message that includes the expected and actual values. If a custom error message is provided, that message will be displayed instead of the default error message.

// Note:

// - This function can be used for simple value equality assertions in JavaScript.
// - It is recommended to use a testing framework like Mocha or Jest for more complex tests.


//question - 9 : Write a function that logs an error message to the console if a certain condition is not met.
function logErrorIf(condition, message) {
    if (!condition) {
      console.error(message);
    }
  }
//   Explanation:

//   - This function takes in two parameters - `condition` and `message`. The `condition` parameter is the condition that needs to be checked and if it is false, the function logs an error message to the console. The `message` parameter is the error message that will be logged to the console if the condition is not met.
//   - The function first checks whether the `condition` parameter is false using the `!` operator. If the condition is false, it logs the error message to the console using the `console.error()` method.
  
//   Note:
//   This function can be used to log error messages to the console based on certain conditions in your code. You can call this function at any point in your code where you want to check a certain condition and log an error message if that condition is not met.



//question - 10 : Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.
function handlePromiseError(promise, errorMessage) {
    promise.catch(error => {
      console.error(errorMessage, error);
    });
  }

//   Explanation:

// The `handlePromiseError` function takes in two parameters:

// - `promise`: The Promise that needs to be handled.
// - `errorMessage`: The custom error message to be logged to the console.

// The function catches any errors thrown by the Promise using the `.catch()` method and logs the custom error message and the error itself to the console using `console.error()`.

// Note:

// - This function can be used to handle Promise errors in a more centralized manner instead of having multiple `.catch()` blocks throughout the code.
// - It's important to pass in a descriptive and specific error message to help with debugging and troubleshooting.