
// *********************************************//

const resultArea = document.getElementById('resultArea')

function calcularArea(ladosTrianguloArray){

    const ladoTriangulo1 = ladosTrianguloArray[0];
    const ladoTriangulo2 = ladosTrianguloArray[1];
    const ladoTriangulo3 = ladosTrianguloArray[2];

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3
    
    const semiperimetro = perimetroTriangulo/2
    
    const areaTriangulo = Math.pow((semiperimetro*(semiperimetro - ladoTriangulo1)
    *(semiperimetro-ladoTriangulo2)
    *(semiperimetro - ladoTriangulo3)),0.5)
    
    console.group("area Triangulo");
    
    if (areaTriangulo) {
        console.log(`el perimetro del Triangulo es: ${perimetroTriangulo}`);
        resultArea.innerText = `el Area del Triangulo es: ${areaTriangulo}`;
    }
    
    console.groupEnd()
}


function mostrarAreaDeltriangulo(){

    const ladosTrianguloArea = document.getElementById('inputLadosTrianguloArea')
    const inputLadosTrianguloValue = ladosTrianguloArea.value.split(' ');
    
    const ladosTriangulo = inputLadosTrianguloValue.map(lado => {
        return parseInt(lado, 10)
    })

    if (ladosTriangulo.length > 3) {
        resultArea.innerText = "estas ingresando mas de tres lados";
        return
    }
    console.log(ladosTriangulo);
    calcularArea(ladosTriangulo)
}

// ********************************************************** */

const radio = 4;

const diametro = 4*2

const pi = Math.PI
const circunferencia = pi*diametro

const areaCirculo = pi*Math.pow(radio,2)

console.group("area Circulo");

console.log(`pi: ${pi}`);
console.log(`la circunferencia del Circulo es: ${circunferencia}`);
console.log(`el Area del Circulo es: ${areaCirculo}`);

console.groupEnd()
// ********************************************************** */

const ladoCuadrado = 5;

const areaCuadrado = Math.pow(ladoCuadrado, 2)

console.group("area cuadrado");

console.log(`los lados del cuadrado miden: ${ladoCuadrado}`);
console.log(`el Area del cuadrado es: ${areaCuadrado}`);

console.groupEnd()