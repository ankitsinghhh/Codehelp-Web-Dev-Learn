//topics covered
// - DOM manipulation and events
// - Asynchronous JavaScript and callbacks

//question-1; Write a function to change the text of a button on the click event.
// Function to change the text of a button on click event
function changeButtonText() {
    // Select the button element
    const button = document.querySelector("button");
  
    // Check if the button is currently showing "Click Me!"
    if (button.textContent === "Click Me!") {
      // If it is, change the text to "Clicked!"
      button.textContent = "Clicked!";
    } else {
      // If it is not, change the text back to "Click Me!"
      button.textContent = "Click Me!";
    }
  }
  
  // Add a click event listener to the button
  const button = document.querySelector("button");
  button.addEventListener("click", changeButtonText);



  //question - 2 : Write a function to add a CSS class to an element on the mouseover event.

//   The mouseover event sends tracking data when a visitor hovers their cursor over an element on a page. You can specify how long the visitor needs to hover the cursor over that element.

// This function takes an element ID and a class name as arguments
// It adds the class name to the element on mouseover event
function addClassOnMouseOver(elementID, className) {
  // Get the element by ID
  const element = document.getElementById(elementID);

  // Add an event listener to the element for the "mouseover" event
  element.addEventListener("mouseover", () => {
    // Add the class name to the element
    element.classList.add(className);
  });
}

// Test case
// Add the "active" class to the "button" element on mouseover
addClassOnMouseOver("button", "active");



//question - 3 : Write a function to remove a CSS class from an element on scroll event.

// Function to remove a CSS class from an element on scroll event
function removeClassOnScroll(element, className) {
    // Add scroll event listener to the window object
    window.addEventListener("scroll", function() {
      // Check if the element has the specified class name
      if (element.classList.contains(className)) {
        // Remove the class name from the element
        element.classList.remove(className);
      }
    });
  }
  
  // Test case 1
  const box1 = document.querySelector("#box1");
  removeClassOnScroll(box1, "highlight");
  
  // Test case 2
  const box2 = document.querySelector("#box2");
  removeClassOnScroll(box2, "active");




  //question- 4 : Write a function to toggle the display of a div element on click event.

  function toggleDivDisplayOnClick(divId) {
    const div = document.getElementById(divId);
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
  
  // Test case
  // HTML:
  // <button onclick="toggleDivDisplayOnClick('myDiv')">Toggle Div Display</button>
  // <div id="myDiv" style="display:none;">This is the content of the div</div>


//   Explanation
//   - The function `toggleDivDisplayOnClick` takes an argument `divId` which is the id of the div element to be toggled on click.
//   - The function first gets the div element by id using `document.getElementById`.
//   - It then checks the current `display` style of the div element using `div.style.display`.
//   - If the `display` style is `none`, it sets it to `block` using `div.style.display = "block"`.
//   - If the `display` style is not `none`, it sets it to `none` using `div.style.display = "none"`.
//   - The function is attached to a button element's `onclick` event to toggle the display of the div element.
//   - The test case shows how to use the function in HTML. A button element with `onclick` attribute is added, and the id of the div element to be toggled is passed as an argument to the function.
  
//   Note:
  
//   - The function assumes that the div element has an inline `display` style property. If the element's `display` style is set in an external CSS file, the function needs to be modified to get the computed style of the element using `window.getComputedStyle`.


  //question -5 : Write a function to validate a form on submit event.
  function validateForm(event) {
    event.preventDefault(); // prevent the form from submitting
    const form = event.target; // get the form element
    let isValid = true; // initialize a flag for validation
    
    // loop through the form elements
    for (let i = 0; i < form.elements.length; i++) {
      const input = form.elements[i];
      const value = input.value.trim(); // trim the input value
      
      // if input is required and empty
      if (input.hasAttribute("required") && value === "") {
        isValid = false; // mark validation as failed
        input.classList.add("invalid"); // add invalid class to input
      } else {
        input.classList.remove("invalid"); // remove invalid class from input
      }
    }
    
    // show success or error message based on validation
    const message = document.getElementById("message");
    if (isValid) {
      message.classList.remove("error");
      message.innerText = "Form submitted successfully!";
    } else {
      message.classList.add("error");
      message.innerText = "Please fill out all required fields.";
    }
  }
  
  // Test case: attach the validateForm function to the submit event of a form element
  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);

//   Explanation:

// - The `validateForm` function takes an event object as a parameter, which is the submit event triggered by the form.
// - The function prevents the default form submission using `event.preventDefault()`.
// - The function loops through all the form elements using the `form.elements` property.
// - For each form element, the function checks if it is required and empty. If it is, the function sets the `isValid` flag to `false` and adds the `invalid` class to the input element. Otherwise, the function removes the `invalid` class from the input element.
// - After validating all the form elements, the function shows a success or error message based on the `isValid` flag. The message is displayed in a `<div>` element with an ID of `message`.
// - The test case attaches the `validateForm` function to the submit event of a form element with an ID of `myForm`.

// Note: This function only checks if the required fields are empty and adds an `invalid` class to them. You can modify the function to add more validation checks as per your requirements.
  
  

  // question - 6 : Write a function to fetch data from an API using the Fetch API and handle the response with a callback.

  function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  // Example usage
  fetchData('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });

//   - The function `fetchData` takes two arguments: `url` and `callback`.
// - It uses the Fetch API to make a GET request to the specified URL.
// - If the request is successful, the response is converted to JSON format and passed to the callback function along with a `null` error value.
// - If the request fails, the error is passed to the callback function along with a `null` data value.
// - The example usage demonstrates how to call the `fetchData` function and handle the response with a callback function.
// - In this example, the `fetchData` function is used to fetch data from the JSONPlaceholder API for a single to-do item and log it to the console.

// Note:

// - The Fetch API is built into modern web browsers and allows developers to make HTTP requests to servers using JavaScript.



// question - 7 : Write a function to read a file using the Node.js File System module and handle the contents with a callback.

const fs = require('fs');

function readFileContents(filepath, callback) {
  // Use the readFile method of the fs module to read the contents of the file
  fs.readFile(filepath, 'utf8', (error, contents) => {
    if (error) {
      // If an error occurs, call the callback with the error as the first argument
      callback(error);
    } else {
      // If the file is read successfully, call the callback with the contents as the second argument
      callback(null, contents);
    }
  });
}

// Example usage
readFileContents('example.txt', (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log(contents);
  }
});

// - The `readFileContents` function takes two arguments: the path to the file to be read and a callback function to handle the file contents.
// - The `fs` module is required at the top of the file.
// - Within the `readFileContents` function, the `readFile` method of the `fs` module is used to read the contents of the file.
// - The first argument to the `readFile` method is the path to the file to be read.
// - The second argument is the encoding of the file contents (in this case, `'utf8'`).
// - The third argument is a callback function that will be called once the file is read. The callback takes two arguments: an error (if one occurred) and the contents of the file (if the file was read successfully).
// - If an error occurs while reading the file, the callback is called with the error as the first argument.
// - If the file is read successfully, the callback is called with `null` as the first argument and the contents of the file as the second argument.
// - An example usage of the `readFileContents` function is shown at the bottom of the code block. The function is called with the path to a file and a callback function. If an error occurs, the error is logged to the console. If the file is read successfully, the contents of the file are logged to the console.

// Note:

// - This code assumes that the file being read is a text file (hence the `'utf8'` encoding argument). If you're reading a binary file (e.g. an image), you'll need to use a different encoding argument.
// - This code uses a callback function to handle the file contents, but you could also use a Promise or async/await instead.

//question - 8 : Write a function to load an image asynchronously and handle the load event with a callback.

function loadImageAsync(url, callback) {
    const img = new Image();
  
    // Set up event listener for when the image has loaded
    img.addEventListener('load', () => {
      callback(null, img);
    });
  
    // Set up event listener for when there's an error loading the image
    img.addEventListener('error', () => {
      callback(new Error(`Failed to load image at ${url}`));
    });
  
    // Start loading the image
    img.src = url;
  }
  
  // Example usage:
  loadImageAsync('https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg', (error, img) => {
    if (error) {
      console.error(error);
    } else {
      // Add the loaded image to the page
      document.body.appendChild(img);
    }
  });

//   Explanation:

// - The `loadImageAsync` function takes two arguments: the URL of the image to load, and a callback function to handle the result.
// - Inside the function, we create a new `Image` object, which we'll use to load the image.
// - We set up event listeners for the `load` and `error` events of the image object. When the image loads successfully, we call the callback function with `null` as the error argument, and the loaded image object as the second argument. If there's an error loading the image, we call the callback with an `Error` object as the first argument, and no second argument.
// - Finally, we set the `src` property of the image object to the specified URL, which starts the loading process.

// Note:

// - This function uses the HTML5 `Image` object to load the image, which is not available in Node.js. To load images in Node.js, you'll need to use a different method, such as the `image-size` or `sharp` libraries.



// question-9:  Write a function to simulate an asynchronous delay using a callback.

function simulateDelay(delay, callback) {
    setTimeout(callback, delay);
  }
  
  // Example usage:
  console.log("Before delay");
  
  simulateDelay(2000, () => {
    console.log("After delay");
  });
  
  console.log("Function finished executing");
  
  // Output:
  // Before delay
  // Function finished executing
  // After delay (after a 2 second delay)


//   Explanation:

// - The `simulateDelay` function takes two arguments: the delay time in milliseconds and a callback function to execute after the delay has completed.
// - Inside the function, `setTimeout` is used to delay the execution of the callback function for the specified amount of time.
// - The callback function is executed once the delay has completed.
// - In the example usage, the console logs demonstrate that the function continues to execute while the delay is happening, and the callback function executes after the delay has completed.

// Note:

// - This function is a basic example of simulating an asynchronous delay using callbacks. In real-world situations, it may be more appropriate to use Promises or async/await syntax for more robust handling of asynchronous operations.



// question - 10 : 
function downloadFile(url, progressCallback, completionCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob"; // Specify the response type as blob

  xhr.addEventListener("progress", (event) => {
    // Calculate the progress percentage and invoke the progress callback
    const progress = Math.round((event.loaded / event.total) * 100);
    progressCallback(progress);
  });

  xhr.addEventListener("load", () => {
    // Invoke the completion callback with the downloaded blob object
    completionCallback(xhr.response);
  });

  xhr.send();
}

// Test case
const url = "https://dot-batch-project-assets.vercel.app/devdetective-images.zip";
downloadFile(
  url,
  (progress) => console.log(`Download progress: ${progress}%`), // progress callback logs the progress percentage
  (blob) => console.log(`File downloaded. Blob size: ${blob.size} bytes`) // completion callback logs the size of the downloaded blob
);

// Explanation:

// - The `downloadFile` function takes three arguments: `url`, `progressCallback`, and `completionCallback`.
// - It creates an instance of the XMLHttpRequest object to make the download request to the given `url`.
// - The `responseType` property of the XHR object is set to `"blob"` to indicate that the response should be treated as a binary object.
// - Two event listeners are added to the XHR object:
//     - The `progress` event listener is triggered as the download progresses. It calculates the progress percentage and invokes the `progressCallback` with the progress percentage.
//     - The `load` event listener is triggered when the download is complete. It invokes the `completionCallback` with the downloaded blob object.
// - Finally, the XHR object sends the download request to the server.

// Note: This function uses the XMLHttpRequest object to download the file asynchronously. It can be used in a browser environment, but not in a Node.js environment. In Node.js, the `fs` module should be used to read and write files asynchronously.