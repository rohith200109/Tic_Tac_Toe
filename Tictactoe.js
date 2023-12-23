let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newgamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg_container");

let turn0 = true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";msgContainer.classList.add("hide");
    }
}

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    box.innerText="";msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turn0){
        box.innerText = "O";
        turn0=false;
    }
    else{
        box.innerText = "X";
        turn0=true;
    }
    box.disabled = true;
    checkWinner();
    });
    
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner =(winner) =>{
    msg.innerText=`😁 Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= () =>{
    for( let pattern of winPatterns){
        let position_1= boxes[pattern[0]].innerText;
        let position_2 =  boxes[pattern[1]].innerText;
        let position_3 =  boxes[pattern[2]].innerText;
        if(position_1!="" &&position_2!="" && position_3!=""){
            if(position_1===position_2 && position_2===position_3){
                showWinner(position_1);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);