// saare elements ko fetch kr rhe h suru me jinme javascript se values se lenge ya fir un elements k andar update krenge
let inputSlider =  document.querySelector('[data-lengthSlider]')
const lengthDisplay = document.querySelector('[data-lengthNumber]')

const passwordDisplay = document.querySelector('[data-passwordDisplay]')
const copyBtn = document.querySelector('[data-copy]')
const copyMsg = document.querySelector('[data-copyMsg]')
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

   
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/'; // symbols ki list bnali taaki isme se random symbol pick kr ske using generate random symbol function kyuki inke ASCII codes k range nhi h hmare paas

let password = ""
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set circle color in start to grey
setIndicator("#ccc");

//ye .value kisi v form element ki current value ko set or get krti h , used only with form elements 

function handleSlider(){
    inputSlider.value = passwordLength; //sets the value of the input element to the value of passwordLength
    lengthDisplay.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"


}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow daal rhe h 
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max){
    return Math.floor(Math.random()*(max - min))+min
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,122));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}  

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    //agr checked h toh inki values true kr do --> .checked property use hoti h find krne ki lie ki checked h ki nhi vo input element
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

//copy to clipboard function
async function copyContent() { //navigator.clipboard.writeText - ek method h jo ues hota h clipboard me text copy krne k lie
    try {
        await navigator.clipboard.writeText(passwordDisplay.value); // this method retunrs a promise 
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;   //e.target refers to element that triggered this event listener aur e.target.value -> value fetch krta h is event se
   
    handleSlider(); // ye function input slider ki value kok aur length Display ki value ko set krta hai  
})

copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})



// shuffle password function 
function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

// kisi v checkbox ko tick kre ya untick kre , dobara se countinng start hogi ki ticked checkbox kitne h 
function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition - agr password ki length checkcount se km hogi toh password ki length ko checkcount ke equal kr rhe hai 
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


generateBtn.addEventListener('click', () => {
    
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");

    //shuffle the password
    password = shufflePassword(Array.from(password));

    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");

    //calculate strength
    calcStrength();
});