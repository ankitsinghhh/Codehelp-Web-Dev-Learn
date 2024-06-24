// question 1 Write a function that takes two numbers as arguments and returns their sum.

function sum(a,b){
    return a+b;
}


//question-2c Write a function that takes a string as an argument and returns its length.

function strLength(a){
    return a.length;
}

console.log(strLength("question"))

//question3 - Write a program that takes two numbers and displays their sum, difference, product, and quotient.

function operations(a,b){
    console.log("sum ",a+b)
    console.log("difference ",a-b)
    console.log("product",a*b)
    console.log("quotient ",a/b)
}

operations(10,20);

//question4 - Write a function that takes two numbers as arguments and returns the larger number.

function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

console.log(max(10,20))

// question5 - Write a program that displays a string in reverse order.

reverse the string 
function reverse(str){
    let str2=""
    for(let i=0;i<str.length;i++){
        
        str2 = str2 + str[str.length-1-i]
    }
    return str2;
}

console.log(reverse("reverse"))



//question6 -Write a program that takes a number and checks whether it is positive, negative, or zero.
function check(a){
    if(a>0){
        console.log("positive")
    }
    else if(a<0){
        console.log("negative")

    }

    else{
        console.log("zero")
    }
}

check(-19)
check(10)
check(0)

//question-7 - Write a program that takes a number and prints the multiplication table for that number.

function table(a){
    for(let i =0 ;i<=10;i++){
        console.log(a,"*",i,"=",a*i)
    }
}
table(10)

// // question-8 - Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

function natsum(a){
    let total =0;
    for(let i =1;i<=10;i++){
        total = total + i;
    }
    return total;
}

console.log(natsum(10))

// // question-9 - Write a program that takes a string and prints out the number of vowels in the string.

function vowels(a){
    let count=0;
    for(let i in a){
      
        if(a[i]=='a' || a[i]=='e' || a[i]=='i' || a[i]=='o' || a[i]=='u'){
            count = count + 1;
        }
    }

    return count;
}
console.log("count",vowels("amazingasyou"))

// //another apporach - much better one 
// function vowels(a) {
//     let count = 0;
//     for (let i = 0; i < a.length; i++) {
//         let char = a[i].toLowerCase();  // Convert character to lowercase to make the check case-insensitive
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("count", vowels("Stringar"));  // Output: count 2


// // question-10  - Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

function findCommonElements(arr1, arr2) {
    // Create an empty array to hold the common elements
    let commonElements = [];
  
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is in arr2
      if (arr2.includes(arr1[i])) {
        // If the element is in arr2 and not already in commonElements array, add it
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    // Sort the commonElements array in ascending order
    commonElements.sort((a, b) => a - b);
  
    // Return the commonElements array
    return commonElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); // Outputs: [3, 4, 5]