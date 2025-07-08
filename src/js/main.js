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
} else if (number sum 2) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}