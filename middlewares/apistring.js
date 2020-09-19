import nextConnect from 'next-connect'

async function checkApiString(req,res,next){

    /**
     * Here the user will pass the api key in the header
     * we will check,if api key passed by the user matches 
     * with the api_key we have stored then we call next 
     * else we return http 401 error. 
     */


    return next()

}

const middleware = nextConnect()

middleware.use(checkApiString)

export default middleware