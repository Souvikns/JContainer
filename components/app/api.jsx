import { useState } from 'react'

import {
    Paper,
    makeStyles,
    Grid,
    Button,
    Typography,
    Container
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2, 4)
    }
}))

const Api = props => {
    let api_key = localStorage.getItem('JC-api-key')

    let [rev, setRev] = useState(false)

    const reveal = () => {
        setRev(!rev)
    }

    const classes = useStyle()

    return <>
        <Container>
            <Paper className={classes.root} variant="outlined">

                <Grid container spacing={2}>
                    <Grid item xs={3} />

                    <Grid item xs={2}>
                        <Typography>
                            API Key
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography>
                            {((rev) ? api_key : "*********")}
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Button onClick={reveal}>{((rev) ? "hide" : "show")}</Button>
                    </Grid>

                    <Grid item xs={3} />

                </Grid>

            </Paper>
        </Container>
    </>
}


export default Api