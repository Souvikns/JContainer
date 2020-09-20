import nextConnect from 'next-connect'

// importing middlewares
import database from '../../../middlewares/db'
import apiCheck from '../../../middlewares/apistring'

const handler = nextConnect()


handler
    .use(database)
    .get()
    .post(async (req,res) => {
        
    })
    .patch()
    .delete()

export default handler