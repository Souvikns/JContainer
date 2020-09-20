import md from 'mongodb'

const ObjectId = md.ObjectId

const createDoc = async (req, res) => {
    let { doc } = req.query
    let { data } = req.body

    try {
        let response = await req.db.collection(doc)
            .insertOne(data)

        return res.status(201).json(response.ops)
    } catch (error) {
        console.log(error)
        return res.status(404).send(error)
    }

}

const findDoc = async (req, res) => {
    const { doc } = req.query

    try {

        let response = await req.db.collection(doc).find().toArray()

        return res.status(200).json(response)

    } catch (error) {
        return res.status(404).json(error)
    }
}

const updateDoc = async (req, res) => {
    const { doc } = req.query
    const { id, data, options } = req.body

    let oId = new ObjectId(id)

    try {
        let response = await req.db.collection(doc)
            .findOneAndUpdate({ _id: oId }, { $set: data }, options || {})

        return res.status(200).json(response.value)

    } catch (error) {
        return res.status(404).send(error)
    }

}

const deleteDoc = async (req, res) => {
    const { doc } = req.query
    const { id } = req.body

    let oId = new ObjectId(id)

    try {
        let response = await req.db.collection(doc)
            .findOneAndDelete({ _id: oId })

        return res.status(200).json(response.value)
    } catch (error) {
        console.log(error)
        return res.status(404).send(error)
    }

}


export {
    createDoc,
    findDoc,
    updateDoc,
    deleteDoc
}