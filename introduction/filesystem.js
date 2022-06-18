const fs = require("fs");

let abc;

fs.readFile("./class.js", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  }

  abc = data;

  console.log(data);
});

console.log(abc);
