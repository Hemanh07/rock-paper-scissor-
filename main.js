const stone=document.getElementById("stone");
const paper=document.getElementById("paper");
const stones=document.getElementsByClassName("stone");
console.log(stone);
 stone.addEventListener("click",(event)=>{
    event.target.style.background="brown";
    
});
paper.addEventListener("click",(event)=>{
    event.target.style.background="brown";
});
scissor.addEventListener("click",(event)=>{
    event.target.style.background="brown";
});
 
/* stone.addEventListener("click",(event)=>{
    event.target.textContent="blue";
}); */