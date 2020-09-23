import nc from 'next-connect'
import database from '../../middlewares/db'
import {setupMetaData} from '../../lib/metadata/index'


const handler = nc()

handler
    .use(database)
    .get(async (req, res) => {
        let x = await setupMetaData(req.db)
        console.log(x)
        return res.send("Hello")
    })

export default handler