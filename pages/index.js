import { Auth } from '../components/auth'
import {useEffect, useState} from 'react'

const Index = props => {

    const [loggedIn, setLog] = useState(null)

    useEffect(() => {
        setLog(localStorage.getItem('loggedIn'))
    },[])

    return <>
        {((loggedIn)? <></>: <Auth />)}
    </>
}


export default Index