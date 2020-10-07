import Link from 'next/link'

import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    Typography
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

const Navbar = () => {

    const classes = useStyle()


    return (
        <div className={classes.root}>
            <AppBar
                color="inherit"
                elevation="0"
                position="sticky"
            >
                <Toolbar>

                    <Typography className={classes.title}>

                    </Typography>
                    <Link href="/doc">
                        <Button color="primary">
                            Doc
                    </Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar