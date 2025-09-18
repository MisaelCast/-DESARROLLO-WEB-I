console.log("Ejercicios con objetos 1");

//Ejercicio 1: Registro de estudiantes   

const estudiantes = {
  matematicas: 85,
 historia: 92,
 ciencias: 78,
 arte: 95,
 educacionFisica: 88
};




// TODO:
// 1. Mostrar todas las materias
console.log(Object.keys(estudiantes));

// 2. Calcular el promedio de calificaciones

const promedio = Object.values(estudiantes).reduce((acumulador, valorActual)=> acumulador + valorActual,0);
console.log(`Promedio: ${promedio/5}`);


// 3. Encontrar la materia con mejor calificación

const max = Math.max(...Object.values(estudiantes))

const mejorMateria = Object.entries(estudiantes)
  .find(([materia, calificacion]) => calificacion === max);

console.log(mejorMateria);


// 4. Contar cuántas materias tienen calificación >= 90
const resultado = Object.entries(estudiantes)
  .filter(([materia, calificacion]) => calificacion >90);

console.log(resultado);



console.log("Ejercicios con objetos 2");



//Ejercicio 2: Inventario de tienda
const tienda = {
 camisetas: 25,
 pantalones: 15,
 zapatos: 8,
 gorras: 12,
 chaquetas: 3
};
// TODO:
// 1. Mostrar productos con stock bajo (< 10)
  const menor = Object.entries(tienda).filter(([producto , precio]) => precio < 10);
  
  console.log(`productos menor stock: ${menor}`);

// 2. Calcular el total de productos en inventario
const lista = Object.values(tienda);
  
  const total = Object.values(tienda).reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  
  console.log(total)

// 3. Mostrar cada producto con su estado de stock (alto/medio/bajo)

Object.entries(tienda).forEach(([producto, cantidad]) => {
  let estado = "";
  if (cantidad > 20) {
    estado = "Alto";
  } else if (cantidad >= 10) {
    estado = "Medio";
  } else {
    estado = "Bajo";
  }
  console.log(`${producto}: ${cantidad} → Stock ${estado}`);
});


// 4. Crear un resumen del inventario


const resumen = { alto: 0, medio: 0, bajo: 0 };

Object.values(tienda).forEach(cantidad => {
  if (cantidad > 20) {
    resumen.alto++;
  } else if (cantidad >= 10) {
    resumen.medio++;
  } else {
    resumen.bajo++;
  }
});

console.log("Resumen del inventario:", resumen);



console.log( "Ejercicio 3: Sistema de usuarios");

const usuarios = {
admin: { rol: "administrador", activo: true,
ultimoAcceso: "2024-01-15" },
juan: { rol: "usuario", activo: true, ultimoAcceso:
"2024-01-10" },
maria: { rol: "moderador", activo: false, ultimoAcceso:
"2023-12-20" },
carlos: { rol: "usuario", activo: true, ultimoAcceso:
"2024-01-12" }
};

// TODO:
// 1. Listar todos los nombres de usuario

console.log(Object.keys(usuarios));

// 2. Contar usuarios activos
const activos = Object.values(usuarios).filter(usuario => usuario.activo).length;
console.log("Usuarios activos:", activos);

// 3. Mostrar usuarios por rol
const roles = {};
Object.entries(usuarios).forEach(([nombre, info]) => {
  if (!roles[info.rol]) {
    roles[info.rol] = [];
  } roles[info.rol].push(nombre);
});
console.log("Usuarios por rol:", roles);

// 4. Encontrar el usuario con acceso más reciente

let usuarioReciente = null;

Object.entries(usuarios).forEach(([nombre, info]) => {
  if (!usuarioReciente || new Date(info.ultimoAcceso) > new Date(usuarioReciente.ultimoAcceso)) {
    usuarioReciente = { nombre, ...info };
  }} );

console.log("Usuario con acceso más reciente:", usuarioReciente);