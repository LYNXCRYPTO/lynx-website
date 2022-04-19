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

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        // backgroundColor: theme.palette.primary.main,
        background: "linear-gradient(180deg, rgba(55,123,250,1) 14.29%, rgba(213,109,227,1) 28.57%, rgba(255,110,178,1) 42.86%, rgba(255,147,127,1) 57.14%, rgba(255,110,178,1) 71.42%, rgba(213,109,227,1) 85.71%, rgba(55,123,250,1) 100%);",
        backgroundRepeat: "repeat",
        backgroundPosition: "center bottom",
        [theme.breakpoints.up("md")]: {
            padding: "100px 200px 200px 200px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "100px 75px 200px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "100px 40px 200px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "100px 24px 200px 24px",
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
        [theme.breakpoints.down("xs")]: {
            fontSize: 48,
        },
        [theme.breakpoints.down(320)]: {
            fontSize: 40,
        },
    },
    subtitle: {
        color: "#F8F8F8",
        maxWidth: 900,
        fontSize: 20,
        fontWeight: 400,
        margin: "32px 0px 100px 0px",
        [theme.breakpoints.down("xs")]: {
            fontSize: 18,
        },
        [theme.breakpoints.down(320)]: {
            fontSize: 16,
        },
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
                        Our Portfolio
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.subtitle} variant="body1" align="center">
                        To see us in action, explore our works. Our internationally acclaimed, award-winning projects lift us above the crowd.
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid className={classes.grid} container direction="row" spacing={4}>
                        {portfolio.map((data, index: number) => (
                            <PortfolioCard key={index} data={data} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </section>
    )
}

export default PortfolioSection

