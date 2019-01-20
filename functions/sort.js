const orders = [
  { amount: 250 },
  { amount: 210 },
  { amount: 540 },
  { amount: 620 }
]

// It sorts the array depending on the arguments
const orderedOrders = orders
  .map(order => order.amount) // here I'm just taking the values and returning it
  .sort() // it sorts the values

console.log(orderedOrders)
