/* Los sets son una estructura de datos que no admiten datos repetidos,
por eso al convertirlo a set, se eliminan los repetidos.
Con el spread operator ... destructuramos el Set y lo pasamos a un array.

NOTA: NO TOMA EN CUENTA LOS ELEMENTOS ANIDADOS.

SOLUCION PROXIMAMENTE
*/


const deleteDuplicate = (arr) => [ ...new Set(arr) ]


console.log(deleteDuplicate( ["Juan","Pedro","Juan"] ));
