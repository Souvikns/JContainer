import nextConnect from 'next-connect'
import database from '../../middlewares/db'
import { setupMetaData } from '../../lib/metadata'

const handler = nextConnect();

handler
    .use(database)
    .post(async (req, res) => {

        let { passcode } = req.body

        try {

            let response = await setupMetaData(req.db, passcode)

            return res.status(200).send(response)

        } catch (error) {
            return res.status(404).send('something went wrong')
        }

    })

export default handler