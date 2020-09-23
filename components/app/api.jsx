import { useState } from 'react'

const Api = props => {
    let api_key = localStorage.getItem('JC-api-key')

    let [rev, setRev] = useState(false)

    const reveal = () => {
        setRev(!rev)
    }

    return <>
        <p><strong>API Key:</strong> {((rev) ? api_key : "*********")} <button onClick={reveal}>{((rev) ? "hide" : "show")}</button></p>
    </>
}


export default Api