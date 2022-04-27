const Reader = require("./lib/utils/Reader");

const reader1 = new Reader();

console.log(Reader.readJsonFile("explorers.json"))