import nextConnect from 'next-connect'

// importing middlewares
import database from '../../../middlewares/db'
import apiCheck from '../../../middlewares/apistring'

const handler = nextConnect()


handler
    .use(database)
    .get(async (req,res) => {
        return res.json(req.db)
    })
    .post(async (req, res) => {
        let { document_name } = req.query
        let { doc } = req.body

        try {
            let response = await req.db.collection(document_name)
            .insertOne(doc)

            return res.status(201).json(response.ops)
        } catch (error) {
            console.log(error)
            return res.status(404).send(error)    
        }


    })
    .patch()
    .delete()


export default handler