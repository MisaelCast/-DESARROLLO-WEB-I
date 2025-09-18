
//////////////////////// Ejercicio 1/////////////
const productos = ['laptop', 'mouse', 'teclado', 'monitor'];
const precios = [15000, 500, 800, 3000];

//Tareas:

  //  Agregar un nuevo producto 'webcam' con precio 1200
productos.push('webcam');
precios.push(1200);
console.log(productos);
console.log(precios);


    //Encontrar si existe el producto 'mouse' en el inventario
    
let esta = productos.includes('mouse');

console.log(`Esta mouse? ${esta}`);


    //Obtener todos los productos que cuestan menos de 1000 pesos

const variable = precios.filter(num => num < 1000);
console.log(variable);



    //Calcular el precio total de todos los productos

const total = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(`Valor total de productos: ${total}`);


//////////////////Ejercicio 2: Lista de Reproducción Musical////////////////////

//Estás creando una aplicación de música y necesitas manejar una playlist.

let playlist = ['Bohemian Rhapsody', 'Hotel California', 'Imagine', 'Yesterday'];

//Tareas:

//	•	Agregar ‘Stairway to Heaven’ al inicio de la playlist

playlist.unshift('Stairway to Heaven');

console.log(playlist);

//	•	Eliminar la última canción de la lista

playlist.pop();


//	•	Verificar si ‘Imagine’ está en la playlist

playlist.includes('Imagine');

//	•	Crear una nueva playlist solo con las canciones que tienen más de 8 caracteres

let nuevo = playlist.filter(cancion => cancion.length>8);
console.log(nuevo)

7///////////////Ejercicio 3: Registro de Calificaciones/////////////////////


//La profe Xenia necesita procesar las calificaciones de sus estudiantes.

let calificaciones = [85, 92, 78, 96, 88, 73, 90, 87];

//Tareas:

	//•	Encontrar la calificación más alta
let alto = Math.max(...calificaciones);
console.log(`numero mas alto: ${calificaciones}`);


	//•	Verificar si todos los estudiantes aprobaron (calificación >= 70)

    let aprobados = calificaciones.filter(cal => cal >= 70);
    console.log(`alumnos aprobados: ${aprobados}`);


	//•	Obtener solo las calificaciones sobresalientes (>= 90)
let aprobados2 = calificaciones.filter(cal => cal >= 90);
    console.log(`alumnos sobresalientes: ${aprobados2}`);

//obtener la cantidad de elementos del arreglo
let cantidad = calificaciones.length;

	//•	Calcular el promedio de todas las calificaciones

    let promedio = calificaciones.reduce((acumulador, valorActual) => acumulador +valorActual, 0);
    console.log(`promedio ${promedio/cantidad}`)





//     Ejercicio 4: Organizador de Tareas

// Estás desarrollando una app de productividad para organizar tareas diarias.

let tareas = ['comprar víveres', 'llamar al dentista', 'terminar proyecto', 'hacer ejercicio'];

let completadas = [false, true, false, false];

// Tareas:

// 	•	Agregar una nueva tarea ‘revisar emails’

tareas.push('revisar emails');

// 	•	Marcar la primera tarea como completada
completadas.splice(0,1,true);

console.log(completadas);


// 	•	Obtener solo las tareas que NO están completadas

const no = completadas.filter(com => com === false);

console.log(`tareas no completadas: ${no}`);

// 	•	Contar cuántas tareas faltan por completar
console.log(`numero de tareas faltantes: ${no.length}`);





// Ejercicio 5: Catálogo de Libros

// Una biblioteca digital necesita organizar su catálogo de libros.

let libros = [

    {titulo: 'Cien años de soledad', autor: 'García Márquez', año: 1967},

    {titulo: '1984', autor: 'George Orwell', año: 1949},

    {titulo: 'Don Quijote', autor: 'Cervantes', año: 1605},

    {titulo: 'El principito', autor: 'Saint-Exupéry', año: 1943}

];

// Tareas:

// 	•	Agregar un nuevo libro: {titulo: ‘Rayuela’, autor: ‘Cortázar’, año: 1963}
libros.push({titulo: 'Rayuela', autor: 'Cortázar', año: 1963});
console.log(libros);


// 	•	Encontrar el libro más antiguo
//Revisar
const libroAntiguo = libros.reduce((masAntiguo, libro) => libro.año < masAntiguo.año ? libro : masAntiguo);
console.log(`libros mas antiguos: ${libroAntiguo.año}`);



// 	•	Obtener todos los libros publicados después de 1950

const librosNuevos = libros.filter(libro => libro.año > 1950);
console.log(`libros publicados despues de 1950: ${librosNuevos}`);


// 	•	Crear un array solo con los títulos de todos los libros

let titulos = libros.map(libro => libro.titulo);
console.log(`titulos: ${titulos}`);
