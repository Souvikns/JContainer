import _ from 'lodash'
import { METADATA } from '../lib/constants'

const createContainer = async (req, res) => {


}


const getAllContainer = async (req, res) => {
    try {
        let colls = await req.db.listCollections().toArray()
        
        let collections = _.filter(colls, el => { return el.name != METADATA })

        return res.status(200).json(collections)
    } catch (error) {
        console.log(error)
        return res.status(404).send(error)
    }
}

export {
    createContainer,
    getAllContainer
}