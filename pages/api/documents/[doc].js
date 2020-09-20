import nextConnect from 'next-connect'
import {
    createDoc,
    findDoc,
    updateDoc
} from '../../../controller/documents'

// importing middlewares
import database from '../../../middlewares/db'
import apiCheck from '../../../middlewares/apistring'

const handler = nextConnect()

handler
    .use(database)
    .get(findDoc)
    .post(createDoc)
    .patch(updateDoc)

export default handler