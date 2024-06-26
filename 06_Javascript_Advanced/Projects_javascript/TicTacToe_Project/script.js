const boxes = document.querySelectorAll('.box') //it returns a nodelsit which is similar to array and can be iterated over , isiliye array like methds v ispe use ho skte h like forEach
const gameInfo = document.querySelector('.game-info')
const newGameBtn = document.querySelector('.btn')

//variables we need
let currrentPlayer; //  to know current player
let gameGrid; // taaki pta lga pae ki game ka status kya h , that is ki sari turns khtm hogai hai ya fir abhi game baaki h 

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//lets create a function to initialize the game
function  initGame() {
    currrentPlayer = "X";
    // in starting , 9 cells of game grid will be empty
    gameGrid = ["","","","","","","","",""]; // yaha game grid empty kr rhe

    // niche UI pe update kr rhe hai grid empty kr k 
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        //one more thing is missing, initialise box with css properties again
        box.classList = `box box${index+1}`;
    });

    // new game button ko hide krni h starting me 
    newGameBtn.classList.remove("active")
    //current player darshaenge
    gameInfo.innerText = `Current Player - ${currrentPlayer}`


}

initGame();


function swapTurn() {
    if(currrentPlayer === "X"){
        currrentPlayer = "O";
    }
    else{
        currrentPlayer = "X";
    }
    //UI update kr do
    gameInfo.innerText = `Current Player - ${currrentPlayer}`
}


function checkGameOver(){
    let answer = ""
    winningPositions.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
            && (gameGrid[position[0]] === gameGrid[position[1]] ) && (gameGrid[position[1]] === gameGrid[position[2]])) {

                //check if winner is X
                if(gameGrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    

                //disable pointer events - kyuki winner mil chuka hai
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });

    //it means we have a winner
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    //We know, NO Winner Found, let's check whether there is tie
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "" )
            fillCount++;
    });

    //board is Filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied !";
        newGameBtn.classList.add("active");
    }

}




function handleClick(index) {
// jis v box pe click hua h agr vo empty to hi aage ki chize uspe apply hogi
    if(gameGrid[index] ===""){
        //box ke andar current player daal do
        boxes[index].innerHTML = currrentPlayer;  // ye line UI me change krti h
      
        gameGrid[index] = currrentPlayer;   // ye line hmari bnai hui grid me change krti h

        boxes[index].style.pointerEvents = "none"; // kyuki ab O or X fill kr die h toh ab uske upr cursor pointer nhi bnna chahiye

        //swap kro turn ko
        swapTurn();
        //check kro koi jeet toh nhi gya 
        checkGameOver();  //most important function

    }
}



// boxes element pe loop chla diye taaki har ek box pe eventlistener lga skte aur uske index pe handleclick function call kr ske
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});


newGameBtn.addEventListener("click",initGame);

