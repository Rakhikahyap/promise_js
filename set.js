// Add Values to the Set
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// console.log(letters)

// const letters = new Set(["a","b","c"]);
// console.log(letters)

const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(letters)