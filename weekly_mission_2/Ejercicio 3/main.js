const Repo = require('./def_class') // Invocas el módulo que contiene la clase

// Creación de un objeto
const repo1 = new Repo("LaunchX","Francisco Chavarria", "JavaScript",100,199,299,10,10) // Creas un objeto nuevo, esto llama por default el constructor de la clase

// invocación del método
repo1.getTotalIssues();
//repo1.getGeneralInfo();