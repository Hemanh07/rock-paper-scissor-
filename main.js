const stone=document.getElementById("stone");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const playagain=document.getElementById("playagain");
const re1=document.getElementById("player1result");
const re2=document.getElementById("player2result");
const finalresult=document.getElementById("result");
/* stone.addEventListener("click",(event)=>{
    event.target.textContent="blue";
}); */

//logicofgame
let input1;
let player1choice;
let player2choice;

    
/* function player1(){
    input1==1?player1choice="stone":input1==2?player1choice="paper":input1==3?player1choice="scissor":input1>=4?ok():"thank you";
}
 */let n;
for (n=0;n<1;n++){
paper.addEventListener("click",(event)=>{
    input1=2;
    let a=player1(input1);
    console.log(a);
    re1.innerHTML=a;
    let b=player2();
    console.log(b);
    re2.innerHTML=b;
    let r1=output(a)
    console.log(r1)
    finalresult.innerHTML=r1;

});
stone.addEventListener("click",(event)=>{
    input1=1;
    let a=player1(input1);
    console.log(a);
    re1.innerHTML=a;
    let b=player2();
    console.log(b);
    re2.innerHTML=b;
    let r1=output(a)
    console.log(r1);
    finalresult.innerHTML=r1;
});
scissor.addEventListener("click",(event)=>{
    input1=3;
    let a=player1(input1);
    console.log(a);
    re1.innerHTML=a;
    let b=player2();
    console.log(b);
    re2.innerHTML=b;
    let r1=output(a)
    console.log(r1);
    finalresult.innerHTML=r1;
});
}
function player1(input1){
    input1==1?player1choice="stone":input1==2?player1choice="paper":input1==3?player1choice="scissor":input1>=4?ok():"thank you";
    return player1choice;
}

function player2(){
    let no2=Math.floor(Math.random()*3+1);
    no2===1?player2choice="stone":no2===2?player2choice="scissor":player2choice="paper";  
    return player2choice;
}
/* function ok(){
    if(input>=4){
        let openchoice = confirm("INVALID INPUT TRY AGAIN!!");
        if(confirm==1){
            location.reload();
        }
        else{
            window.alert("Thank you");
        }
    }
}
*/
//output logic
let result;
    function output(player1choice){
        switch(player1choice){
            case (player2choice):
                result="GAME TIE!!😮😮😮😮";
                break;
            case ("stone"):
                player2choice!= "paper"&&player2choice=="scissor"?result="You Win the Game😎😎😎😎😎":result="Computer wins the Game😎😎😎😎😎";
                break;
            case ("paper"):
                player2choice!= "stone"&&player2choice=="scissor"?result="Computer Win the Game😎😎😎😎😎":result="You Win the Game😎😎😎😎😎";
                break;
            case ("scissor"):
                player2choice== "paper"&&player2choice!="stone"?result="You Win the Game😎😎😎😎😎":result="Computer Wins the Game😎😎😎😎😎";
                break;
            default:
                result="Computer Win the Game😎😎😎😎😎";
    }
    return result;
    
    }
/*
disp1="STONE🪨🪨 PAPER📃📃 SCISSOR✂️✂️";
disp2=`You : ${player1choice ??"Invalid"}`;
disp3=`Computer: ${player2choice}`;
output();
function display(){
    window .alert(disp1+"\n\n"+disp2+"\n\n"+disp3+"\n\n\n"+result) ;
    let conmmand=confirm("Play Again"??"Thankyou for Playing ");
    conmmand? location.reload() :alert("Thanks for playing");
}   
display ();
stone.addEventListener("click",(event)=>{
    event.target.style.background="brown";
    player1(1);
});
console.log(input1);
 */
playagain.addEventListener("click",(event)=>{
    re1.innerHTML='';
    re2.innerHTML='';
    finalresult.innerHTML='';
},);
