import React from 'react'
import { useState, useEffect } from 'react';
import { Theme, makeStyles } from "@material-ui/core/styles";
import PortfolioCard from './Cards/PortfolioCard';
import { Grid, Link, Typography } from '@material-ui/core'
import { ArrowForward, } from "@material-ui/icons";
import {
    PortfolioData,
    IPortfolioData,
    IPortfolioContent,
} from "../data/PortfolioData";

interface Props {

}

const description1 = "Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes."
const description2 = "Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure."
const description3 = "New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake."

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        background: "linear-gradient(180deg, rgba(55,123,250,1) 14.29%, rgba(213,109,227,1) 28.57%, rgba(255,147,127,1) 57.14%, rgba(255,110,178,1) 71.42%, rgba(213,109,227,1) 85.71%, rgba(55,123,250,1) 100%);",
        backgroundRepeat: "repeat",
        backgroundPosition: "center bottom",
        [theme.breakpoints.up("md")]: {
            padding: "100px 0px 200px 0px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "100px 0px 200px 0px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "100px 0px 200px 0px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "100px 0px 200px 0px",
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
            padding: "0px 200px 0px 200px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 75px 0px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px 0px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 48,
            padding: "0px 24px 0px 24px",
        },
    },
    subtitle: {
        color: "#F8F8F8",
        maxWidth: 900,
        fontSize: 20,
        fontWeight: 400,
        [theme.breakpoints.up("md")]: {
            padding: "32px 200px 100px 200px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "32px 75px 100px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "32px 40px 100px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        },
        [theme.breakpoints.down(320)]: {
            fontSize: 16,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 48,
            padding: "32px 24px 100px 24px",
        },
        [theme.breakpoints.down(320)]: {
            fontSize: 40,
        },
    },
    rowItem: {
        maxWidth: 200,
    },
}));

const PortfolioSection = (props: Props) => {

    const classes = useStyles()
    const portfolio = PortfolioData.data;

    return (
        <section id="portfolio">
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
                    <Grid container direction="row" justifyContent="center" alignItems="flex-start">
                        <Grid item sm={4} xs={12}>
                            <Grid className={classes.rowItem} container direction="column">
                                <Grid item>
                                    <Typography>Distributed State Chain</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {description1}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Grid className={classes.rowItem} container direction="column">
                                <Grid item>
                                    <Typography>Proof of Consensus</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {description2}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Grid className={classes.rowItem} container direction="column">
                                <Grid item>
                                    <Typography>Parties</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        {description3}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default PortfolioSection

