"use strict";
let a;
a = 10;
a = 20;
a = "string bitch";
console.log(a);
function render(document) {
    console.log(document);
}
console.log(render("abcd"));
const greet = (name, age) => {
    console.log("hello my name is", name, "im", age, "old");
};
console.log(greet("ranjan", 25));
