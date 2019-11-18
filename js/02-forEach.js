numeros = [1,2,3,4,5,6,7,8,9,0];

[numero1, , numero3, , numero5] = numeros;

// numeros.forEach((numero, index) => {
//     document.write(`<h2>Índice ${index}: ${numero}</h2>`);
// });

numeros.map(el => document.write(`<h2>${el}</h2>`));

let producto = {
    id: 1,
    nombre: 'Iphone X',
    color: 'Negro'
};

let {id: id_producto, color: color_producto} = producto;