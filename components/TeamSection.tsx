import React, { useState } from 'react';
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Link, Typography } from '@material-ui/core';
import Image from "next/image";
import { useRouter } from "next/router";
import QuoteMenu from "./QuoteMenu";
import { LanguageOutlined } from "@material-ui/icons";

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#FFF",
        position: "relative",
        height: 900,
        [theme.breakpoints.down("xs")]: {
            height: 800,
        },
    },
    topBackground: {
        // zIndex: 1,
        overflow: "hidden",
        position: "relative",
        height: 600,
        [theme.breakpoints.down("xs")]: {
            height: 800,
        },
    },
    topBackgroundOverlay: {
        backgroundImage: "url('scenes/half-blob-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        transform: "scaleY(-1)",
        height: "101%",
        width: "100%",
        position: "absolute",
        top: "-0.5%",
        [theme.breakpoints.down("xs")]: {
            backgroundImage: "url('scenes/half-blob-scene-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
        },
    },
    bottomBackground: {
        // zIndex: 2,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 300,
        backgroundImage: "url('scenes/wave-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        filter: "brightness(0) saturate(100%) invert(14%) sepia(79%) saturate(5463%) hue-rotate(250deg) brightness(89%) contrast(96%);",
    },
    column: {
        display: "flex",
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // zIndex: 3,
        height: 900,
        padding: "50px 24px",
        [theme.breakpoints.down("xs")]: {
            padding: "100px 16px",
            height: 1000,
        },
    },
    title: {
        fontSize: 32,
        marginBottom: 8,
        color: theme.palette.primary.dark,
        [theme.breakpoints.down("xs")]: {
            fontSize: 28,
        },
    },
    subtitle: {
        color: "#000",
        fontSize: 48,
        [theme.breakpoints.down("sm")]: {
            fontSize: 40,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 32,
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFF",
        maxWidth: 1455,
        padding: 24,
        margin: "40px 0px 64px 0px",
        boxShadow: "0px 6px 12.5px #00000040",
        [theme.breakpoints.down("xs")]: {
            margin: "24px 0px",
            maxHeight: 400,
        },
    },
    grid: {
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "space-evenly",
            gap: 8,
        },
    },
    description: {
        fontSize: 28,
        fontWeight: 500,
        color: "#000",
        marginBottom: 32,
        [theme.breakpoints.down("xs")]: {
            fontSize: 24,
            marginBottom: 16,
        },
    },
    companyIcon: {
        height: 35,
        margin: "8px 16px",
        [theme.breakpoints.down("xs")]: {
            height: 20,
            margin: 8,
        },
    },
    callToActionContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    callToActionText: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 24,
        [theme.breakpoints.down("xs")]: {
            fontSize: 16,
        },
    },
    callToActionButton: {
        color: "#FFF",
        height: 60,
        width: 250,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 20,
        fontWeight: 600,
        textTransform: "none",
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 5px #00000040",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        [theme.breakpoints.up("xs")]: {
            display: "block",
        },
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    callToActionButtonMobile: {
        color: "#FFF",
        height: 60,
        width: 250,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 20,
        fontWeight: 600,
        textTransform: "none",
        background: theme.palette.primary.main,
        boxShadow: "0px 3px 5px #00000040",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        [theme.breakpoints.up("xs")]: {
            display: "none",
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            height: 50,
            width: 200,
        },
    },
}));

const TeamSection = (props: Props) => {
    const classes = useStyles()
    const router = useRouter();
    const [showQuoteMenu, setShowQuoteMenu] = useState(false);

    const toggleDrawer = (toggle: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        setShowQuoteMenu(!toggle);
    };

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.topBackground}>
                    <div className={classes.topBackgroundOverlay} />
                </div>
                <div className={classes.bottomBackground} />
                <Grid className={classes.column} container direction="column" alignItems="center" wrap="nowrap">
                    <Grid item>
                        <Typography className={classes.title} variant="h4" align="center">
                            An Open Source Protocol
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subtitle} variant="h3" align="center">
                            Built For Everyone
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Image
                            src="/isometric-imgs/team.svg"
                            width={366.38}
                            height={400}
                            objectFit="fill"
                            // placeholder="blur"
                            // blurDataURL="/logos/desktop-logo_10x10.png"
                            quality={100}
                            alt='Web image'
                            draggable={false}
                        />
                    </Grid>
                    <Grid item>
                        <div className={classes.callToActionContainer}>
                            <Typography className={classes.callToActionText} variant="subtitle1" align="center">
                                Help Us Shape The Future Of The Internet
                                </Typography>
                            <Button className={classes.callToActionButtonMobile} variant="contained" onClick={toggleDrawer(showQuoteMenu)}>
                                Join Our Team
                                </Button>
                            <Button className={classes.callToActionButton} variant="contained" onClick={toggleDrawer(showQuoteMenu)}>
                                Join Our Team
                                </Button>
                        </div>
                    </Grid>
                </Grid >
            </div>
            <QuoteMenu drawerState={showQuoteMenu} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default TeamSection