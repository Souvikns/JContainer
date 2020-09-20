import nextConnect from 'next-connect'
import {
    createDoc,
    findDoc,
    updateDoc,
    deleteDoc
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
    .delete(deleteDoc)

export default handler