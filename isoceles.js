let result = document.getElementById('result')

const calcularAlturaIsoceles = (ladosArray) => {
    const esIsoceles = (ladosArray[0] === ladosArray[1] && ladosArray[0] !== ladosArray[2]) 
    || ladosArray[0] !== ladosArray[1]
    && ((ladosArray[0] === ladosArray[2])
    || (ladosArray[1] === ladosArray[2]))
    const ladosTriangulos = [...ladosArray];
    let hipotenusa;
    let base;
    if (!esIsoceles) {
        console.log("nada que ve");
        result.innerText = "el triangulo no es isoceles"
        return
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

    console.log(`hipotenusa: ${hipotenusa}`);
    console.log(`Base: ${base}`);
    console.log(`Base/2: ${base/2}`);
    console.log(`Altura: ${altura}`);

    result.innerText = `La altura del triangulo es: ${altura}`
}

function mostrarAlturaIsoceles(){
    const inputLadosTriangulo = document.getElementById('inputLadosTriangulo');
    const inputLadosTrianguloValue = inputLadosTriangulo.value.split(' ');
    
    const ladosTriangulo = inputLadosTrianguloValue.map(lado => {
        return parseInt(lado, 10)
    })

    if (ladosTriangulo.length !== 3) {
        result.innerText = "no estas ingresando la cantidad correcta de lados";
        return
    }

    calcularAlturaIsoceles(ladosTriangulo)
}
