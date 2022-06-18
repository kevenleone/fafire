let names = ["keven", "leone"];

const namesWithoutMaria = [...names];

names.push("maria");

console.log(namesWithoutMaria);

console.log("-------------------------");

const student = {
  name: "Keven",
  country: "Brazil",
  university: {
    name: "FAFIRE",
    class: "Frontend",
    year: 2022,
  },
};

const student2 = {
  ...student,
  name: "Joao",
  university: {
    ...student.university,
    year: 2021,
  },
};

console.log("Fim do Spread");

console.log(student2);

console.log("Destructuring Object");

const {
  name,
  friend = "Desconhecido",
  country,
  university: { name: universityName, ...university },
} = {
  name: "Keven",
  country: "Brazil",
  university: {
    ...student.university,
  },
};

console.log({ name, friend, country, class: university.class, universityName });

console.log("Destructuring Array");

const [, porcheCar, ...otherCars] = [
  { make: "Sienna", year: 2022 },
  { make: "Porche", year: 2021 },
  { make: "Bentley", year: 2021 },
  { make: "Ford", year: 2021 },
];

console.log({ porcheCar, otherCars });

console.log("Rest Function");

// function sumValues(...values) {
//   return values.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
//   });
// }

const sumValues = (...values) =>
  values.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log(sumValues(0.1, 0.2, 1, 2, 20, 20, 30));
