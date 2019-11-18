let c = console.log, d = document;

// numeros = [60,1,20,3,4, -3553,5,6,7,8,9];

// Borra a partir de la posición 3 dos posiciones adelante
// numeros.splice(3,2);

// numeros.splice(numeros.indexOf(7),1);

// c(numeros.join('-'))

// c(numeros.sort((a,b) => a - b));

let caja = d.getElementById('caja');

// caja.classList.toggle('blue');

let parrafo = d.createElement('p');
parrafo.textContent = 'Un parrafo más.';
caja.appendChild(parrafo);

let losDivs = Array.from(d.getElementsByTagName('div'));
losDivs.map(elDiv => elDiv.innerHTML = '<p>Bla</p>');

let textosRojos = Array.from(d.getElementsByClassName('rojo'));
textosRojos.forEach(texto => texto.style.background = 'red');





