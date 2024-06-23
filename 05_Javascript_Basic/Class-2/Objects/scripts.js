console.log("hello")

//objects creation

// const rectangle = {
//     length:4,
//     breadth:5,

//     // draw: function(){
//     //     console.log("drawing rectangle")
//     // }

//     draw(){ //is tarike se v likh skte h method/function ko object k andar
//         console.log("drawing rectangle")
//     }
//     //object k andar jo function hota h use method bolte hain
// }


// rectangle.breadth    //breadth ko access kr skte h aise
// rectangle.lenth
// rectangle.draw()  // function draw ko v acess kr skte h is tarike se 

//jab hum objects k saath deal kr rhe hote hain tab hum object oriented programming kr rhe hote hain

//jab bohot sare objects create krne honge tab dikkat aa skti h upr wale tarike se 

//hence we have two methods of object creation - > factory function & constructor function 

//---------------------------------1. Factory Function--------------------

// with fixed parameters 
// function createRectangle(length,breadth){
//     return rectangle  = {
//         length:1,
//         breadth:2,

//         draw: function(){
//             console.log("drawing rectangle")
//         }
//     }
// jo v is function ko call krrega use rectangle object bn ke mil jaega lekin fixed length aur breadth k saath
   
// }


// let obj1 = createRectangle();


// with desired parameters 
// function createRectangle(len,bre){
//     return rectangle = {
//         length:len,
//         breadth:bre,

//         draw: function(){
//             console.log("drawing rectangle")
//         }
//     }

   
// }

// //object creation
// let rectangleobj1 = createRectangle(5,4);
// let rectangleobj2 = createRectangle(1,2);
// let rectangleobj3 = createRectangle(9,8);

// console.log(rectangleobj1)


//---------------------------2. constructor function-----------------------

// in constructor function pasacal notation is followed , by which first letter of every word is Capital letter -> example : NumberOfStudents 

//construcor function bs ek method jo hamari properties , methods ko initialize ya define kr rha hai 

// with fixed parametrs
function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw=function(){
        console.log("drawing rectangle");
    }

}


//object creation using constructor function - >
let rectangleObject = new Rectangle();
// new ek aisa keyword jo aapko empty object return krta hai 


// with desired parameters
function RectangleCreate(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw=function(){
        console.log("drawing rectangle");
    }

}


//object creation using constructor function - >
let rectangleObj = new RectangleCreate(100,200);




// ---------------- dynamic nature of objects----------------
// iska mtlb hai ki hum object k andar koi v property add or remove kr skte hai

// adding new property
rectangleObj.color="yellow";

// deleting the property 
delete rectangleObj.color;


//----------------------------constructor property------------------------------

// koi v object k js andar , uski ek property hoti hai jo darshata h ki vo object bna kaise hai 
// har object ka ek constructor hota hai
// remember: function v ek object hai


console.log(rectangleObj.constructor)
//output:
// ƒ RectangleCreate(len, bre){
//     this.length = len;
//     this.breadth = bre;
//     this.draw=function(){
//         console.log("drawing rectangle");
//     }

// }


//finding constructor of the function -> ? -> it has the inbuilt constructor
console.log(RectangleCreate.constructor)
//ƒ Function() { [native code] }



//internally aise hota hai implement functin -> no need to stress over this 
let Rectangle1 = new Function( 'length','breadth',` this.length = length;
    this.breadth = breadth;
    this.draw=function(){
        console.log("drawing rectangle");
    }`)


// object creation using above rectangle1 function 

let rect = new Rectangle1(2,3);

console.log(rect)

//--------------------------functions are objects------------------------------

// any entity with both properties and methods is considered as object


//--------------------------Types in JS------------------------------
//1. Primitve or value types 
// number , strings , boolean undefined , null , symbol

//primitives types k andar copy bnti h

// example: 
// let c =10 ;
// let d=c;
// c++;

// console.log(c,d) -> 11 ,10 

// example 2: 
// let a =10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a) -> it prints 10 even if fucntion is callled , reason is that function argument a creates a copy of the original value a , hence the original a doesn't gets updated


//2. Reference types or objects
// function , objects , array
// example:

// reference types ke andar , copy nhi bnti , same address pr point krte hai 

// let a = {
//      value :10
// }
// b=a;

// a.value++;
// console.log(a,b) -> value:11 , value:11 

// example 2: 
// let a ={
//     value :10
// }
// function inc(a){
//     a.value++;
// }
// console.log(a) -> it prints 11 as fucntion took same address referecne and increemented that , hence original value got updated here

// conclusion : primitives are copied by their value while 
// references are copied by their address


//----------------------Iterating thorugh Objects -> for of and for in --------
    
let rectangle = {
    length:2,
    breadth:4
};

//------for-in loop-------//

for(let key in rectangle){
    //keys are reflected through key variable 
    // values are reflected through rectangle[key]
    console.log(key,rectangle[key])
}

//------for-of loop-------//
// this loop appplies only to iterables ( arrays and maps )
// object is not iterable , so it cannot be applied to objects

// for(let key of rectangle){
//     console.log(key)
// } it throws error that rectangle is not iterable

// for(let key of Object.keys(rectangle)){
//     console.log(key)
// }  --> this object.keys ( rectnagle ) fucntion gives the keys of objects as arrays as output

// for(let key of Object.entries(rectangle)){
//     console.log(key)
// }  --> this object.entries (rectangle) fucntion gives the values of objects as arrays as output


//---------how to find if an object has a particular property or not -----------
if('color' in rectangle){
    console.log("present ")
}
else{
    console.log("not present")
}

//-------------------Object Cloning -------------------------------------
// -> iteration , assign , spread 

// jab hum let b =a krte hai tab actaully b aur a same value ko reference krte hai , cloning nhi hoti h 

// cloning ka mtlb hoga ki ek new memory block create ho b k lie jisme same value ho jo ki a me hai , a ka memory block alg rhega , usme hum kch nhi chhedte h 

// ----------1.using Iteration---------------

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest = {};

// for(let key in src){
//     dest[key]=src[key]
// }

// console.log(src,dest)

// -------2. using assign---------
// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let src2 = {value:25}
// let dest = Object.assign({},src)
// let dest2 =Object.assign({},src,src2)

// console.log(src,dest,dest2)

//----------- 3. using spread----------
let src = {
    a:10,
    b:20,
    c:30
}

let dest = {...src}

console.log(src,dest)

src.a++

console.log(src,dest)