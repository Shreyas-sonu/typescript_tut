"use strict";
let person;
person = ["chandu", 24];
person[0] = 'wifi';
person[1] = 143;
person.push(2);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
const mySize = Size.Medium;
console.log(mySize);
const greet = (name, age) => {
    console.log("hello my name is", name, "im", age, "old");
};
console.log(greet("ranjan", 25));
