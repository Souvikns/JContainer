import nextConnect from 'next-connect'
import middleware from '../../middlewares/db'

const handler = nextConnect()

handler
    .use(middleware)
    .get(async (req, res) => {
        let doc = await req.db.collection('containers').findOne()

        return res.json(doc)    
    })


export default handler