let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newBtn = document.querySelector("#new_btn")
let mess = document.querySelector("#mess");
let  messContainer= document.querySelector(".mess_container");


let turn0 = true;
let count = 0;

const winpattern =[[0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.style.color="red";
            box.innerText="O";
            turn0=false;
            count++;
        }
        else
        {
            box.style.color="blue";
            box.innerText="X";
            turn0=true;  
            count++; 
        }
        box.disabled = true;
        
        let iswinner = checkWinner();
        if(count===9 && !iswinner)
        {
            mess.innerText = `Match is Draw, Please Try Again`;
            messContainer.classList.remove("hide");
        }
    });
});               



const showWinner = (Winner)=>{
    mess.innerText = `Congratulation, Winner is ${Winner}`;
    messContainer.classList.remove("hide");
    disabledBox();
}


const checkWinner = ()=>{
    for(let pattern of winpattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxs[pattern[0]].innerText,boxs[pattern[1]].innerText,boxs[pattern[2].innerText]);
        let value1 = boxs[pattern[0]].innerText;
        let value2 = boxs[pattern[1]].innerText;
        let value3 = boxs[pattern[2]].innerText;
        if(value1!="" && value2!="" && value3!="")
        {
            if(value1===value2 && value2===value3)
            {
                // console.log('WINNER IS PLAYER ',value1);
                showWinner(value1);
                return true;
                
            }
        }
        

    }
}


const reset =()=>{
    turn0=true;
    count=0;
    messContainer.classList.add("hide");
    enableBox();

}

resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);


const disabledBox = ()=>{
    for(let box of boxs)
    {
        box.disabled=true;
    }
};


const enableBox = ()=>{
    for(let box of boxs)
    {
        box.disabled=false;
        box.innerText="";
    }
};


// change mode

// let dark = document.querySelector(".dark");
// let light = document.querySelector(".light");
let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let type = "light";

const changeMode = () =>{
    if(type === "light")
    {
        body.classList.add("dark");
        body.classList.remove("light");
        type = "dark";
    }
    else
    {
        body.classList.add("light");
        body.classList.remove("dark"); 
        type = "light";
    }
}

mode.addEventListener("click",changeMode);








