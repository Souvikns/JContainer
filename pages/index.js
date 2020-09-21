import { Auth } from '../components/auth'
import {useEffect} from 'react'

const Index = props => {

    let loggedIn;

    useEffect(() => {
        loggedIn = localStorage.getItem('loggedIn')
    })

    

    return <>
        {((loggedIn)? null: <Auth />)}
    </>
}


export default Index