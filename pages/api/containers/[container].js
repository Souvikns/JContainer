import nextConnect from 'next-connect'
import database from '../../../middlewares/db'

// importing controllers
import {
    createContainer,
    getAllContainer
} from '../../../controller/container'

const handler = nextConnect();

handler
    .use(database)
    .get(getAllContainer)
    .post(createContainer)



export default handler