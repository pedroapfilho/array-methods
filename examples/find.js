const persons = [
  { name: "pedro", gender: "male" },
  { name: "gabi", gender: "female" },
  { name: "bi", gender: "male" }
];

// it finds the first one that returns true and return all the array
const pedro = persons.find(person => person.name === "pedro")

console.log(pedro)
