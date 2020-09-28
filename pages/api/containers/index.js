import nextConnect from 'next-connect'
import database from '../../../middlewares/db'
import apikeyCheck from '../../../middlewares/apistring'

const handler = nextConnect()


handler
    .use(database)
    .use(apikeyCheck)
    /**
     * To get the list of containers
     */
    .get()
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