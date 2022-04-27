//const Reader = require("./lib/utils/Reader");
//const ExplorerService = require("./lib/services/ExplorerService");
//const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerController = require("./lib/controllers/ExplorerController");

/* Pruebas del Ejercicio 1
const explorers = Reader.readJsonFile("explorers.json");
const filtro = ExplorerService.filterByMission(explorers, "node");
const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const nombres = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(filtro);
console.log(cantidad);
console.log(nombres);

const explorer1 = {name: "Explorer1", score: 1};
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
Fin Pruebas Ejercicio 1*/

//Pruebas Ejercicio 2 llamado desde ExplorerController
console.log(ExplorerController.getExplorersByMission("node"));