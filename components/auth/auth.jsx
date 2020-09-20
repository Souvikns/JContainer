const { execOnce } = require("next/dist/next-server/lib/utils")

const Auth = () => {

    return <>
        <center>
            <h1>Login/Signup</h1>
        </center>

        <center>
            <div style={{ marginBottom: '20px' }}>
                <input placeholder="password" />
            </div>
            <div>
                <button>Press</button>
            </div>
        </center>
    </>
}


export default Auth