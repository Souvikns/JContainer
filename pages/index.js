import { Auth } from '../components/auth'
import { useEffect, useState } from 'react'

import { Landing } from '../components/app'
import Containers from '../components/containers'

import {
    Container
} from '@material-ui/core'

// importing custom components 
import { Navbar } from '../components/navbar'

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

export async function getStaticProps(context) {

    const content = await import(`../markdown/index.md`)

    const data = content.default


    return {
        props: {
            data
        }
    }
}


export default Index