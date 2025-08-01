let boxes=document.querySelectorAll(".box");
let winnenbox=document.querySelector(".frist");
let para=document.querySelector(".para");
let newgame=document.querySelector("#newgame");
let resetgame=document.querySelector(".reset");

let turnO=true;

let winneningpoint=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        };
        box.disabled =true;
        checkwinner();
    });
});

let showwinner=(winner)=>{
    para.innerText=`The Winner is ${winner}` ;
    winnenbox.classList.remove("hide");
    disable();
}

let checkwinner=()=>{
    for ( let point of winneningpoint){
        let pass1=boxes[point[0]].innerText;
        let pass2=boxes[point[1]].innerText;
        let pass3=boxes[point[2]].innerText;
     if(pass1 != "" && pass2!="" && pass3 !=""){
        if(pass1 ===pass2 && pass2 === pass3){
          
            showwinner(pass1);
        }
    }
    }
};

let enAble=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
};

let reset=()=>{
    let turnO=false;
    enAble();
    winnenbox.classList.add("hide");
}

newgame.addEventListener("click",reset);
resetgame.addEventListener("click",reset);