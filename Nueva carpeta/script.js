// Rest parameters
    // Spread expande el array en elementos individuales
    const array = [1, 2, 3];
    const newArray = [...array, 4, 5];
    console.log(newArray); // [1, 2, 3, 4, 5]
    // Rest permite agrupar elementos individuales en un array
    const number1 = 1;
    const number2 = 2;
    const number3 = 3;

    function sum(...numbers) {
        console.log(...numbers);
    }
    sum(number1, number2, number3);

// Metodos de string
const string = "Hola Mundo";
console.log(string.length); // Devuelve la longitud del string
console.log(string.toUpperCase()); // Devuelve el string en mayusculas
console.log(string.toLowerCase()); // Devuelve el string en minusculas
console.log(string.includes("Mundo")); // Devuelve true si el string contiene la palabra "Mundo"
console.log(string.split(" ")); // Devuelve un array con las palabras del string
console.log(string.replace("Mundo", "Amigo")); // Devuelve el string con la palabra "Mundo" reemplazada por "Amigo"
console.log(string.substring(0, 4)); // Devuelve una parte del string desde el indice 0 hasta el indice 4
console.log(string.trim()); // Devuelve el string sin espacios al inicio y al final
console.log(string.charAt(0)); // Devuelve el caracter en el indice 0
console.log(string.indexOf("Mundo")); // Devuelve el indice de la primera ocurrencia de la palabra "Mundo"
console.log(string.endsWith("Mundo")); // Devuelve true si el string termina con la palabra "Mundo"
console.log(string.startsWith("Hola")); // Devuelve true si el string empieza con la palabra "Hola"

// Concatenar funciones de string
console.log(string.toUpperCase().split(" ")); // Devuelve un array con las palabras del string en mayusculas

// Dos formas de escribir un IF
// Forma 1
if (true) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}
// Forma 2
true ? console.log("Es verdadero") : console.log("Es falso");

// Dos formas de escribir un FOR
// Forma 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Forma 2
for (let numeros of array) {
    console.log(numeros);
}


