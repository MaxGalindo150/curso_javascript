//Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado
}
console.groupEnd();

//Triangulo
console.group("Triangulos")
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado3 + lado3
}

function areaTriangulo(base, altura){
    return (base*altura)/2
}

console.groupEnd();

//Circulo
console.group("Circulo");
const pi = Math.PI

function perimetroCirculo(radio){
    return 2*pi*radio
}

function areaCirculo(radio){
    return pi*(radio*radio)
}

console.groupEnd();

//Interectuamos con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

