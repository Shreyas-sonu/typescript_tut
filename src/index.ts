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
//?1 Any
// let a;
// a = 10;
// a = 20;
// a = "string bitch"; // so this is against the concept of ts
// console.log(a);
// //implicit any for fx parameter
// function render(document:any) { // this throw as error as implicit any is blocked
//   console.log(document);
// }
// console.log(render("abcd"));
////array in any
// var a = []; // this is a array of type any  avoid this as below
// let a: number[] = [];

//? 2 tuple
let person: [string, number];
person = ["chandu", 24];
person[0] = 'wifi';
// person[0]=1 // syntax error
person[1] = 143;
person.push(2) // this is a bug in ts which needs to be solved
// console.log(person);
//? 2 unknown
const greet = (name: string, age: unknown) => {
  console.log("hello my name is", name, "im", age, "old");
};
console.log(greet("ranjan", 25));
