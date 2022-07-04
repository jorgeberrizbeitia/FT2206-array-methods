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

students.forEach((eachStudent) => {
  console.log(`El nombre es: ${eachStudent.name}`);
});

let algo = students.forEach((eachStudent) => {
  let candy = eachStudent.candy;
  if (candy >= 20) {
    console.log(`${eachStudent.candy}: ${eachStudent.color}`);
  }
  // return `${eachStudent.candy}: ${eachStudent.color}`
});

console.log(algo); // forEach SIEMPRE retorna undefined. Si necesitamos un nuevo arr, usamos map

// MAP

const randomNumbers2 = [4, 8, 15, 16, 23, 42];

let multipliedNumbers = randomNumbers2.map((eachNumber) => {
  if (eachNumber < 20) {
    // JS ejecuta todo lo que hay aqui dentro
    let multiply = eachNumber * 10;
    // JS crea una nuevo array donde cada elemento es cada valor retornado
    return multiply;
    // [40, 80, 150, 160, 230, 420]
  } else {
    return eachNumber * 1000;
  }
});

// MAP SIEMPRE retorna una arr con la misma cantidad de elementos que el array original
console.log(multipliedNumbers);

// ejemplo

// creamos una funcion que reciba un array de numeros y retorne un nuevo array de numeros como strings

function numbersAsStrings(arrayOfNumbers) {
  let arrayOfStrings = arrayOfNumbers.map((eachNumber) => {
    // 2 => "2". toString()
    return eachNumber.toString();
  });
  console.log(arrayOfStrings);
  return arrayOfStrings;
}

console.log(numbersAsStrings(randomNumbers2));

console.log(' "Caro" ');

// Actividad 2

const info = {
  list: [
    { name: "Mirazur", owner: "Gustavo" },
    { name: "Noma", owner: "Taka" },
    { name: "Gaggan", owner: "Alvaro" },
    { name: "Geranium", owner: "Gustavo" },
    { name: "Arpège", owner: "Luis" },
  ],
};

function onlyNames(arr) {
  //your code here
  let names = arr.map((eachRestaurant) => {
    return eachRestaurant.name;
  });
  return names;
}

// test
const restaurants = onlyNames(info.list);
console.log(restaurants);
// Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']

const cities = ["miami", "barcelona", "madrid", "amsterdam"];

const upperCities = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1).toLowerCase();
});

console.log(upperCities);

// FILTER

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

const filteredCars = cars.filter((eachCar, index) => {
  // siempre espera un booleano como return
  console.log("esto se ejecuta");
  // return true
  if (eachCar.year >= 2010) {
    return true;
  } else {
    return false;
  }
  // siempre que nosotros debamos retornar un booleano,
  // para reducir syntax, podemos simplemente retornar la condicion
  return eachCar.year >= 2010;
});

console.log(filteredCars);

const heavyCards = cars.filter((eachCar) => {
  return eachCar.weight > 1;
});

const onlyCarNames = heavyCards.map((eachCar) => {
  return eachCar.brand;
});

console.log(onlyCarNames);

// const onlyHeaveCarNames = cars.filter((eachCar) => {
//     return eachCar.weight > 1
// }).map((eachCar) => {
//     return eachCar.brand
// })
// console.log(onlyHeaveCarNames)

// filter activity

const numbers = [1, 60, 112, 123, 100, 99, 73, 35];

function oddNumbers(arr) {
  console.log(arr);

  let filteredNumbers = arr.filter((eachNumber) => {
    if (eachNumber % 2 !== 0 && eachNumber < 100) {
      return true;
    } else {
      return false;
    }
  });

  return filteredNumbers;

  //your code here
}

let myOddNumbers = oddNumbers(numbers);
console.log(myOddNumbers); // [1,99,73,35]

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 },
];

// note that "adults" is still just a function (just a function of arrow type)
const adults = (arr) => {
  //your code here
  let arrAdults = arr.filter((eachPerson) => {
    if (eachPerson.age >= 21) {
      return true;
    }
  });

  let onlyNames = arrAdults.map((eachPerson) => {
    return eachPerson.name;
  });

  return onlyNames;
};

let canDrink = adults(people);
console.log(canDrink);

// .find => buscar el primer elemento que cumpla una condicion

let findMoreThan20 = people.find((eachPerson, index) => {
  // tambien espera una booleano
  if (eachPerson.age > 25) {
    return true;
  } else {
    return false;
  }
});

console.log(findMoreThan20);

// REDUCE

let someNumbers = [1, 2, 3, 4, 5];

let sum = someNumbers.reduce((acc, eachNumber) => {
  // espera como return la operación realizada sobre el accumulador
  console.log("acc:", acc, "eachNumber:", eachNumber);
  return acc + eachNumber;
}, 0);
// el ultimo argumento del reduce es el valor inicial del accumulador

console.log(sum);

let people2 = [
  { name: "Jorge", candy: 21 },
  { name: "Caro", candy: 30 },
  { name: "Ruth", candy: 10 },
  { name: "Clara" },
];

// un reduce para sumar todos los caramelos

let sumCandy = people2.reduce((acc, eachPerson) => {
  if (eachPerson.candy === undefined) {
    return acc;
  } else {
    return acc + eachPerson.candy;
  }

  // lo ultimo que retornemos siempre sea el accumulador y cualquier valor que modifique ese accumulador
}, 0);

console.log(sumCandy);

let allNames = people2.reduce((acc, eachPerson) => {
  return acc + eachPerson.name + " ";
}, "Nombres: ");

console.log(allNames);

// Actividad reduce

const menu = [
  { name: "Carrots", calories: 150.45 },
  { name: "Steak" },
  { name: "Broccoli", calories: 120.2342 },
  { name: "Chicken", calories: 250.6523 },
  { name: "Pizza", calories: 520.124 },
];

// again... just an arrow function below.
const calAvgCalories = (arr) => {
  // ... your code here

  if (arr.length === 0) {
    return 0;
  }

  let allCalories = arr.reduce((acc, eachIng) => {
    if (eachIng.calories === undefined) {
      return acc;
    } else {
      return eachIng.calories + acc;
    }
  }, 0);
  let avg = allCalories / arr.length;
  let avg2Decimals = avg.toFixed(2);
  let avg2DecimalsNumber = Number(avg2Decimals);
  return avg2DecimalsNumber;
};

//Invoking and running the function
let output1 = calAvgCalories(menu);
console.log(output1); //Answer should be 208.29

let output2 = calAvgCalories([]);
console.log(output2); //Answer should be 0

// REVERSE

let orderedNumbers = [1, 2, 3, 4, 5];
console.log("antes de reverse", orderedNumbers);

//   let reverseNumbers = orderedNumbers.reverse()
//   console.log("despues de reverse", reverseNumbers)

//   console.log(orderedNumbers)

// REVERSE Y SORT SON METODOS DESTRUCTIVOS => MUTAN EL ARRAY ORIGINAL

// situacion en donde no quisieramos modificar el array original
// clonar arrays

// strigify
// parse

//   let numbersCopy = JSON.parse( JSON.stringify(orderedNumbers) ) // deep clone cualquier data en JS
let orderedNumbersAsString = JSON.stringify(orderedNumbers) // convierte cualquier cosa en su version syntaxica String
console.log(orderedNumbersAsString)
let numbersCopy = JSON.parse(orderedNumbersAsString) // convierte un string a un elemento de JS, tomando en cuenta TODOS los caracteres


console.log("copia", numbersCopy);

// numbersCopy.reverse();
// console.log("luego del reverse", numbersCopy);

// console.log("original luego de reverse", orderedNumbers);



// SORT


let someLetters = ["a", "e", "d", "c", "b"]
let lettersCopy = JSON.parse( JSON.stringify(someLetters) )

lettersCopy.sort()

console.log(lettersCopy)


let numbersArr = [1, 50, 3, 1000, 6]
let numbersArrCopy = JSON.parse( JSON.stringify(numbersArr) )

numbersArrCopy.sort((elem1, elem2) => {
    // definimos el algoritmo a utilizar para ordenar los elementos
    console.log(elem1, elem2)
    if (elem1 > elem2) {
        // 1: ponlo delante 
        return 1
    } else if (elem2 > elem1) {
        // -1: ponlo detras
        return -1
    } else {
        // 0: no modifiques el orden
        return 0 // no los cambies
    }
})

console.log(numbersArrCopy)


let morePeople = [
    { name: "Jorge", candy: 21 },
    { name: "Caro", candy: 30 },
    { name: "ruth", candy: 10 },
    { name: "Clara", candy: 40 },
  ];

let peopleClone = JSON.parse( JSON.stringify(morePeople) )

// peopleClone.sort((elem1, elem2) => {
//     if (elem1.name > elem2.name) {
//         return 1
//     } else if (elem1.name < elem2.name) {
//         return -1
//     } else {
//         return 0
//     }

//     // localeCompare metodo que ordena alfabeticamente 2 strings y retorna 1 o -1
// })

peopleClone.sort((elem1, elem2) => {
    return elem1.name.localeCompare(elem2.name)
})

console.log(peopleClone)