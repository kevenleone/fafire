const students = ["Keven", "Joao", "Maria"];

const country = {
  name: "Brazil",
  code: 55,
  tst: 123,
};

for (const key in country) {
  console.log(key, country[key]);
}

console.log("---");

students.forEach(function (student, index, array) {
  console.log(student, index, array);
});

console.log("---");

for (const student of students) {
  console.log(student);
}

console.log("---");

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

let i = 0;

while (i < 1) {
  console.log(i);

  i++;
}
