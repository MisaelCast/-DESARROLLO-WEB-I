//Sistema de E-commerce: Carrito de Compras

// Contexto: Estás desarrollando la funcionalidad del carrito de compras para una tienda en línea.
// Necesitas gestionar productos, calcular totales, aplicar descuentos y manejar el inventario.

//📦 Datos iniciales:
let productos = [
  {
    id: 1,
    nombre: "Laptop Gaming",
    precio: 25000,
    categoria: "tecnologia",
    stock: 5,
  },
  {
    id: 2,
    nombre: "Auriculares",
    precio: 1500,
    categoria: "tecnologia",
    stock: 15,
  },
  { id: 3, nombre: "Cafetera", precio: 2500, categoria: "hogar", stock: 8 },
  {
    id: 4,
    nombre: "Libro JavaScript",
    precio: 450,
    categoria: "libros",
    stock: 20,
  },
  {
    id: 5,
    nombre: "Silla Ergonómica",
    precio: 3500,
    categoria: "oficina",
    stock: 3,
  },
];

let carrito = [
  { productoId: 1, cantidad: 1 },
  { productoId: 2, cantidad: 2 },
  { productoId: 4, cantidad: 3 },
];

//🎯 Tareas a resolver:
//1. Calcular el total del carrito incluyendo todos los productos
function calcularTotalProductos(productos, carrito) {
    return carrito.reduce((total, item) => {
        const producto = productos.find(p => p.id === item.productoId)
        return total +(producto.precio * item.cantidad)

    },0)
}
console.log(`Total del carrito: ${calcularTotalProductos(productos, carrito)}`);


//2. Aplicar un descuento del 15% si el total supera los $5000

function aplicarDesc (total){
    return total > 5000 ? total * 0.15 : total
};
console.log(`Descuento ${aplicarDesc(total)}`)

//3. Verificar si hay suficiente stock para todos los productos del carrito

//4. Generar un resumen detallado de la compra

//5. Encontrar el producto más caro en el carrito``

//💡 Pista:
//Usa map() para combinar datos, reduce() para calcular totales, y every() para verificar condiciones.

//📊 Análisis de Rendimiento Académico

//Contexto: Eres el coordinador académico de una universidad y necesitas analizar el rendimiento de los estudiantes para generar
// reportes y tomar decisiones sobre becas y programas de apoyo.
let estudiantes = [
  {
    id: 1,
    nombre: "Ana García",
    edad: 20,
    carrera: "Ingeniería",
    semestre: 6,
    calificaciones: [95, 87, 92, 89, 94],
    asistencia: 95,
    beca: false,
  },
  {
    id: 2,
    nombre: "Carlos López",
    edad: 22,
    carrera: "Medicina",
    semestre: 8,
    calificaciones: [78, 82, 75, 80, 77],
    asistencia: 88,
    beca: true,
  },
  {
    id: 3,
    nombre: "María Rodríguez",
    edad: 19,
    carrera: "Derecho",
    semestre: 4,
    calificaciones: [92, 95, 88, 91, 93],
    asistencia: 97,
    beca: false,
  },
  {
    id: 4,
    nombre: "Diego Hernández",
    edad: 21,
    carrera: "Ingeniería",
    semestre: 6,
    calificaciones: [85, 79, 88, 82, 86],
    asistencia: 92,
    beca: false,
  },
  {
    id: 5,
    nombre: "Laura Martín",
    edad: 23,
    carrera: "Medicina",
    semestre: 10,
    calificaciones: [88, 92, 86, 90, 89],
    asistencia: 94,
    beca: true,
  },
];

//🎯 Tareas a resolver:
//1. Calcular el promedio general de cada estudiante


//2. Identificar estudiantes candidatos a beca (promedio >= 90 y asistencia >= 95)
//3. Agrupar estudiantes por carrera y calcular el promedio por carrera
//4. Encontrar al estudiante con mejor rendimiento general
//5. Generar una lista de estudiantes en riesgo académico (promedio < 80)

//💡 Pista:
//Combina map() para transformar datos, filter() para seleccionar grupos, y reduce() para agrupar por criterios.
