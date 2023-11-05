// const car: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.