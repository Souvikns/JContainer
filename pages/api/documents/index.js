import nextConnect from 'next-connect'
import {
    createDoc
} from '../../../controller/documents'

// importing middlewares
import database from '../../../middlewares/db'
import apiCheck from '../../../middlewares/apistring'

const handler = nextConnect()


handler
    .use(database)
    .get(async (req,res) => {
        return res.json(req.db)
    })
    .post(createDoc)
    .patch()
    .delete()


export default handler