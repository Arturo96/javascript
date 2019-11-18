let celulares = [{ marca: 'Xiaomi', modelo: 'Redmi Note 8', color: 'Blanco' },
{ marca: 'Samsung', modelo: 'Galaxy Note 10', color: 'Azul' },
{ marca: 'Oneplus', modelo: '7T Pro', color: 'Blanco' }];

celulares.map(celular => document.write(`<h2>${celular.marca} ${celular.modelo}</h2>`))
