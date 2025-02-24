let productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 }
];

let productoBuscado = productos.find(function (producto) {
    return producto.nombre === "Monitor";
});

console.log("Producto encontrado:", productoBuscado);

let totalCompra = productos.reduce(function (total, producto) {
    return total + producto.precio;
}, 0);

console.log("El total de la compra es:", totalCompra);
