import { jobs } from "./jobs.js";
const successfullJob = [];
const failedJob = [];
function processPayment(job){
    return new Promise((resolve, reject)=>{
        console.log(`Starting job of jobID - ${job.id}`);
        setTimeout(()=>{
            if(job.status){
            successfullJob.push({
                jobID : job.id,
                jobname : job.name
            })
            resolve(`Job ${job.id} is successfull!`)
        }else{
            failedJob.push({
                jobID : job.id,
                jobname : job.name
            })
            reject(`Job ${job.id} is Rejected!`)
            
        }
        console.log(`Processed Job ${job.name}
            \n`);
        },3000)
        
    })
}

 async function forAllJobs(jobs){
    for (const job of jobs){
        try{
            const message = await processPayment(job);
            console.log(message);
        }catch(err){
            console.log(err);
        }
        finally{
            console.log(`${job.id} is done.`);
        }
    }
    show("Successfull Job", successfullJob)
show("Failed Job", failedJob)
}

function show(name, arr){
    console.log(`Jobs in ${name}`)
    for( const job of arr){
        console.log (`jobid - ${job.jobID}
             job Name - ${job.jobname}
            `
           
        );
    }
}

console.log("Jobs are starting now - ")
console.log("\n ------------------------- \n ")
forAllJobs(jobs);

