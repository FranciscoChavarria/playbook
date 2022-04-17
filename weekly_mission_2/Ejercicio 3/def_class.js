class Repo {
    constructor(name, author, lenguage, numberOfCommits, stars, forks, issues_open, issues_close) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
      this.author = author
      this.lenguage = lenguage
      this.numberOfCommits = numberOfCommits
      this.stars = stars
      this.forks = forks
      this.issues_open = issues_open
      this.issues_close = issues_close
    }
  
    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    getTotalIssues () {
      console.log(this.issues_open + this.issues_close)
    }
  
    // método
    getGeneralInfo () {
      console.log(`This repository ${this.name} was created by ${this.author}`)
    }
}
  
// Esta clase se exporta en este módulo
module.exports = Repo