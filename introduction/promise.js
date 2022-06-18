async function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid Type");
  }
  return a + b;
}

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return reject(new Error("Um dos parametros nao é number"));
    }

    resolve(a + b);
  });
}

async function main() {
  try {
    const total = await sum(1, 2);

    console.log(total * 10);
  } catch (error) {
    console.log("Erro blabla...");
  }
}

main();
