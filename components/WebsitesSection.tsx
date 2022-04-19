import React from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Image from "next/image";

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#FFF",
        padding: "64px 32px",
        [theme.breakpoints.down("xs")]: {
            padding: "64px 0px 0px 0px",
        },
    },
    title: {
        fontSize: 32,
        marginBottom: 8,
        [theme.breakpoints.down("xs")]: {
            fontSize: 26,

        },
    },
    subtitle: {
        color: "#000",
        fontSize: 48,
        [theme.breakpoints.down("xs")]: {
            fontSize: 30,
        },
    },
    rowContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
    },
    row: {
        maxWidth: 1200,
    },
    card: {
        display: "flex",
        height: 400,
        maxWidth: 300,
        minWidth: 250,
        backgroundColor: "#0000001A",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: 500,
            minWidth: "100%",
        },
    },
    background: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        filter: "brightness(75%)",
    },
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        margin: 16,
        height: 64,
        width: "90%",
        backgroundColor: "#FFF",
        [theme.breakpoints.down("xs")]: {
            margin: "32px 16px",
        },
    },
    overlayText: {
        fontSize: 20,
        fontWeight: 600,
    },
}));

const WebsitesSection = (props: Props) => {

    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography className={classes.title} variant="h4" align="center">
                    Discover The Latest Digital Trends
                </Typography>
                <Typography className={classes.subtitle} variant="h3" align="center">
                    We Can Fully Provide For Your Business
                </Typography>
            </Grid>
            <Grid className={classes.rowContainer} item>
                <Grid className={classes.row} container direction="row" justifyContent="center" alignItems="center">
                    <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                        <div className={classes.background}>
                            <Image
                                placeholder="blur"
                                objectPosition="center center"
                                quality={100}
                                blurDataURL="/e-commerce_10x10.jpeg"
                                src="/e-commerce.jpeg"
                                layout='fill'
                                objectFit='cover'
                                alt="E-Commerce"
                            />
                        </div>
                        <div className={classes.overlay}>
                            <Typography className={classes.overlayText} variant="caption" align="center">
                                E-Commerce
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                        <div className={classes.background}>
                            <Image
                                placeholder="blur"
                                objectPosition="center center"
                                quality={100}
                                blurDataURL="/b2b_10x10.jpeg"
                                src="/b2b.jpeg"
                                layout='fill'
                                objectFit='cover'
                                alt="Business to Business"
                            />
                        </div>
                        <div className={classes.overlay}>
                            <Typography className={classes.overlayText} variant="caption" align="center">
                                Dynamic B2B
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                        <div className={classes.background}>
                            <Image
                                placeholder="blur"
                                objectPosition="center center"
                                quality={100}
                                blurDataURL="/informational_10x10.jpeg"
                                src="/informational.jpeg"
                                layout='fill'
                                objectFit='cover'
                                alt="Informational"
                            />
                        </div>
                        <div className={classes.overlay}>
                            <Typography className={classes.overlayText} variant="caption" align="center">
                                Informational
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                        <div className={classes.background}>
                            <Image
                                placeholder="blur"
                                objectPosition="center bottom"
                                quality={100}
                                blurDataURL="/sales-funnel_10x10.jpeg"
                                src="/sales-funnel.jpeg"
                                layout='fill'
                                objectFit='cover'
                                alt="Sales Funnel"
                            />
                        </div>
                        <div className={classes.overlay}>
                            <Typography className={classes.overlayText} variant="caption" align="center">
                                Sales Funnel
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default WebsitesSection
