const wind = document.querySelector('body');
const p = document.querySelector('p');
// const btn_1 =document.querySelector('.div-1');
// const btn_2 =document.querySelector('.div-2');
// const btn_3 =document.querySelector('.div-3');
// const btn_4 =document.querySelector('.div-4');

let level = 0;
let started = false;
let gameSeq = [];
let userSeq=[];
wind.addEventListener('keypress', ()=>{
    if(started==false){
        started=true;
        levelUp();        
    }
    function levelUp(){
        userSeq=[];
        level++;
        if(level==10){
            p.innerText=`Hooray You WON!. Your score is ${level} and now game will restart in 2 seconds`;
        }
        p.innerText=`Level ${level}`;
        let randomNum = Math.floor(Math.random()*4)+1; 
        gameSeq.push(randomNum);
        const btn = document.querySelector(`.div-${randomNum}`);
        gameFlash(btn);        

    }
    function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(()=>{
            btn.classList.remove("flash");
        },600)


    }
    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(()=>{
            btn.classList.remove("userFlash");
        },600)


    }
    
    function checkAns(idx){
        if(gameSeq[idx]==userSeq[idx]){
            if(gameSeq.length==userSeq.length){
                setTimeout(levelUp,1000);
            }
        }else{
            p.innerText=`Game Over!. Your score is ${level} and game will restart in 2 seconds`;
            setTimeout(()=>{
                wind.addEventListener("keypress",window.location.reload());
            },2000);
        }

    }
    function btnPress(){
        let btn = this;
        console.log(btn);
        userFlash(btn);
        userSeq.push(btn.getAttribute('id'));
        checkAns(userSeq.length-1);
        
    }
    const btns = document.querySelectorAll('.color');
    for(b of btns){
        b.addEventListener("click",btnPress);
    }

    
    
});

