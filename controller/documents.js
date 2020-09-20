

const createDoc = async (req, res) => {
    let { document_name } = req.query
    let { doc } = req.body

    try {
        let response = await req.db.collection(document_name)
            .insertOne(doc)

        return res.status(201).json(response.ops)
    } catch (error) {
        console.log(error)
        return res.status(404).send(error)
    }

}


export { createDoc }