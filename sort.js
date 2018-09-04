const orders = [
  { amount: 250 },
  { amount: 210 },
  { amount: 540 },
  { amount: 620 }
]

const orderedOrders = orders
  .map(order => order.amount) //here I'm just taking the values and returning it
  .sort() //it sorts the values

console.log(orderedOrders)