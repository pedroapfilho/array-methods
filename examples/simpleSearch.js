const persons = [
  { name: "Pedro", gender: "male", address: "Rua Augusta" },
  { name: "Gabriella", gender: "female", address: "Jardim Ângela" },
  { name: "Gabriel", gender: "male", address: "Jardim Ângela" },
  { name: "Gabriela", gender: "female", address: "Capão Redondo" },
  { name: "Sandro", gender: "male", address: "Capão Redondo" },
  { name: "Tomás", gender: "other", address: "Jardim Ângela" },
  { name: "Jack", gender: "male", address: "Capão Redondo" },
  { name: "Gabrielle", gender: "female", address: "Jardim Ângela" }
];

// What if I want just females from Jardim Ângela and I typed: "Ga" on the search..

const wantedPersons = persons
  .filter(person => person.gender.toLowerCase() === "female")
  .filter(
    person => person.address.toLowerCase() == "Jardim Ângela".toLowerCase()
  )
  .filter(ga => ga.name.toLowerCase().includes("ga"));

console.log(wantedPersons);
