const { default: Api } = require("./api")


const Landing = () => {

    return <>
        <center>
            <h1>Welcome to your own Data storage</h1>

            <Api />
        </center>
    </>
}

export default Landing