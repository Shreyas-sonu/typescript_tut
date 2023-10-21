"use strict";
function greetings(name) {
    console.log(name);
}
function greetings1(name) {
    return name;
}
const hello = greetings1("sonu");
console.log(hello);
const greet = (name, age) => {
    console.log("hello my name is", name, "im", age, "old");
};
console.log(greet("ranjan", 25));
