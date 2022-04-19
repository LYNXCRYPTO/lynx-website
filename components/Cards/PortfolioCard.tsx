import React from 'react'
import { Theme, makeStyles, useTheme } from "@material-ui/core/styles";
import { IPortfolioContent } from '../../data/PortfolioData'
import { Grid, Typography, Link } from '@material-ui/core';
import Image from "next/image";
import { ArrowForward } from '@material-ui/icons';

interface IProps {
    data: IPortfolioContent;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#FCFCFC",
        borderRadius: 30,
        boxShadow: "0px 6px 12.5px #00000040",
        padding: 24,
        height: 450,
        maxWidth: 400,
        [theme.breakpoints.down("xs")]: {
            borderRadius: 20,
        },
    },
    websitePreviewContainer: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "lightgray",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#0000001A",
        borderStyle: "solid",
        minHeight: 125,
        maxWidth: 400,
        [theme.breakpoints.up(700)]: {
            display: "flex",
        },
        [theme.breakpoints.down(700)]: {
            display: "none",
        },
    },
    websitePreview: {
        borderRadius: 20,
    },
    websitePreviewContainerMobile: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        aspectRatio: "3 / 2",
        backgroundColor: "lightgray",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#0000001A",
        borderStyle: "solid",
        [theme.breakpoints.up(700)]: {
            display: "none",
        },
        [theme.breakpoints.down(700)]: {
            display: "flex",
        },
    },
    websiteTitleContainer: {
        display: "flex",
        alignItems: "center",
    },
    websiteTitle: {
        fontSize: 24,
        fontWeight: 600,
        margin: "24px 0px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 22,
        },
        [theme.breakpoints.between(600, 780)]: {
            fontSize: 17,
        },
    },
    websiteDescriptionContainer: {
        display: "flex",
        alignItems: "flex-start",
        flex: 1,
    },
    websiteDescription: {
        fontSize: 16,
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            fontSize: 15,
        },
        [theme.breakpoints.between(600, 780)]: {
            fontSize: 14,
        },
    },
    websiteLink: {
        color: theme.palette.primary.main,
    },
    websiteLinkText: {
        fontSize: 14,
        fontWeight: 500,
        marginRight: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
}));

const PortfolioCard = (props: IProps) => {

    const classes = useStyles()
    const data = props.data

    return (
        <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", }} item sm={6} xs={12}>
            <Grid className={classes.card} container direction="column" wrap="nowrap">
                <Grid className={classes.websitePreviewContainer} item>
                    <Image
                        className={classes.websitePreview}
                        src={data.previewImg}
                        height="100%"
                        width="500%"
                        objectPosition="bottom center"
                        objectFit="cover"
                        // placeholder="blur"
                        // blurDataURL="/logos/desktop-logo_10x10.png"
                        quality={100}
                        alt='Website Portfolio image desktop'
                    />
                </Grid>
                <Grid className={classes.websitePreviewContainerMobile} item>
                    <Image
                        className={classes.websitePreview}
                        src={data.previewImgMobile}
                        height="100%"
                        width="500%"
                        objectPosition="bottom center"
                        objectFit="cover"
                        // placeholder="blur"
                        // blurDataURL="/logos/desktop-logo_10x10.png"
                        quality={100}
                        alt='Website Portfolio image mobile'
                    />
                </Grid>
                <Grid className={classes.websiteTitleContainer} item>
                    <Typography className={classes.websiteTitle} variant="h5">
                        {data.name}
                    </Typography>
                </Grid>
                <Grid style={{ marginBottom: data.isSiteLive ? 0 : 49 }} className={classes.websiteDescriptionContainer} item>
                    <Typography className={classes.websiteDescription} variant="caption">
                        {data.description}
                    </Typography>
                </Grid>
                <Grid style={{ display: data.isSiteLive ? "block" : "none", marginTop: 24, }} item>
                    <Link rel="noopener" className={classes.websiteLink} href={data.websiteURL} underline="none" target="_blank">
                        <Grid style={{ width: 150, }} container direction="row">
                            <Grid item>
                                <Typography className={classes.websiteLinkText} variant="body2">
                                    Visit Live Site
                                </Typography>
                            </Grid>
                            <Grid item>
                                <ArrowForward className={classes.icon} />
                            </Grid>
                        </Grid>
                    </Link>
                </Grid>
            </Grid >
        </Grid >
    )
}

export default PortfolioCard
