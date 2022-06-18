function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Honda", "Accord", 1998);

const isCarInstance = mycar instanceof Car; // retorna true
const isObjectInstance = mycar instanceof Object; // retorna true
const isStringInstance = mycar instanceof String; // retorna false

if (isCarInstance) {
  console.log("É uma instancia de carro");
}

if (isObjectInstance) {
  console.log("É uma instancia de Object");
}

try {
  const abc = 1;
  abc = true;
} catch (error) {
  console.log(error instanceof TypeError); // true
  console.log(error.message); // "null has no properties"
  console.log(error.name); // "TypeError"
  console.log(error.fileName); // "Scratchpad/1"
  console.log(error.lineNumber); // 2
  console.log(error.columnNumber); // 2
  console.log(error.stack); // "@Scratchpad/2:2:3\n"
}
