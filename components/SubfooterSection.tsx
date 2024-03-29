import React from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Link, Typography } from '@material-ui/core'

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: 120,
        backgroundColor: "#000",
        padding: "0px 8px",
    },
    navBar: {
        display: "flex",
        height: 80,
        [theme.breakpoints.down("xs")]: {
            padding: "8px 0px",
        },
    },
    footerLink: {
        fontSize: 18,
        fontWeight: 500,
        color: "#FFF",
        margin: "0px 16px",
        textDecoration: "none",
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
            fontWeight: 600,
        },
        "&:hover": {
            color: theme.palette.primary.light,
        },
    },
    citation: {
        minHeight: 40,
        display: "flex",
        color: "#FFFFFFE6",
        justifyContent: "center",
        padding: "16px 0px",
    },
}));

const SubfooterSection = (props: Props) => {

    const classes = useStyles();

    return (
        <Grid className={classes.root} container direction="column">
            <Grid className={classes.navBar} item>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <Link rel="noopener" className={classes.footerLink} href="/" variant="subtitle1" underline="none">
                            Home
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link rel="noopener" className={classes.footerLink} href="/whitepaper" variant="subtitle1" underline="none">
                            Whitepaper
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link rel="noopener" className={classes.footerLink} href="/#join-the-community" variant="subtitle1" underline="none">
                            Join The Community
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.citation} item>
                <Typography style={{ fontSize: 14, fontWeight: 500, textAlign: "center" }} variant="subtitle1">
                    <span style={{ fontWeight: 600 }}>© 2022 Lynx Foundation.</span> All rights reserved
                </Typography>
            </Grid>
        </Grid>
    )
}

export default SubfooterSection