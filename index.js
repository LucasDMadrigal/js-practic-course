const ladoCuadrado = 5;

const areaCuadrado = Math.pow(ladoCuadrado, 2)

console.group("area cuadrado");

console.log(`los lados del cuadrado miden: ${ladoCuadrado}`);
console.log(`el Area del cuadrado es: ${areaCuadrado}`);

console.groupEnd()
// *********************************************//

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3

const semiperimetro = perimetroTriangulo/2

const areaTriangulo = Math.pow((semiperimetro*(semiperimetro - ladoTriangulo1)*(semiperimetro-ladoTriangulo2)*(semiperimetro - ladoTriangulo3)),0.5)

console.group("area Triangulo");

console.log(`el perimetro del Triangulo es: ${perimetroTriangulo}`);
console.log(`el Area del Triangulo es: ${areaTriangulo}`);

console.groupEnd()

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
