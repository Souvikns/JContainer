import nextConnect from 'next-connect'
import middleware from '../../middlewares/db'

const handler = nextConnect()

handler
    .use(middleware)
    .get(async (req, res) => {

        try {
            let doc = await req.db.collection('containers').find().toArray()
            return res.json(doc)
        } catch (error) {
            return res.send(error)
        }


    })
    .post(async (req,res) => {
        let {name} = req.body

        try {
            let doc = req.db.collection('containers').findOne({name: name})

            if(doc){
                return res.status(401).send("Container already exists")
            }

            let response = req.db.collection('containers').insertOne({
                name: name,
                documents: []
            })

            return res.status(200).json(response)
        } catch (error) {
            return res.status(404).send(error)
        }
        
    })


export default handler