const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test('1) Calcular numero de explorer en mission: "node"', () => {
      const explorers = [{mission:'node'},{mission:'node'}]
      const cantidad = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
      expect(cantidad).toBe(1);
    });
})