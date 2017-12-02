const toWhomToSell = (productNeeded, productForSale) => {
  productNeeded = productNeeded.sort((a, b) => b.price - a.price)
  return productNeeded
}

const companyData = [{
  id: 'A',
  amount: 1,
  price: 1
},{
  id: 'B',
  amount: 2,
  price: 5
},{
  id: 'C',
  amount: 3,
  price: 8
},{
  id: 'E',
  amount: 5,
  price: 10
},{
  id: 'D',
  amount: 4,
  price: 9
},{
  id: 'F',
  amount: 6,
  price: 17
},{
  id: 'G',
  amount: 7,
  price: 17
},{
  id: 'H',
  amount: 8,
  price: 20
},{
  id: 'I',
  amount: 9,
  price: 24
},{
  id: 'J',
  amount: 10,
  price: 30
}]

console.log(toWhomToSell(companyData, 10));
