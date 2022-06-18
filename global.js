const lastname = "keven";

console.log(lastname.startsWith("ke"));
console.log(lastname.charAt(0));
console.log(lastname.toUpperCase());
console.log(lastname.toLowerCase());
console.log(lastname.repeat(5));
console.log(lastname.substring(2, 5));

console.log("------");

const users = ["Keven", "Leone"];

console.log(users.length);
console.log(users.join());
console.log(users.toString());

console.log("------");

const today = new Date();

console.log(today.toISOString());

const user = {
  name: "Keven",
  country: "Brazil",
};

console.log("------");

console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(user)));
