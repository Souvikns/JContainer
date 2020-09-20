import nextConnect from 'next-connect'
import {METADATA} from '../lib/constants'

async function checkApiString(req,res,next){

    /**
     * Here the user will pass the api key in the header
     * we will check,if api key passed by the user matches 
     * with the api_key we have stored then we call next 
     * else we return http 401 error. 
     */
    let {api_key} = req.headers

    let doc = await req.db.collection(METADATA).findOne()

    if(doc.api_key !== api_key){
        return res.status(401).send('UnAutorized')
    }


    return next()

}

const middleware = nextConnect()

middleware.use(checkApiString)

export default middleware