class Display{
    constructor(operadorA,operadorB){
        this.operadorA = operadorA;
        this.operadorB = operadorB;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.valores ={
            sumar : "+",
            restar : "-",
            multiplicar : "*",
            dividir : "/",
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    clean(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior  = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores()
    }
    agregarNumero(x){
        if(x == "." && this.valorActual.includes(".")){
            return ;
        }
        this.valorActual = this.valorActual.toString() + x.toString();
        this.imprimirValores();
    
    }
    imprimirValores(){
        this.operadorA.textContent = this.valorActual;
        this.operadorB.textContent = `${this.valorAnterior} ${this.valores[this.tipoOperacion] ||""}`;

        
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return;
        }
        this.valorActual = this.calculador[this.tipoOperacion](valorActual,valorAnterior);
        this.imprimirValores();
    }

    
}