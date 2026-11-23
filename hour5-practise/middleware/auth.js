export function checkapi(req,res,next){
    const apikey = req.headers['x-api-key'];
    if(apikey!== "namya123"){
        return res.status(401).json({
            err : "WRONG API KEY"
        })
    }
    next();
}
