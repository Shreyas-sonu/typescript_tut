//! Hello world
// let age: number = 20;
// age = 20;
// // age = '1';
// console.log("hello world");
// // const num: int = 1;
// let message: string = "Hello, World!";
// console.log(message);
// let hello = (a:number,b:string) => {
//     console.log(a);
//     console.log('hello');
//     console.log(b);
// }
// hello(5,'Sonu');
//! Data types
//? 1 unknown
const greet = (name: string, age:unknown) => {
  console.log("hello my name is", name, "im", age, "old");
};
console.log(greet('ranjan', 25));