const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currvalue) {
//     console.log(`accumulator: ${acc} and current value: ${currvalue} `);    
//     return acc + currvalue
// }, 0)


// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "java course",
        price: 199
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
