import { Auth } from '../components/auth'

const Index = () => {
    const loggedIn = localStorage.getItem('loggedIn')


    return <>
        {((loggedIn)? null: <Auth />)}
    </>
}


export default Index