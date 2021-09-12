const precioOriginal = 100;
const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){

    
    const porcentajePrecioConDescuento = 100 - descuento
    
    const precioConDescuento = (precio * porcentajePrecioConDescuento ) / 100
    
    return precioConDescuento; 
}

function onClickDiscount(){
    const inputPrice = document.getElementById('inputPrice')
    const inputDiscount = document.getElementById('inputDiscount')

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const priceDiscount = calcularPrecioConDescuento(price, discount);

    const result = document.getElementById('result')
    result.innerText=`El precio con descuento es: $${priceDiscount}`
}