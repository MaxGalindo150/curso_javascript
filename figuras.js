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
    return lado1 + lado2 + lado3
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

//Cuadro con html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    console.log(typeof value)

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo html
function calcularPerimetroTriangulo(){
    const lado1 = parseFloat(document.getElementById("inputTrianguloLado1").value);
    const lado2 = parseFloat(document.getElementById("inputTrianguloLado2").value);
    const ladoBase = parseFloat(document.getElementById("inputTrianguloLadoBase").value);
   
    const perimetro = perimetroTriangulo(lado1, lado2, ladoBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const altura = parseFloat(document.getElementById("inputTrianguloAlt").value);
    const ladoBase = parseFloat(document.getElementById("inputTrianguloLadoBase").value);
   
    const area = areaTriangulo(ladoBase, altura);
    alert(area);
}

//Triangulo html
function calcularPerimetroCirculo(){
    const radio = parseFloat(document.getElementById("inputradio").value);
   
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = parseFloat(document.getElementById("inputradio").value);
   
    const area = areaCirculo(radio);
    alert(area);
}
