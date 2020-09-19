import nc from 'next-connect'


const handler = nc()

handler
    .get(async (req, res) => {
        return res.send("Hello")
    })

export default handler