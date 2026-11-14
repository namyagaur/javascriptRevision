// Write these three functions in hour1.js.

// 6. Order eligibility
function canProcessOrder(order) {
    if(!order || !order.status ||typeof order.status !== "string" || order.status !=="pending" || !order.amount || order.amount < 0 || typeof order.amount !== "number"){
        return false;
    }else return true;
}

// Requirements:
// - Order must exist.
// - Amount must be a positive number.
// - Status must be "pending".
// - Return a Boolean.



// 7. Revenue calculator
function calculateRevenue(orders) {
    let sum = 0;
    for(const order of orders ){
        if(!order.status || order.status !== "completed"|| !Number.isFinite(order.amount) || order.amount<0)continue; 
        else sum+=order.amount;
    }
    return sum;
}


// Requirements:
// - Use a for...of loop.
// - Only include completed orders.
// - Ignore invalid amounts.
// - Return total revenue.
// Example:
// const orders = [
//     { amount: 500, status: "completed" },
//     { amount: 200, status: "pending" },
//     { amount: 300, status: "completed" },
//     { amount: "invalid", status: "completed" }
// ];

// // Expected: 800


// 8. Grade calculator
function getGrade(marks) {
    if( marks>100 || marks<0 || typeof marks !=="number") return "Invalid Marks";
    else if(marks>= 90 && marks<=100)return "A";
    else if(marks>= 75 && marks<=89)return "B";
    else if(marks>= 60 && marks<=74)return "C";
    else if(marks>= 40 && marks<=59)return "D";
    else if(marks<40)return "F";
}


// // Requirements:
// // - Reject values outside 0–100 and non-numbers.
// // - 90–100: A
// // - 75–89: B
// // - 60–74: C
// // - 40–59: D
// // - Below 40: F