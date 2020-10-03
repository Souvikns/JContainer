import Axios from 'axios'
import {
    FETCH_CONTAINER_LIST
} from '../constants'

const fetchContainers = (data) => {

    return {
        type: FETCH_CONTAINER_LIST,
        payload: data
    }
}

export const fetchContainersAsync = () => {
    return dispatch => {
        Axios({
            method: 'GET',
            url: '/api/containers',
            headers: {
                "api_key": localStorage.getItem('JC-api-key')
            }
        }).then(res => {
            dispatch(fetchContainers(res.data))
        }).catch(err => {
            console.log(err)
        })

    }
}