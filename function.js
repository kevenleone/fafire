function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");

  callback(name);
}

processUserInput((name) => {
  console.log("Olá..." + name);

  return function () {
    console.log("Teste");
  };
});
