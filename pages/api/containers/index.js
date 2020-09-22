import nextConnect from 'next-connect'

const handler = nextConnect()


handler
    .post(async (req, res) => {
        /**
         * Create new continer
         * and update _metadata collection
         */
        let { name } = req.body
    })

export default handler