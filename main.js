const pantalla = document.getElementById("pantalla");
const numbers = document.getElementById("numbers-container");
const operacion = document.getElementById("operation-container");
const botonIgual = document.getElementById("boton_igual");
let numeroPantalla = "";
let resul = 0;
let primerIngreso = true;
let operacionMath = "";
numbers.addEventListener("click",(e)=>{
    if(e.target.value == "AC"){
        reset();
    }else if(e.target.value == "DEL"){
        numeroPantalla = numeroPantalla.substring(0,numeroPantalla.length - 1);
        pantalla.value = numeroPantalla;
    }else{
        numeroPantalla = numeroPantalla + e.target.value;
        pantalla.value = numeroPantalla;
    }
})
operacion.addEventListener("click", (e)=>{
    if(e.target.value =="+"){
        if(operacionMath != "suma" && primerIngreso == false){
            botonIgual.click();
        }
        operacionMath = "suma";
        if(primerIngreso){
            resul = parseInt(numeroPantalla);
            numeroPantalla = "";
            primerIngreso = false;
        }else{
            suma(parseInt(numeroPantalla));
            numeroPantalla = "";
        }
    }else if(e.target.value == "-"){
        if(operacionMath != "resta" && primerIngreso == false){
            botonIgual.click();
        }
        operacionMath = "resta"
        if(primerIngreso){
            resul = parseInt(numeroPantalla);
            numeroPantalla = "";
            primerIngreso = false;
        }else{
            resta(parseInt(numeroPantalla));
            numeroPantalla = "";
        }
    }else if(e.target.value == "x"){
        if(operacionMath != "multiplicacion" && primerIngreso == false){
            botonIgual.click();
        }
        operacionMath = "multiplicacion";
        if(primerIngreso){
            resul = parseInt(numeroPantalla);
            primerIngreso = false;
            numeroPantalla = "";
        }else{
            multiplicacion(parseInt(numeroPantalla));
            numeroPantalla = "";
        }
    }else{
        if(operacionMath != "division" && primerIngreso == false){
            botonIgual.click();
        }
        operacionMath = "division";
        if(primerIngreso){
            resul = parseInt(numeroPantalla);
            primerIngreso = false;
            numeroPantalla = "";
        }else{
            division(parseFloat(numeroPantalla));
            numeroPantalla = "";
        }
    }
})

botonIgual.addEventListener("click",()=>{
    if(operacionMath == "suma"){
        suma(parseInt(numeroPantalla));
        operacionMath = "";
    }else if(operacionMath == "resta"){
        resta(parseFloat(numeroPantalla));
        operacionMath = "";
    }else if(operacionMath == "multiplicacion"){
        multiplicacion(parseInt(numeroPantalla));
        operacionMath = "";
    }else{
        division(parseFloat(numeroPantalla));
        operacionMath = "";
    }
    primerIngreso = true;
    resul = 0;
});
const suma = (num)=>{
    resul += num;
    pantalla.value = `${resul}`;
    numeroPantalla = pantalla.value;
    
}
const resta = (num)=>{
    resul -= num;
    pantalla.value = `${resul}`;
    numeroPantalla = pantalla.value;
    
}
const multiplicacion = (num)=>{
    resul *= num;
    pantalla.value = `${resul}`;
    numeroPantalla = pantalla.value;
}
const division = (num)=>{
    resul = resul/num;
    pantalla.value = `${resul}`;
    numeroPantalla = pantalla.value;
}
const reset = ()=>{
    pantalla.value = "";
    numeroPantalla = "";
    primerIngreso = true;
    resul = 0;
}
