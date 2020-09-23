import Axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Auth = () => {

    const [passCode, setPassCode] = useState('')
    const router = useRouter()

    const checkIn = () => {
        Axios({
            url: '/api/check',
            method: 'POST',
            data: {
                passcode: passCode
            }
        }).then(data => {
            localStorage.setItem('JC-passcode', data.data)
            localStorage.setItem('loggedIn', true)
            router.reload()
        }).catch(err => {
            console.log(err)
        })
    }

    return <>
        <center>
            <h1>Login/Signup</h1>
            <p>
                If this is the first time setting up, set your passcode.
            </p>
        </center>

        <center>
            <div style={{ marginBottom: '20px' }}>

                <input placeholder="password" value={passCode} onChange={e => setPassCode(e.target.value)} />
            </div>
            <div>
                <button onClick={() => { checkIn() }}>Press</button>
            </div>
        </center>
    </>
}


export default Auth