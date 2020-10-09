import Markdown from 'react-markdown'
import {
    Container,
    Grid
} from '@material-ui/core'
const Doc = ({ data }) => {

    return <>

        <Container>
            <h1>Documentation</h1>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    {Object.keys(data).map(el => {
                        return <h3>{el}</h3>
                    })}
                </Grid>

                <Grid item xs={10}>
                    <Markdown source={data.index} />
                </Grid>
            </Grid>
        </Container>
    </>
}

export async function getStaticProps(context) {
    const content = await import('../markdown/index.md')

    const data = {
        index: content.default
    }

    return {
        props: {
            data
        }
    }
}

export default Doc