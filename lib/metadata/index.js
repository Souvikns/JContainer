import { METADATA } from '../constants'
import randomString from 'randomstring'
import mongodb from 'mongodb'

const ObjectId = mongodb.ObjectId

const updateApiString = async db => {
    /**
     * @param db
     * we generate a new random api string and 
     * update the api_key value in the _metadata collection
     */

    const api_key = randomString.generate()

    let md = await db.collection(METADATA).findOne()

    let id = new ObjectId(md._id)

    try {
        let res = await db.collection(METADATA).findOneAndUpdate({_id: id},{$set: {api_key: api_key}})
    } catch (error) {
        throw error
    }


}

const createContainer = async (db, container_name) => {
    /**
     * @params db container_name
     * We first check that if the name already exists 
     * in the containers field in the _metadata collection 
     * if not present we add the new name 
     * or if already present we throw error
     */
}

const deleteContainer = async (db, container_name) => {

    /**
     * @params db container_name
     * we first delete the collection for the database
     * then we clear the name from the container field
     * from the _metadata collection
     */

}

const updateContainer = async (db, container_name) => {
    /**
     * @params db container_name
     * we update the collections name with the new 
     * name, then update the container list from 
     * _metadata collection. 
     */
}

const setupMetaData = async db => {
    /**
     * @param db
     * we create the initial _metadata collection
     */
    db.collection(METADATA).insertOne({
        api_string: '',
        containers: []
    })
}

export default {
    updateApiString,
    createContainer,
    deleteContainer,
    updateContainer,
    setupMetaData
}