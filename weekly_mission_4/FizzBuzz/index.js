const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
const filtro = ExplorerService.filterByMission(explorers, "node")

console.log(filtro);