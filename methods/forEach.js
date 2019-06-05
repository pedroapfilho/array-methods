const persons = [
  { name: 'pedro', gender: 'male' },
  { name: 'gabi', gender: 'female' },
  { name: 'bi', gender: 'male' }
]

const names = []

// forEach runs on each object on the array and do something with it,
// it doesn't return anything at all
persons.forEach(person => names.push(person.name))

console.log(names)
