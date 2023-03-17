let name = "John";
console.log(name);

// Modules
require("./add");
const mul = require("./mul");

const result = mul(3, 9);
console.log("mult is", result);
