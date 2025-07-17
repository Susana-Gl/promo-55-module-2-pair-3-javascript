'use strict';

console.log('>> Ready :)');

document.querySelector(".title").innerHTML = "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

let paragraph = "Hola";
document.querySelector('.paragraph').innerHTML = paragraph;
paragraph = "Hola, mundo";
document.querySelector('.paragraph').innerHTML = paragraph;

document.querySelector(".list").innerHTML = "<li class='adalaber-M'>Michelle</li> <li class='adalaber-S'>Susana</li>"
document.querySelector(".adalab-selection").innerHTML = "La adalaber seleccionada es:";
document.querySelector(".adalaber-M").style.display = "none"
const adalabSelection ="La adalaber seleccionada es:";

document.querySelector(".lorem").innerHTML = "<div><h1>Lorem ipsum</h1><img src='http://via.placeholder.com/350x150'/><p>Lorem ipsum</p></div>" 

let myaddress = 'Madrid, 28009';
myaddress = 'Valladolid, 47009';
//document.querySelector(".myaddress").innerHTML = myAddress;

//

/*const firstName = Maria;
const secondName = Luisa;
const firstName = true;
const secondName = true;

const registered = firstName || secondName;
console.log ("registered", registered);*/

//

const number = 12;

if (number < 12) {
  console.log('El número es 0')
} else if (number < 13) {
  console.log('El número es negativo')
//} else if (number sum 2) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}

const numb1 = 6 ;
const numb2 = 12 ;

const sum = numb1 + numb2;
console.log (sum);


const kiwiPrice = 5;
const pearPrice = 2;
const grapePrice = 4;

const finalKiwiPrice = (kiwiPrice * 2);
const finalPearPrice = ( pearPrice * 3);
const finalGrapePrice = ( grapePrice / 2);
console.log ("finalKiwiPrice, finalPearPrice, finalGrapePrice",finalKiwiPrice, finalPearPrice, finalGrapePrice);


const finalPrice = (finalKiwiPrice + finalPearPrice + finalGrapePrice ); 
console.log ("finalPrice", finalPrice);

//Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

const hoursYear = 8760;
const michelleAge = 43;
const susanaAge= 23;

const michelleHours = (hoursYear * michelleAge);
const susanaHours = ( hoursYear * susanaAge);
console.log ("michelleHours , susanaHours" , michelleHours , susanaHours);

// Cuántas letras tiene tu nombre


const name1 = "Michelle";
console.log(name1.length);
const name2 = "Susana";
console.log(name2.length);


//FUNCIONES

// Multiplicación, Media y Pares

function mult (a, b){
  console.log(a * b);
  return a * b;
}
const multResult = mult (2, 2);
mult ();

//

function sum2 (a, b, c, d){
  console.log(a + b + c + d)
  return a + b + c + d
}

const sumResult = sum2(2, 2, 2, 2)
console.log(sumResult)

function split (){
  console.log(sumResult / 4)
  return sumResult / 4
}

sum2 ();
split ();

//

const getIsPar = () => {
const num = 10
return num % 2 == 0;
}

getIsPar()
console.log(getIsPar())

//TICKET IVA

const ticketPrice = 5
console.log(`El precio del articulo es de ${ticketPrice}€`)

const iva = 2.1
console.log(`El iva es del 21%`)

const finalPrice2 = () => {
  console.log(`Precio final con IVA ${ticketPrice * iva}`)
}

finalPrice2 ();

//Variables goblales


let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(mySecretLetter());
console.log(secretLetter);

//CALCULADORA MODELO DE CAJA
const boxWidth = 34
const contentWidth = 30
const borderSize = 5
const paddingSize = 15
const boxCalc = () => {
  
}

const contentBox = false

//Bio de Adalabers

const adalaber1 ={
  name:"susana",
  age:34,
  prof:"peridodista",

}
console.log (`Mi nombre es ${adalaber1.name},tengo ${adalaber1.age} años y soy ${adalaber1.prof}`)

const adalaber2 ={
  name:"Rocio",
  age:25,
  prof:"actriz",

}
console.log (`Mi nombre es ${adalaber2.name},tengo ${adalaber2.age} años y soy ${adalaber2.prof}`)

//A la carrera
adalaber1.run = () => {
  console.log (`Estoy Corriendo`);
};
adalaber1.run();

const distance = 50;
adalaber1.runMarathon = () => {
  console.log (`Estoy Corriendo un maraton de ${distance} kms`);
};
adalaber1.runMarathon();

//bio de Adalabers2
function showBio(person) { 
  console.log(`Mi nombre es ${person.name}, tengo ${person.age} años y soy ${person.prof}`); 
};

showBio(adalaber1);
showBio(adalaber2);

