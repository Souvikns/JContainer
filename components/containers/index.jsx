import Holder from './holder'
import {useState, useEffect} from 'react'
import Axios from 'axios'

const Index = () => {
    let [containers, setContainers] = useState([])

    useEffect(() => {
        Axios({
            method: 'GET',
            url: '/api/containers',
            headers: {
                "api_key": localStorage.getItem('JC-api-key')
            }
        }).then(res => {
            console.log(res)
            setContainers(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            {containers.map(el => <Holder name={el.name} />)}
        </div>
    )
}

export default Index