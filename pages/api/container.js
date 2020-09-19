import nextConnect from 'next-connect'
import middleware from '../../middlewares/db'

const handler = nextConnect()

handler
    .use(middleware)
    .get(async (req, res) => {

        try {
            let doc = await req.db.collection('containers').findOne()
            return res.json(doc)
        } catch (error) {
            return res.send(error)
        }


    })


export default handler