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
let a;
a = 10;
a = 20;
a = "string bitch"; // so this is against the concept of ts
console.log(a);
//implicit any for fx parameter
function render(document:any) { // this throw as error as implicit any is blocked
  console.log(document);
}
console.log(render("abcd"));
//? 1 unknown
const greet = (name: string, age: unknown) => {
  console.log("hello my name is", name, "im", age, "old");
};
console.log(greet("ranjan", 25));
