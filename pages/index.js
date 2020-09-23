import { Auth } from '../components/auth'
import { useEffect, useState } from 'react'

import { Landing } from '../components/app'

const Index = props => {

    const [loggedIn, setLog] = useState(null)

    useEffect(() => {
        setLog(localStorage.getItem('loggedIn'))
    }, [])

    return <>
        {((loggedIn) ? <Landing /> : <Auth />)}
    </>
}


export default Index