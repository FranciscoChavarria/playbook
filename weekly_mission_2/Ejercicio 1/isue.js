const issue = {
    title: "Links incompletos",
    repositoryNameAssociated: "weekly_mission_2",
    status: "Pending",
    numberOfComments: 0,
    labels: "Issues Weekly 2",
    author: "Francisco Chavarria",
    dateCreated: "16/04/2022",
    lastUpdated: "16/04/2022",
    getTitleAndAuthor: function(){
        return this.title + " " + this.author;
    },
    getGeneralInfo: function(){
        return this.repositoryNameAssociated + " " + this.status;
    }
}

console.log("Titulo del issue: ", issue.title);
console.log("Nombre del repositorio: ", issue.repositoryNameAssociated);
console.log(issue.getTitleAndAuthor());