// Hour 2 assessment


// Now you have the complete concepts. Let's test implementation.

// ----------------------------------

// Problem 1 — Array transformation

// Given:
const prices = [100, 250, 50, 400, 150, 600];
// Write functions to:
// 1. Return prices greater than 200.
function pricesGreater(prices){
    return prices.filter(price => price>200);
}

// 2. Return a new array containing prices with 18% tax.
function pricesWithTax(prices){
    return prices.map(price => price + price*0.18);
}
// 3. Calculate total price using reduce().
function total(prices){
    return prices.reduce((sum,price)=> sum + price, 0);
}
// 4. Find the first price greater than 300.
function findGreater(prices){
    return prices.find((price)=> price > 300);
}
// 5. Check whether any price exceeds 500.
function findIf(prices){
    return prices.some((price)=> price > 500);
}
// 6. Check whether all prices are positive.
function findAll(prices){
    return prices.every((price)=> price > 0);
}

// ----------------------------------
// Problem 2 — Real-world order data

// Given:
const orders = [
    { id: 1, customer: "A", amount: 500, status: "completed" },
    { id: 2, customer: "B", amount: 1200, status: "pending" },
    { id: 3, customer: "C", amount: 800, status: "completed" },
    { id: 4, customer: "D", amount: 200, status: "cancelled" },
    { id: 5, customer: "E", amount: 1500, status: "completed" }
];


// Implement:
// 1. Get completed orders.
function getCompleted(orders){
    return orders.filter((order)=> order.status === "completed");
}
// 2. Calculate completed revenue.
function totalRevenue(orders){
    return orders.reduce((sum,order) => sum + order.amount,0);
}
// 3. Find the highest-value order.
function totalRevenue(orders){
    return orders.reduce((highest,order) => order.amount>highest.amount ? order : highest,0);
}

// 4. Extract customer names.
function extractcustomer(orders){
    return orders.map(order => order.customer);
}
// 5. Get all orders above ₹700.
function getAll(orders){
    return orders.filter(order => order.amount > 700);
}
// 6. Group orders by status.
function grouping(orders){
    return orders.reduce((groups,order)=>{
        if(!groups[order.status]){
            groups[order.status] = []
        }
        groups[order.status].push(order);
        return groups;
    },{});
}
// console.log(grouping(orders))



// ----------------------------------
// Problem 3 — Debugging

// Explain what is wrong here and fix it:
// const users = [
//     { name: "A", age: 20 },
//     { name: "B", age: 17 },
//     { name: "C", age: 25 }
// ];

// const adults = users.map(user => {
//     if (user.age >= 18) {
//         return user;
//     }
// });

// console.log(adults);

const adults = users.filter(user => user.age >= 18);

// we should use filter, not map because map will return undefined when the condition is not true, but filter is used for this.


// ----------------------------------
// Problem 4 — References

// Predict the output:
// const a = {
//     name: "Sam",
//     address: { city: "Delhi" }
// };

// const b = { ...a };

// b.name = "Alex";
// b.address.city = "Mumbai";

// console.log(a.name);
// sam, because shallow copy is made by spread operator on outer shell but not inside one 
// console.log(a.address.city);
// mumbai

