const persons = [
  { name: "pedro", gender: "male" },
  { name: "gabi", gender: "female" },
  { name: "bi", gender: "male" }
];

// map runs on each object on the array and returns something from it
const names = persons.map(person => person.name + " is a " + person.gender)

console.log(names)