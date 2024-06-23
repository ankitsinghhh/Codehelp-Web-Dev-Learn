function print(){
    console.log('clicked on document')
}



// document.addEventListener('click',print)

//remove event listener k liye exact same function apply krna hoga jo add event listener k liye exact function kiye the 

// document.removeEventListener('click',print)

//phases of event -------------------------------------------------------

// 1.capturing phase
//2.At target phase
//3.Bubbling phase



// const content = document.querySelector('#wrapper')

// content.addEventListener('click',function(event){
//     console.log(event)
// })

// let links = document.querySelectorAll('a')
// let thirdLink = links[2]

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("nahi jaane dunga")
// })

// let myDiv = document.createElement('div')

// for(let i =1; i<=100;i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = "this is a paragraph " + i ;

//     newElement.addEventListener('click', function(event){
//         console.log("i have clicked on pra",i)
//     })

//     myDiv.appendChild(newElement)
// }

// document.body.appendChild(myDiv)



// let myDiv = document.createElement('div')

// myDiv.addEventListener('click', function(event){
//     console.log("para" + event.target.textContent + " clicked ")
// })

// for(let i =1; i<=100;i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = "this is a paragraph " + i ;



//     myDiv.appendChild(newElement)
// }

// document.body.appendChild(myDiv)


let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName == 'SPAN'){
        console.log('span pr cick kia hai' + event.target.textContent)
    }
    
})






