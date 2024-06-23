// console.log("hello")

// let mydiv = document.createElement('div')

// mydiv.textContent = "hello world"

// document.body.appendChild(mydiv)


// //adding 100 para

// const t1= performance.now()

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = "this is a paragraph " + i ;

//     document.body.appendChild(newElement)
// }

// const t2 = performance.now()

// console.log(`time taken ${t2-t1} ms`)


// // optimizing a bit 

// const t3 = performance.now()

// let newdiv = document.createElement('div')

// for(let i=1;i<=100;i++){
//     let element = document.createElement('p')
//     element.textContent = "optimized: this is a  pragraph" + i;

//     newdiv.appendChild(element)

// }

// document.body.appendChild(newdiv)

// const t4 = performance.now()

// console.log(`time taken ${t4-t3} ms`)


// reflow - pehle calculations hoti h koi naya element kitna dimension , knsa positon lega ye sb

// repaint - use naye screen k layout ko apke display pe pixel by pixel show krne ko repaint bolte h 

// isiliye 100 paragraph k lye 100 baar reflow repaint ho rha tha first case m
// aur 2nd case me ek baar bs reflow repaint hua 

// hence , best practice -> minimize the reflow and repaint 

// const t5 = performance.now()
// let fragment = document.createDocumentFragment();

// for(let i=1;i<=100;i++){
//     let newele = document.createElement('p')
//     newele.textContent = 'this is a paragraph' +i ;

//     fragment.appendChild(newele)
// }

// document.body.appendChild(fragment);

// const t6 = performance.now()

// console.log(`time taken ${t6-t5}ms`)



//----------------------the call stack----------------------------

//single threading - one command at at a time
// synchronous-> occuring at the same time , doesnt wait for anyone
//run to completion nature of code

function addPara(){
    let para = document.createElement('p');
    para.textContent = "Js is singe Threaded"

    document.body.appendChild(para)

}


function appendNewMessage(){
    let para = document.createElement('p')
    para.textContent = " how are you guizz"

    document.body.appendChild(para)
}

addPara();
appendNewMessage();

// call stack - ek list hoti h jo functions store krti h -> functions ka track rakhti h 


//-----------even listener is async-----> jab click krte h tabhi hi chlta h ---> ye async hai , generally network calls are async


//-----------------------EVENT LOOP ---------------------------------

document.addEventListener('click', function(){
    console.log('hindi')
})

// saare async code ---> js ke event loop ko use krta hai ---> iske dwara hi execute hota hh
// any async code handled by browser 
// async code given to browser , browser puts it into queue when that even is executed , after that fom queue , it is handover to callstack if it is empty 


//-----------------------setTimeout --------------------------------

setTimeout(function(){
        console.log("hi this is setTimeout")
    },4000)





