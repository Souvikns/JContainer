import { Auth } from '../components/auth'
import { useEffect, useState } from 'react'

import { Landing } from '../components/app'

const Index = () => {

    const [loggedIn, setLog] = useState(null)

    useEffect(() => {
        setLog(localStorage.getItem('loggedIn'))
    }, [])

    return <>
        {((loggedIn) ? <Landing /> : <Auth />)}
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