const bt = document.querySelector(".bt");
const txtC = document.querySelector(".text-color");
const cuaC = document.querySelector(".border-color");
const body = document.querySelector("body");


function changeColor(){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);

    
    return `rgb(${r},${g},${b})`;

}
function cambios(){
    const cambiosNow = changeColor();
    body.style.background = cambiosNow;
    cuaC.style.background = cambiosNow;
    txtC.innerHTML = cambiosNow;
}
bt.addEventListener('click',(e)=>{
    cambios();
    
})