// Load the names module
const names = require("./04-names.js");

// Load the utils module
const greet = require("./05-utils.js");

// Load the alternative flavor module
const items = require("./06-alternative-flavor.js");

// Load the mind grenade module
require("./07-mind-grenade.js");

// Use the loaded modules
console.log("Names:", names);
greet(names.john);
greet(names.jane);
greet(names.doe);

console.log("Items:", items);
console.log(items.item1);
console.log(items.item2);
console.log(items.item3);
