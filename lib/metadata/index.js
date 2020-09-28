import { METADATA } from '../constants'
import randomString from 'randomstring'
import mongodb from 'mongodb'
import { genApiKey } from './api.string'

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
        let res = await db.collection(METADATA).findOneAndUpdate({ _id: id }, { $set: { api_key: api_key } })
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

    /**
     * First check _metadata collections exists or not
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

const setupMetaData = async (db, passcode) => {
    /**
     * @param db
     * we create the initial _metadata collection
     */
    let coll = await db.listCollections({ name: METADATA }).next()

    if (!coll) {
        let api_key = genApiKey(12)
        console.log(api_key)
        let md = await db.collection(METADATA).insertOne({
            api_key: api_key,
            passcode: passcode,
            containers: []
        })

        return { code: md.ops[0].passcode, api_key: md.ops[0].api_key }
    }

    let response = await db.collection(METADATA).findOne()

    return { code: response.passcode, api_key: response.api_key }

}

export {
    updateApiString,
    createContainer,
    deleteContainer,
    updateContainer,
    setupMetaData
}