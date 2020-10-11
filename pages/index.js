import { Auth } from '../components/auth'
import { useEffect, useState } from 'react'

import { Landing } from '../components/app'
import Containers from '../components/containers'

import {
    Container
} from '@material-ui/core'

// importing custom components 
import { Navbar } from '../components/navbar'

// New Test Branch

const Index = () => {

    const [loggedIn, setLog] = useState(null)

    useEffect(() => {
        setLog(localStorage.getItem('loggedIn'))
    }, [])

    return <>
        <Navbar />
        {((loggedIn) ? <Landing /> : <Auth />)}

        <Container>
            <Containers />
        </Container>
    </>
}


export default Index