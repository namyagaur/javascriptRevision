// Hour 3 — Combined assessment
// Now let's test whether you can actually use these concepts.


// Problem 1 — Predict the output
// const user = {
//     name: "Sam",
//     profile: {
//         age: 21
//     }
// };

// console.log(user.profile?.city);
// console.log(user.address?.city);

// const count = 0;

// console.log(count || 10);
// console.log(count ?? 10);

// console.log(`Age: ${user.profile.age}`);


/*
Output - 
Undefined
Undefined
10
0
Age: 21
*/ 

// Problem 2 — Build a user formatter
// Implement:
function formatUser(user) {
    if(!user) return "Invalid"
    const name = user.profile?.name || "Guest";
    const age = user.profile?.age ?? 0;
    return `${name} is ${age} years old.`
}


// Requirements:
// - Safely access user.profile.name.
// - If name is missing, use "Guest".
// - Safely access user.profile.age.
// - If age is null or undefined, use 0.
// - Return a string in this format: "Namya is 21 years old".
// Use:
// - Optional chaining
// - Nullish coalescing
// - Template literals





// Problem 3 — Error handling
// Implement:
function parseUser(jsonString) {
    try{
        return JSON.parse(jsonString);
    }catch(error){
        return "Invalid JSON"
    }
}


// Requirements:
// - Parse the JSON string.
// - If parsing succeeds, return the object.
// - If parsing fails, return "Invalid JSON".
// Use try/catch.






// Problem 4 — Payment processing
// Implement:
function processPayment(user, amount) {
    if(!user){
        throw new Error("User required");
    }else if(!Number.isFinite(amount) || amount<=0){
        throw new Error("Invalid Amount");
    }else if(user.balance < amount){
        throw new Error("Insufficient balance");
    }else return user.balance - amount;
}


// Requirements:
// 1. If user is missing, throw new Error("User required").
// 2. If amount is not a finite number or is less than or equal to zero, throw new Error("Invalid amount").
// 3. If the user's balance is less than the amount, throw new Error("Insufficient balance").
// 4. Otherwise return the remaining balance.




// Problem 5 — Explain in your own words
/*
1. Difference between || and ???
the difference is that if left hand is falsy on || it will return right hand otherwise it will return left hand. on the other side ?? only workd on undefined or null for the same.
2. Difference between map() and forEach()?
map return a new array with transformed elements, whereas foreaach() iterates over array
3. Difference between JSON.stringify() and JSON.parse()?
json.stringify converts normal js to json whereas parse converts json to js.
4. Why do we split code into modules?
so that it is more easy to handle, helpful, segmentation
5. What happens when an error is thrown inside a try block?
catch will catch it and throws error without breaking the code
*/
