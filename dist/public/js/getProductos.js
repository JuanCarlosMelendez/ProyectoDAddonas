"use strict";
// PASO 1: Capturar el elemento html a utilizar en este caso ul lsita desordendanda
const ul = document.getElementById('ulProducto');
console.log(ul);
// PASO 2: Crear una variable llamada url que alberga la URL de la API creada
// la url es la de getProductos
const url = 'http://localhost:3000/api/productos/';
// PASO 3:  Crear una función llamada createNode que tome un parámetro llamado element
// Más tarde, cuando se invoque createNode, deberá pasar el nombre de un elemento HTML real para crear.
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
// PASO 4: Invocaremos el fetch:
let carrito = [];
fetch(url)
    .then((resp) => resp.json()) //esta transforma la respuesta de un objeto a un json    
    .then(data => {
    let datoDelProducto = data[2].nombre; // En este caso el json me esta devolvienod un arreglo de objetos con propiedades diversas como id, nombre precio etc 
    let elemento = document.getElementById('ulProducto');
    // element!.innerHTML = `<p>${data[1].nombre}<p>`
    data.forEach((val, idx) => {
        // console.log(val.nombre)
        // console.log(data[idx].nombre);
        const nombre = document.createElement('h2');
        nombre.innerHTML = (val.nombre);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(nombre);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(document.createElement('br'));
        const img = document.createElement('img');
        img.src = (val.img);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(img);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(document.createElement('br'));
        const descripcion = document.createElement('p');
        descripcion.innerHTML = (val.descripcion);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(descripcion);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(document.createElement('br'));
        const precio = document.createElement('h4');
        precio.innerHTML = (val.precio);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(precio);
        ul === null || ul === void 0 ? void 0 : ul.appendChild(document.createElement('br'));
        const button = document.createElement('button');
        button.type = 'submit';
        button.className = `submit${val.id}`;
        button.id = `submit${val.id}`;
        button.innerHTML = `submit${val.id}`;
        button.innerText = 'Agregar';
        ul === null || ul === void 0 ? void 0 : ul.appendChild(button);
        const boton = document.getElementById(`submit${val.id}`);
        boton === null || boton === void 0 ? void 0 : boton.addEventListener('click', () => {
            // console.log(val.id);
            agregarAlCarrito(val.id);
        });
    });
    // console.log(datoDelProducto);
    // console.log(data);
})
    .catch(function (error) {
    console.log(error);
});
const agregarAlCarrito = (prodId) => {
    const item = prodId;
    console.clear();
    console.log(carrito);
    carrito.push(item);
};
// console.log(carrito);
//# sourceMappingURL=getProductos.js.map