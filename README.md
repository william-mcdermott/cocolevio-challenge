# Cocolevio Programming Challenge

I wrote my response in the form of a JavaScript function. The function takes two arguments: the first is an array of objects representing the data from the companies looking to purchase the material. Each object includes the id of the company, the amount of material they are looking to purchase, and the amount of money they are willing to pay. Sample data:
```
[{
  id: 'A',
  amount: 1,
  price: 1
}, {
  id: 'B',
  amount: 2,
  price: 5
}]
```
The second argument is the amount of material that the selling company has to offer.

The function returns an array similar to the first argument it takes, except each object has two additional properties: the amount of material they will purchase ('bought') and the total amount they will pay for the material they are purchasing (total). Sample data:
```
[ { id: 'J', amount: 10, price: 30, bought: 10, total: 300 },
  { id: 'I', amount: 9, price: 24, bought: 2, total: 48 },
  { id: 'H', amount: 8, price: 20, bought: 0, total: 0 } ]

```
