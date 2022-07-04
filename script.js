console.log("todo bien");

const randomNumbers = [4, 8, 15, 16, 23, 42];

// for (let index in randomNumbers) {
//     console.log(randomNumbers[index])
// }

// forEach

let elNumeroABuscar = 42;
let encontradoNumero = false;

randomNumbers.forEach((eachNumber, index, elArray) => {
  console.log(elArray); // opcional y poco usado
  console.log(`${eachNumber} está en posición ${index}`);
  console.log("estoy ejecutandome por cada elemento del array");

  if (eachNumber === elNumeroABuscar) {
    console.log("Encontramos la respuesta a todo y la vida");
    encontradoNumero = true;
  }
});

console.log("encontradoNumero", encontradoNumero);

// ACTIVIDAD 1

let students = [
  { name: "Rafa", color: "Blue", candy: 12 },
  { name: "Elise", color: "Pink", candy: 21 },
  { name: "Bodei", color: "Yellow", candy: 31 },
  { name: "Nick", color: "Red", candy: 11 },
];

students.forEach( (eachStudent) => {
    console.log(`El nombre es: ${eachStudent.name}`)
} );

let algo = students.forEach( (eachStudent) => {
    let candy = eachStudent.candy
    if (candy >= 20) {
        console.log(`${eachStudent.candy}: ${eachStudent.color}`)
    }
    // return `${eachStudent.candy}: ${eachStudent.color}`
} )

console.log(algo) // forEach SIEMPRE retorna undefined. Si necesitamos un nuevo arr, usamos map

// MAP

const randomNumbers2 = [4, 8, 15, 16, 23, 42];

let multipliedNumbers = randomNumbers2.map( (eachNumber) => {
    if (eachNumber < 20) {
        // JS ejecuta todo lo que hay aqui dentro
        let multiply = eachNumber * 10
        // JS crea una nuevo array donde cada elemento es cada valor retornado
        return multiply
        // [40, 80, 150, 160, 230, 420]
    } else {
        return eachNumber * 1000
    }
} )

// MAP SIEMPRE retorna una arr con la misma cantidad de elementos que el array original
console.log(multipliedNumbers)


// ejemplo

// creamos una funcion que reciba un array de numeros y retorne un nuevo array de numeros como strings

function numbersAsStrings(arrayOfNumbers) {

    let arrayOfStrings = arrayOfNumbers.map((eachNumber) => {
        // 2 => "2". toString()
        return eachNumber.toString()
    })
    console.log(arrayOfStrings)
    return arrayOfStrings

}

console.log( numbersAsStrings(randomNumbers2) )


