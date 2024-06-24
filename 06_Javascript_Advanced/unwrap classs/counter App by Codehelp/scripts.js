// using onlick and innerText

let countvalue = document.querySelector('#counter')
console.log(countvalue)

// my checks
// console.log(typeof parseInt(countvalue.innerText) )

//increment function
const increment = () => {
    //get the value from UI 
    let value = parseInt(countvalue.innerText) //parseInt converts the string to a number , the innertext gives us the string so it needs to be converted
    //update the value 
    value = value + 1;
    //set teh value into UI 
    countvalue.innerText = value;
}

// decrement function 
const decrement = () => {
     //get the value from UI 
     let value = parseInt(countvalue.innerText)
     //update the value 
     value = value - 1;
     //set teh value into UI 
     countvalue.innerText = value;

}