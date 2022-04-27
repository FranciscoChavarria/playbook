const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test('1) Calcular numero de explorer en mission: "node"', () => {
      const explorers = [{mission:'node'}]
      const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
      expect(cantidad).toBe(1);
    });

    test('2) Mostrar nombres explorers en mission: "node"', () => {
        const explorers = [{mission:'node',githubUsername:'Mario'}]
        const nombres = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const resultExpected = ["Mario"]
        console.log(nombres)
        console.log(resultExpected)
        expect(nombres[0]).toBe(resultExpected[0]);
      });
})