const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, "node");
    }

    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, "node");
    }
}

module.exports = ExplorerController