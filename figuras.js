//Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " cm2")
console.groupEnd();
//Triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoBase;
const areaTriangulo = (ladoBase*alturaTriangulo)/2;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm y " 
    + ladoBase + " cm"
);

console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm");
console.log("El area del triangulo es de: " + areaCuadrado + " cm2");

console.groupEnd();

//Circulo
console.group("Circulo");
const radio = 4;
const pi = Math.PI
const perimetroCirculo = 2*pi*radio
const areaCirculo = pi*(radio*radio)

console.log("El radio del circulo es: " + radio + " cm")
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm")
console.log("El area del circulo es: " + areaCirculo + " cm")


console.groupEnd();

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm")

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm")

//const areaCuadrado = ladoCuadrado * ladoCuadrado
//console.log("El area del cuadrado mide: " + areaCuadrado + " cm2")

