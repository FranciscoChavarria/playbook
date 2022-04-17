const pullRequest = {
    title: "Blog Explorers",
    author: "Francisco Chavarria",
    branchName: "main",
    dateCreated: "10/04/2022",
    status: "open",
    repositoryNameAssociated: "blogs_explorers_LaunchX",
    getStatus: function(){
        return this.getStatus;
    },
    getTitleAndAutor: function(){
        return this.title + " " + this.author;
    }
}

console.log("Titulo del pullRequest: ", pullRequest.title);
console.log("Nombre del repositorio: ", pullRequest.repositoryNameAssociated);
console.log(pullRequest.getTitleAndAutor());