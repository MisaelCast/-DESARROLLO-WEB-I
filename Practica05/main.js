


// // const fruta = {
// //     nombre : 'Manzana',
// //     color : 'Rojo',
// //     precio : '20',
// //     quimicos : false,
// //     nutrientes : {
// //         vitaminac : false,
// //         folato : false,
// //         biotina : false
// //     }
// // }

// // for( let propiedad in fruta){
// //     // console.log(propiedad, fruta[propiedad]  )
// //     console.log(`${propiedad} : ${fruta[propiedad]}`)
// // }

// // for( let propiedad in fruta.nutrientes){
// //     // console.log(propiedad, fruta[propiedad]  )
// //     console.log(`${propiedad} : ${fruta.nutrientes[propiedad]}`)
// // }

// // // for(let key in fruta){
// // //     if(fruta.hasOwnProperty(key)){
// // //         console.log(`${key}: ${fruta[key]}`)
// // //     }
// // // }

// // console.log(fruta);


// // // console.log(`Tu nombre es: ${persona.nombre} y tu edad es: ${persona.edad}  `);


// //OPERACIONES DE ACCESO Y MODIFICACIONES

// const computadora = {
//     tipo: 'escritorio',
//     modelo : 'asus',
//     ram : 16,
//     procesador :'intel i5'
// }

// // ACCESO A PROPIEDADES
// //notacion de punto
// console.log(computadora.procesador);

// // notacion de corchetes
// console.log(computadora["ram"]);

// //acceso dinamico
// const prop = 'tipo';
// console.log(computadora[prop]);

// //MODIFICAR PROPIEDADES

// //cambiando el valor
// computadora.ram = 32;
// computadora['procesador'] = "intel i7";

// // asignar propiedades
// computadora['color'] = 'rojo';
// computadora.precio = 2000;


// const computadoraCopia = Object.assign({},computadora)

// delete computadora.color;
// console.log(computadora);



// //Operaciones de copia y clonacion

// //copia superficial

// // const computadoraCopia = Object.assign({},computadora)

// console.log(computadoraCopia)

// delete computadoraCopia.tipo

// //Spread operator ...
// const computadoraCopiaSpread = { ... computadora}

// console.log(computadoraCopiaSpread);
///////////////////////////////////////////////////////////////////

const estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Programación"
    };

const claves = Object.keys(estudiante);

console.log(claves);

const estudiante1 = {
    nombre: "Ana",
    edad: 20,
    carrera: "Programación"
};

const valores = Object.values(estudiante);
console.log(valores);


//Ejercicio práctico 2
// ¿Cuál será la suma de todos los valores?
const ventas = {
    enero: 1500,
    febrero: 2300,
    marzo: 1800
    };

const numeros = Object.values(ventas);
console.log(numeros); // [1500, 2300, 1800]

//suma de ventas

const total = numeros.reduce((suma, valor) => suma + valor,0);

console.log(total);


// Object.entries() - "Dame todo: etiquetas y contenido"
// ¿Qué hace?
// Devuelve un array de arrays. Cada array interno contiene [clave, valor].
// Sintaxis
// Object.entries(objeto)

const estudiante3 = {
nombre: "Ana",
edad: 20,
carrera: "Programación"
};
const entradas = Object.entries(estudiante);
console.log(entradas);



// Ejercicio práctico 3
const restaurante = {
pizza: 12.99,
hamburguesa: 8.50,
ensalada: 6.75
};
// Mostrar el menú con formato
Object.entries(restaurante).forEach(([plato, precio]) => {
console.log(`${plato}: $${precio}`);
});




