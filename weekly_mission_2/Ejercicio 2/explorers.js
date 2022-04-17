const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

//1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Ejercicio 2.1");
explorers.forEach(element => console.log(element.name))

//2. Imprime el stack de cada explorer, usa FOR EACH
console.log("Ejercicio 2.2");
explorers.forEach(element => console.log(`Nombre: ${element.name} Stack: ${element.stack}`))

//3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Ejercicio 2.3");
const stackExplorers = explorers.map(element => {
    const arrayStacks = [];
    return arrayStacks.concat(element.stack);
})

console.log(stackExplorers);

//Forma corta por MC Carlo
console.log("Ejercicio 2.3.1");
const stackExplorers1 = explorers.map(element => element.stack)
console.log(stackExplorers1);


//4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Ejercicio 2.4");
const filterExplorers1 = explorers.filter(item => item.stack.indexOf("js") >= 0);
console.log(filterExplorers1);

//Forma corta por MC Carlo
console.log("Ejercicio 2.4.1");
const filterExplorers2 = explorers.filter(item => item.stack.includes("js"));
console.log(filterExplorers2);


//5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Ejercicio 2.5");
const filterExplorers = explorers.find(element => element.city == "CDMX");
console.log(filterExplorers);


//6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("Ejercicio 2.6");
const sumaTotal = explorers.reduce(
  (acumulador, explorer) => acumulador + explorer.exercises_completed,
  0
);

console.log(sumaTotal);


//7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
//Valida que algun registro sea true, con uno que sea true devuelve true
console.log("Ejercicio 2.7");
const valFinished = explorers.some(item => item.missions.frontend.exercisesFinished === true);
console.log(valFinished);


//8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
//Every valida que todos los registros sean true, tienen que ser todos true para que devuelva true
console.log("Ejercicio 2.8");
const valFinished1 = explorers.every(item => item.missions.onboarding.isFinished === true);
console.log(valFinished1);