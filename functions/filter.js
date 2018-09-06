const persons = [
  { name: "pedro", gender: "male" },
  { name: "gabi", gender: "female" },
  { name: "bi", gender: "male" }
];

// filter receives true/false and only puts the true ones on the array
const females = persons.filter(person => person.gender === "female")

console.log("Females", females);