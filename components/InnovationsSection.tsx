import React from 'react'
import { useState, useEffect } from 'react';
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from '@material-ui/core'
import Image from "next/image";

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        background: "linear-gradient(180deg, rgba(55,123,250,1) 14.29%, rgba(213,109,227,1) 28.57%, rgba(255,147,127,1) 57.14%, rgba(255,110,178,1) 71.42%, rgba(213,109,227,1) 85.71%, rgba(55,123,250,1) 100%);",
        backgroundRepeat: "repeat",
        backgroundPosition: "center bottom",
        [theme.breakpoints.up("md")]: {
            padding: "25px 0px 100px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "25px 0px 100px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "100px 0px 100px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "100px 0px 100px",
        },
    },
    grid: {
        rowGap: 10,
        [theme.breakpoints.down(700)]: {
            rowGap: 4,
        },
    },
    title: {
        color: "#FFF",
        fontSize: 64,
        fontWeight: 600,
        [theme.breakpoints.down(320)]: {
            fontSize: 40,
        },
        [theme.breakpoints.up("md")]: {
            padding: "0px 200px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 48,
            padding: "0px 24px",
        },
        [theme.breakpoints.down(375)]: {
            fontSize: 40,
            padding: "0px 16px",
        },
    },
    subtitle: {
        color: "#F8F8F8",
        maxWidth: 900,
        fontSize: 20,
        fontWeight: 400,
        [theme.breakpoints.up("md")]: {
            padding: "32px 200px 100px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "32px 75px 100px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "32px 40px 100px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        },
        [theme.breakpoints.down(320)]: {
            fontSize: 16,
        },
        [theme.breakpoints.down("xs")]: {
            padding: "32px 24px 100px",
        },
    },
    row: {
        padding: "0px 24px",
        [theme.breakpoints.down("xs")]: {
            padding: "0px 16px",
        },
    },
    innovationCard: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        height: 350,
        maxWidth: 350,
        minWidth: 250,
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        transition: "transfrom borderWidth borderRadius .3s",
        transform: "scale(1.0)",
        "&:hover": {
            transform: "scale(1.05)",
            borderRadius: 5,
            borderWidth: 2.0,
        },
    },
    innovationImage: {
        display: "flex",
        flex: 1,
        transition: "borderRadius .3s",
        "&:hover": {
            borderRadius: 5,
        },
    },
    innovationTitle: {
        height: 60,
        color: "black",
        backgroundColor: "#0000001A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
    },
}));

const InnovationsSection = (props: Props) => {

    const classes = useStyles()

    return (
        <section id="innovations">
            <Grid className={classes.root} container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h3" align="center">
                        Powering the Lynx Network
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.subtitle} variant="body1" align="center">
                        The Lynx Protocol has developed three main innovations to further improve the current blockchain standard.
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid className={classes.row} container direction="row" justifyContent="center" alignItems="flex-start" spacing={4}>
                        <Grid item md={4}>
                            <Link href="" underline="none">
                                <div className={classes.innovationCard}>
                                    <Grid container direction="column" wrap="nowrap">
                                        <div className={classes.innovationImage}>
                                            <Image src="/isometric-imgs/distributed-state-chain.svg" height={290} width={350} draggable="false" />
                                        </div>
                                        <Typography className={classes.innovationTitle} variant="subtitle1" align="center">Distributed State Chain</Typography>
                                    </Grid>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Link href="" underline="none">
                                <div className={classes.innovationCard}>
                                    <Grid container direction="column" wrap="nowrap">
                                        <div className={classes.innovationImage}>
                                            <Image src="/isometric-imgs/proof-of-consensus.svg" height={290} width={350} draggable="false"/>
                                        </div>
                                        <Typography className={classes.innovationTitle} variant="subtitle1" align="center">Proof of Consensus</Typography>
                                    </Grid>
                                </div>
                            </Link>
                        </Grid>
                        <Grid item md={4}>
                            <Link href="" underline="none"> 
                                <div className={classes.innovationCard}>
                                    <Grid container direction="column" wrap="nowrap">
                                        <div className={classes.innovationImage}>
                                            <Image src="/isometric-imgs/parties.svg" height={290} width={350} draggable="false"/>
                                        </div>
                                        <Typography className={classes.innovationTitle} variant="subtitle1" align="center">Application Specific Subnetworks</Typography>
                                    </Grid>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default InnovationsSection

