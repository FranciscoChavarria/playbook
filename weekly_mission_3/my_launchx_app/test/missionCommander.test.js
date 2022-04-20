const MissionCommander = require('./../app/missionCommander');

describe("Unit Test for mission comander class", () => {
    test('Create a mission comander object', () => {
        const myMissionCommander = new MissionCommander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    });
})