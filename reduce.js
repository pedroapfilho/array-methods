const orders = [
  { amount: 250 },
  { amount: 210 },
  { amount: 540 },
  { amount: 620 }
]

//reduce will take an accumulator first and secondly the value to accumulate
const totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount
}, 0) //this ons is the starting value of the sum

console.log(totalAmount)