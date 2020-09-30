import nextConnect from 'next-connect'
import database from '../../../middlewares/db'
import apikeyCheck from '../../../middlewares/apistring'

import {
    getAllContainer
} from '../../../controller/container'

const handler = nextConnect()


handler
    .use(database)
    .use(apikeyCheck)
    /**
     * To get the list of containers
     */
    .get(getAllContainer)
    /**
     * To create a new container
     */
    .post()
    /**
     * To update a the name of a container
     */
    .patch()
    /**
     * To delete a container
     */
    .delete()


export default handler