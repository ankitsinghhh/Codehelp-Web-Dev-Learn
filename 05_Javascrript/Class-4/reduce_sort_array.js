// -------------Reducing an Arrray----------------------

let arr=[1,2,3,4,5,6,7,8,9]

let total = 0;

for(let value of arr){
    total = total + value;
}

console.log(total)

// ek or tarika h toal find krne ka , pure error ko reduce krke usko sum m convert kr den h 

let TotalSum = arr.reduce((accumulator, currvalue) => accumulator + currvalue, 0) // agr 0 se initialise nhi krenge toh accumulator first value se initialise hoga aur currvalue second value se initialise hogi


console.log(TotalSum)