function checkPayment(willsee){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(willsee==true){
                resolve("Payment is successfull!");
            }
            else{
                reject("Sorry, not succefull!");
            }
        }, 2000);
    })
}

console.log("Checking payment...")

async function processPayment(x){
    try{
        const mess = await checkPayment(x);
        console.log(mess);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Processed!");
    }

    console.log("Process payment completed");
}

processPayment(true);


console.log("the end ig")