const cars = ["Sienna", "Porche", "Bentley", "Ford"];

const carsWithModelFakeYear = cars.map((car, index) => ({
  car,
  index,
  year: index === 0 ? 1999 : 2022,
}));

const carsCurrentYear = carsWithModelFakeYear.filter(
  ({ year }) => year === new Date().getFullYear()
);

const oldCar = carsWithModelFakeYear.find(({ year }) => year === 1999);

const allCarsCurrentYear = carsWithModelFakeYear.every(
  (car) => car.year === new Date().getFullYear()
);

const atLeastOneCarCurrentYear = carsWithModelFakeYear.some(
  (car) => car.year === new Date().getFullYear()
);

console.log(carsWithModelFakeYear.at(3));

console.log({
  cars,
  carsWithModelFakeYear,
  carsCurrentYear,
  oldCar,
  allCarsCurrentYear,
  atLeastOneCarCurrentYear,
});
