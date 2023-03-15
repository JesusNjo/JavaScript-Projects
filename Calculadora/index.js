
const clear = document.querySelector(".clear");
const igual = document.querySelector(".igual");
const op = document.querySelectorAll('.ari');
const buttons = document.querySelectorAll(".num");
const borrar = document.querySelector(".delete");
let operadorA = document.querySelector(".operador-a");
let operadorB= document.querySelector(".operador-b");
let operador= document.querySelector(".operador");
let contador = 0;

const display = new Display(operadorA,operadorB);

buttons.forEach((x)=>{
    x.addEventListener('click',(e)=>{
        display.agregarNumero(x.innerHTML);
    })
})

op.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.addEventListener('click',display.computar(e.value))
    })
})