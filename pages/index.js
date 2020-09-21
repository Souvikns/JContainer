import { Auth } from '../components/auth'

const Index = ({data, isLoggedIn}) => {

    return <>
    {/* {((isLoggedIn)? null: <Auth />)} */}
    {data}
    </>
}

export async function getServerSideProps(context){
    const {check} = require('../lib/test')
    let data = check('Souvik')


    return {
        props: {
            data
        }
    }
}

export default Index