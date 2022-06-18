const name = "Keven Leone";
const age = 26;
const currency = 12.0005;
let email = undefined;
const pets = null;
const money = BigInt(10);
const isRaining = true;

const keven = 1;

const student = {
  name: "Keven",
  age: 26,
  countries: [
    {
      name: "Brazil",
      state: "Pernambuco",
      city: "Recife",
    },
  ],
};

Object.freeze(student);

delete student.age;
student.name = "Jose";

student.countries.push({
  name: "Spain",
  state: "Barcelona",
  city: "Barcelona",
});

console.log(student);

const students = ["Keven", "Joao"];
