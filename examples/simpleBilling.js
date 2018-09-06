const persons = [
  { name: "Pedro", gender: "male" },
  { name: "Gabriella", gender: "female" },
  { name: "Gabriel", gender: "male" },
  { name: "Gabriela", gender: "female" },
  { name: "San", gender: "male" },
  { name: "Tomás", gender: "other" },
  { name: "Jack", gender: "male" }
];

//What if you want to have different billing for males and females and you want to know how much males can give you

let totalBill = 0;

const billingForMale = persons
  .filter(person => person.gender === "male")
  .forEach(() => (totalBill += 100));

console.log(totalBill);
