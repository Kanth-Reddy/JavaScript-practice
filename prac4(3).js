let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let remove = companies.shift();
console.log(companies); // Bloomberg

let replace = companies.splice(1, 1, "Ola");
console.log(companies); // [Uber]

let add = companies.push("Amazon");
console.log(companies); // 3