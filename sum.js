/*
3. Sum
Imagine you have a shopping cart with various items. 
Each item has a price, and you want to know the total cost of everything in the cart.
e.g. item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]
*/
function calculateTotalCost(items) {
    let totalCost = 0; //Initializing total cost of items as zero.

    for (let i = 0; i < items.length; i++) { //Looping through each item in the cart
        totalCost = totalCost + items[i].price;
    }

    return totalCost;
}

const items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const totalCost = calculateTotalCost(items);
console.log("Total Cost:", totalCost); 
