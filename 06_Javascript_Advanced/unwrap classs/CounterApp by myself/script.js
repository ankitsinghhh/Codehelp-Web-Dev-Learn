//using addEventListener and .textContent

let container = document.querySelector('.number');

let counterString = container.innerHTML;
let counter = Number(counterString);

//checks while development
// console.log(counter)
// console.log(typeof counter)





// to modify the counter
container.textContent = counter;



let decbtn= document.querySelector('.dec-btn');
let incbtn = document.querySelector('.inc-btn')

decbtn.addEventListener('click',function(){
    counter--;
    container.textContent = counter;
})

incbtn.addEventListener('click',function(){
    counter++;
    container.textContent = counter;
})





