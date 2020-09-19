import fetch from 'isomorphic-unfetch'
const Index = ({data}) => {

    return <>
        <center>
            <h1>Create your own data storage service</h1>

            {data.map(el => <div key={el._id}>
            <p>{el.name}</p>
            </div>)}
        </center>
    </>
}

export async function getServerSideProps(context){
    
    const res = await fetch('http://localhost:3000/api/container')
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}

export default Index