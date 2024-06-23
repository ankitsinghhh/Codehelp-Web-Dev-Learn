// //========================= Functions =========================
// //-----------> bock of code that fulfills a specific task
// // -------- function printcount ( ){
// // console.log(count)
// // }

// //need - > reusability

// // js engine does hoisting - > hoisting is the process of moving function declaration to the top of file , this is done automatically by js engine 

// // isiliye hum function ko kahi v define kre hum use kahi v , niche ya upr use kr skte h 



// //------------------------------Function Declaration---------------------

// // run(); 

// // function run(){
// //     console.log("running")
// // }


// //------------------------------Function Assignment---------------------

// // stand(); // ye nhi chlega kyuki hoisting bs function declaration ko shift krta hai na ki function assignment ko 


// // //named function assignment 
// // let stand = function walk(){
// //     console.log("walking function")
// // }

// // //anonymous function assignment 
// // let stand2 = function(){
// //     console.log("stand2 function")
// // }

// // stand();

// // let jump = stand;

// // jump();

// // stand2();

// // --------------------dynamic nature of function --------------------
// let x=1;
// x='a';

// console.log(x)

// // function sum(a,b){
// //     return a+b;
// // }

// // // kitne v parameter bhejo , js khud handle kr leta h , doenst throw error
// // console.log(sum(1,2)) //3
// // console.log(sum(1)) //NaN
// // console.log(sum()) // NaN

// // console.log(sum(1,2,3,4,5)) //3 
// // ye upr ke extra wale characters kaha gye - ?


// //-----------------------Dynamic function -----------------------------

// // js has a special object called arguments - iske andar jaate h wo sb
// function sum(a,b){
//     let total = 0 ;
//     for(let key of arguments){
//         total= total + key;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4 ,5)) // this function can take any no. of arguments , hence it is dynamic 


// //----------------------Rest operator (...) ------------------------------

// // jo v hum input me denge args naam k variable me store jo ki ek array hai
// // function add(...args){
// //     console.log(args)
// // }
// // add(1,2,3,4,5);

// // niche wale case me pehli value , num m jaegi aur baaki saari args k aaray me 
// function add(num , ...args){
//     console.log(args)
// }
// add(1,2,3,4,5,6);

// // rest operator k baad koi aur parameter nhi likh skte , rest should be last parameter as argument in a function



// //------------------------ Default Parameters ----------------------------

// // function interest ( p , r, y){
// //     return p*r*y/100;
// // }

// // console.log(interest(1000 , 20 ,5))
// //if any of above parameters is missing , then NaN will come 

// function interest ( p , r =5, y=10){
//     return p*r*y/100;
// }

// console.log(interest(1000 , 20))
// console.log(interest(1000)) // abhi r y nhi likhne ya nhi likhne pe v chl rh h

// // ye rule hai ki agr ek parameter ko default bnaya toh uske aage ke parameters ko default bnana hi pdega, ex-> r ko bnaya toh y ko bnana hi pda 

// //but there is a hack
// // interest(1000, undefined ,6); // r ki default value use krli lekin year ki desired value


// //--------------------------Getter / Setter ----------------------------

// // getter - access properties
// // setter - to change or mutate/update properties

// let person = {
//     fname : 'Love',
//     lname : 'Babbar',
//     get fullName(){
//         return `${person.fname} ${person.lname}`
//     },
//     set fullName(value){
//         if(typeof value !== String)
//             {
//                 throw new Error("You have not sent a String");
//             }
//         let parts = value.split(' ')
//         this.fname = parts[0] // this ye darshata h ki jis v object p kaam kr rhe h uska first name
//         this.lname = parts[1]
        
//     }
    
// };
// // console.log(person)


// // function fullName(){
// //     return `${person.fname} ${person.lname}`
// // }

// // person.fullName = "Rahul Kumar" // setting the value 

// // console.log(person.fullName) // getting the value


// //---------------------Error Handling----------------------------

// // using Try and catch 
// // try me code likhenge agr isme error aaaya toh catch m jaega , catch me error likhe rhenge toh woh show hoga

// // try{
// //     person.fullName = 1;
// // }
// // catch(e){
// //     alert(e)
// // }

// // console.log(person.fullName) // getting the value


// //-----------------Scope -----------------------------------
// // ye variable ke jeevan kaal ko scope bolte h 
// // that is lifetime of a variable

// {
//     var a =5 ; 
// }
// console.log(a)

// // let ki liftime sirf codeblocks k andar tk rehti h 
// // var ki lifetime jis function k andar defined us function k andar tk rehti h 
// // aur agr function k andar nhi defined h toh puri file k andar puri access hogi chahe for loop me hi kyu na ho , 
// // var bs function se drta h 








