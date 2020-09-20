import nextConnect from 'next-connect'
import apiCheck from '../../../middlewares/apistring'
import databse from '../../../middlewares/db'

const handler = nextConnect()

handler
    // .use(databse)
    // .use(apiCheck)
    .get(async (req,res) => {

        console.log(req.query)

        return res.send('Hello')
    })
    .post(async (req,res) => {
        return res.json(req.body)
    })



export default handler