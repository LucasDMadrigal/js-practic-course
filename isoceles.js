const altIsoceles = (lado1, lado2, lado3) => {
    const esIsoceles = lado1 === lado2 ^ lado1 === lado3 ^ lado2 === lado3
    const ladosTriangulos = [lado1, lado2, lado3];
    let hipotenusa;
    let base;
    if (!esIsoceles) {
        return console.log("nada que ve");
    }


    ladosTriangulos.sort((a,b) =>{
        return a - b
    })

    if(ladosTriangulos[0] === ladosTriangulos[1]){
        hipotenusa = ladosTriangulos[0]
        base = ladosTriangulos[2]
    }else if (ladosTriangulos[1] === ladosTriangulos[2]) {
        hipotenusa = ladosTriangulos[1]
        base = ladosTriangulos[0]
    }

    const altura = Math.sqrt(Math.pow(hipotenusa,2) - Math.pow((base/2),2))

    console.log(`${hipotenusa}`);
    console.log(`${base}`);
    console.log(`${ladosTriangulos}`);
    console.log(altura);
}


console.log(altIsoceles(6,5,5));
// export default altIsoceles