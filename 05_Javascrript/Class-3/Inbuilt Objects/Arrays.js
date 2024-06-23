//array is a list of objects 

//---------------creation-------------------------

let numbers = [1,2,3,4,5,9,6]
console.log(numbers)


//---------------accessing the elements----------------

// indexign starts from zero

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

//-------------insertion in elements------------------------

//to insert at end -> push
// numbers.push(7)
// console.log(numbers)

// //to insert at start -> unshift
// numbers.unshift(0)
// console.log(numbers)

// //to insert at any index -> splice
// //numbers.splice(index, deletecount, elements to insert separated by commas)
// numbers.splice(3,0,'a','b','c')
// console.log(numbers)

//-------------Searching in Array ----------------------------
console.log(numbers)
console.log(numbers.indexOf(5)) // returns index of given element if it exists
// if element does not exist , then it returns -1


//--------------to check if number exists in an array or not ----------------
if(numbers.indexOf(1)!= -1){
    console.log("number is present in array")
}
else {
    console.log("number is not present in array")
}

//good practice is to use include method
console.log(numbers.includes(5)) //returns true or false


console.log(numbers.indexOf(4,4)) // ( element to find index of , from which index to start searching)


// -----------------------Arrray of Objects-----------------------

let courses = [
    {no:1, name:'lvoe'},
    {no:2, name:'rahul'},
    {no:3, name:"raghav",age:43}
]

console.log(courses)
console.log(courses[0])

console.log(courses[0].no)

console.log(courses.indexOf({no:1, name:'lvoe'})) // returns -1 but why since its value is present  - ? => coz objects are referenced on address and the objects are different as both are different because both are stored at different addresses



// ---------------------conclusion on searching in objects----------------------

// if we are searching on primitives , then indexof and includes work 

// if we are searching on non-primitives (objects/referecnces), then indexof and includes doesnt work


// ---------------------Serching in Non-primitives in objects-----------------

//===============using callback functions=============

// ek method execute krna h lekin jo data milega vo ek function se milega - jise callback function kehte h 
let res = courses.find(function(course){
    return course.name == 'lvoe';
}
)
//find function object ko find krta h based on condition jo hum isko dete hai as a callback function/ predicate function 
// ek condition k aadhar pe find krna h object ko 
//ek aisa course return jiske course ka naam h lvoe

console.log(res) //returns the object
//if not present , undefined will be returned

//-------------------arrow function notation to minimize the length of function-------------------



// let res2=courses.find( (course) =>{
//     return course.name == 'rahul';
// })


// input parameters single h callback function me toh bracket hta skte h
let res2 = courses.find( course => course.name =='rahul')

console.log(res2)


//-------------------------Removing element from Array-----------------

//end -> pop()
//beginning-> shift()
//middle ->splice(index , deletecount-no.of elements to delete)

// let arr= [1,2,3,4,5,6,7,8,9]

// arr.pop() //end

// console.log(arr)

// arr.shift() //beginning

// console.log(arr)

// arr.splice(3,2)

// console.log(arr) //middle


// ---------------------Emptying an Array----------------------

let arr= [1,2,3,4,5,6]
let number2 = arr; //address is copied here

// arr.length=0; // to empty an array , at its address --best prcttice

// arr = []; // a empty array is assigned but original array elements at location still there 


//third way - using splice - good practice
arr.splice(0,arr.length)

console.log(arr)
console.log(number2)



//-----------------------combining and slicing arrays-------------------

let first = [1,2,3,4,5]
let second = [5,6,7,8,]

//using concat to combine
let combined = first.concat(second)
console.log(combined)

//slicing 
let sliced = combined.slice(2,4) //  ( start_index , end_index ) means start to end-1
console.log(sliced)

console.log(combined)
let sliced2 = combined.slice(2) // ( start_index ) means start to last
console.log(sliced2)

let copy = combined.slice() //  () menas zeroth index to lastindex


//------------------spread operator ------------------------------

let one = [1,2,3]
let two  = [4,5,6]

//to combine
let combination = [...one,...two,'b',false]
console.log("using spread operator",combination)

//to create copy
let another = [...combination]
console.log(another)

//----------------iterating an array ------------------------------

let loop = [10,20,30,40,50]  

//using for of
for(let i of loop){
    console.log(i)
}

//using for each loop - iske andar callback function likhna hota h
// loop.forEach(
//     function(number){
//         console.log(number)
//     }
// )


//using arrow function with for each
loop.forEach( number => console.log(number))


//---------------------Joining Arrays ------------------------------

let nos = [10,20,30,40,50]

const joined = nos.join(',') // returns string 
console.log(joined)

//splitting 

let msg = "this is my first message"
let parts = msg.split(" ")
console.log(parts) // it returns the array

// hence split can be used convert array converted to string using join , to convert it back to array
let arr5 = joined.split(",")
console.log(arr5) // returns array of strings that is numbers have been converted to strings 


//-------------------------Sorting Arrays ---------------------------

let nolist = [40,30,80 , 60 ]

nolist.sort()
console.log(nolist)

nolist.reverse()
console.log(nolist)

// to sort object use same predicate function named on some condition

//-------------------------Filtering Arrrays-------------------------

let  list= [10,20,30,40,50,60,70,80,90,100]

// let filtered = list.filter(
//     function(number){
//         return number % 8 == 0
//     }
// )

// console.log(filtered)

// let filtered = list.filter(function(number){
//     return number>=40;
// })
// console.log(filtered)

// let filtered = list.filter( number => number>=40)
// console.log(filtered)


//---------------------------Mapping Arrays------------------------

let aray = [7,8,9,10    ]

// let items =   aray.map( function(value){
//     return 'student_no ' + value;
// })

let items = aray.map( value => 'student_no: ' + value );


console.log(aray)
console.log(items)


//---------------------------Mapping in Objects------------------------

// let numbero = [1,2,-9,-6]
// let filtered = numbero.filter( value => value>=0)

// // let objectitem = filtered.map(
// //      function(num){
// //         return {value:num}
// // })

// let objectitem = filtered.map( num => ({value: num}));

// console.log(objectitem)

//---------------------------Chaining------------------------


let numbero = [1,2,-9,-6]
let objectitem = numbero
            .filter( value => value>=0)
            .map( num => ({value: num}));



console.log(objectitem)






















