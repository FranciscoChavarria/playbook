const express = require("express");
const ExplorerController = require("./controllers/ExplorerController")
const app = express();
app.use(express.json());
const port = 3000;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const numberExplorerInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json(numberExplorerInMission);
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const userNamesExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(userNamesExplorers);
});

app.listen(port,()=>{
    console.log("Server listo!!!")
})