export function logger(req,res,next){
    console.log(`req url - ${req.url}`)
    console.log(`req method - ${req.method}`)

    next();
}
