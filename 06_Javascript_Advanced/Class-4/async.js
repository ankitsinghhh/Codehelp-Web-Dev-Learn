// let mydiv = document.createElement('div');

// mydiv.textContent = 'Hello world , i am written on js '

// document.body.appendChild(mydiv)

//below is example of synchronous code
// function sync(){
//     console.log("first")
// }

// sync()

// console.log("second")



//=======now lets see asynchronous code in java====================================
// addeventlistener and setTimeout

//-----------------features of async code ------------------------------
//clean and concisse 
// better error handling
// easier debugging 

// jab call stack empty hoga tab hi async function run hoga
// setTimeout(function(){
//     console.log("third")
// },3000)
// function sync(){
//     console.log("first")
// }
// sync();

// console.log("second")
//-------------------------API ( Application program interface) -------------

// it is an interface which brings some data to you acting as interface 



//--------------------------Promise -------------------------------------
// kisi v chij ko parallely execute krne k liye background me , promise use hoti h

// promise ek task h jo ya resolve hogi ya reject hogi , aur bacground m chlti rhegi

// let promise = new Promise(function(resolve,reject){ 


// let promise = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise')

//     },5000)
//     // return 2;
//     // resolve(2333)
//     reject(new Error("Errors aae hai"))
// })

// promise.then((value) => console.log(value),(error) => {console.log("Received an error")})

// promise.then((value) => console.log(value)).catch((error) => {console.log("Received an error")})

// promise.catch((error) => {console.log("Received an error")})



// console.log('pehla')
// let promise2 = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log('i am inside promise2')

//     },3000)
//     // resolve(2333)
//     // reject(new Error("Errors2 aae hai"))
// })

// console.log('dusra')


// let vaada1 = new Promise (function(resolve , reject){
//     setTimeout(function(){
//         console.log('setTimeout1 started')
//         resolve(true)
        
//     },2000)
   
// })
// let output =  vaada1.then(() => {
//         let vaada2 = new Promise ( function(resolve,reject){
        
//                 setTimeout(()=>{
//                     console.log('setTimeout2 started')
//                     resolve('vaada2 solved')
//                 },3000)
                
    
            
//         })
//         return vaada2;
//     })

// output.then((value)=> {
//     console.log(value)
// })

// upr waaala tarika thik hai lekin jab 50-100 promises honge tb ye code messy hojaega - isilye async await ki jarurat padti h 

//------------------------------async and await -------------------
 // async and await is a syntactic sugar for promise
 // special syntax hai promise k saath kaam krne k liye 


// async function hamesha promise return krta haiii

// async function promise(){
//     return 2;
// }
// console.log(promise())

//output
// Promise {<fulfilled>: 2}
// [[Prototype]]
// : 
// Promise
// [[PromiseState]]
// : 
// "fulfilled"
// [[PromiseResult]]
// : 
// 2


// async function utility(){
//     let delhiMausam = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("delhi me bohot garmi h ")
//         },10000)
//     })
    
//     let hydMausam = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("hyderabad me bohot thandi h ")
//         },5000)
//     })

//     let dM = await delhiMausam;
//     let hM = await hydMausam;

//     return [dM,hM]
// }

// utility();

// await use krte h taaki ek k baad dusra promise start ho

// fetch API get call - fetch API ek promise return krti h 
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let output = await content.json();  // javascript object notation ( JsON )
    console.log(output)
}

utility();




// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Babbar',
//       body: 'Tagdi Body ',
//       userId: 1998,
//       weight: 90,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// };

// let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);



async function helper() {

    let options = {
        method: 'POST',
        body: JSON.stringify({
          title: 'Babbar',
          body: 'Tagdi Body ',
          userId: 1998,
          weight: 90,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    };
    
    let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = content.json();
    return response;
}


async function utility() {
    let ans = await helper();
    console.log(ans);
}

utility();

// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     return displayName;
// }
// let a = init();
// a();
  


