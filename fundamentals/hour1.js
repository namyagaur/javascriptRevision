// Quick coding task
// Write this function:
function validateUser(user) {
    if(!user){
        return "Invalid User";
    }else if (user.name === "" || !user.name){
        return "Name Required";
    }else if (!user.age || typeof user.age !== "number" ){
        return "Invalid age";
    }
    else if (user.age <18){
        return "Age restricted";
    }else return "User Accepted";
}


// Requirements:
// - Return "Invalid user" if user is null or undefined.
// - Return "Name required" if name is missing or empty.
// - Return "Age restricted" if age is below 18.
// - Otherwise return "User accepted".