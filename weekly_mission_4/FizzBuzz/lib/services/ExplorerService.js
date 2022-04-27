class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerService