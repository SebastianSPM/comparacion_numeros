const prompt = require("prompt-sync")();

let numeros = []
let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
let numero3 = parseInt(prompt("Ingresa el tercer número: "));

const impresion = () => {
    console.log("MAYOR A MENOR");
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }

    console.log("MENOR A MAYOR");
    numeros.sort()
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }
}

const compararNumeros = () => {

    if(numero1 >= numero2 && numero1 >= numero3){
        numeros.push(numero1)
        
        if(numero2 >= numero3){
            numeros.push(numero2);
            numeros.push(numero3)
        }else{
            numeros.push(numero3)
            numeros.push(numero2)
        }
    
    }else if(numero2 >= numero3){
        numeros.push(numero2)
        
        if(numero1 >= numero3){
            numeros.push(numero1)
            numeros.push(numero3)
            
        }else{
            numeros.push(numero3)
            numeros.push(numero1)
            
        }
    }else{
        numeros.push(numero3)
        
        if(numero2 >= numero1){
            numeros.push(numero2)
            numeros.push(numero1)
            
        }else{
            numeros.push(numero1)
            numeros.push(numero2)
        }
    }
    impresion()
}

const validarNumerosIguales = ()  => {
    if(numero1 === numero2 && numero2 === numero3){
        console.log("Todos los números son iguales");
        return;
    }
    compararNumeros()
}

const validarNumeros = () => {
    if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
        console.log("\nDebes colocar números...");
        return;
    }
    validarNumerosIguales()
}

validarNumeros()




