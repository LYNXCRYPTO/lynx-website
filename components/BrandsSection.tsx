import React, { useState } from 'react';
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Link, Typography } from '@material-ui/core';
import Image from "next/image";
import { useRouter } from "next/router";
import QuoteMenu from "./QuoteMenu";

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
        padding: "100px 24px",
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

const BrandsSection = (props: Props) => {
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
                <Grid className={classes.column} container direction="column" wrap="nowrap">
                    <Grid item>
                        <Typography className={classes.title} variant="h4" align="center">
                            Premium Digital Agency Delivering
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.subtitle} variant="h3" align="center">
                            Superior Digital Experiences
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            <div className={classes.container}>
                                <Typography className={classes.description} variant="h4" align="center">
                                    From Start-Ups To Fortune 500, We Partner With Brands Of All Sizes
                                </Typography>
                                <Grid className={classes.grid} container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid className={classes.companyIcon} item>
                                        <Image
                                            objectPosition="center center"
                                            quality={100}
                                            src="/company-logos/walmart.svg"
                                            width={147}
                                            height={35}
                                            objectFit="cover"
                                            alt="Walmart"
                                        />
                                    </Grid>
                                    <Grid className={classes.companyIcon} item>
                                        <Image
                                            objectPosition="center center"
                                            quality={100}
                                            src="/company-logos/pg.svg"
                                            width={76.56}
                                            height={35}
                                            objectFit="cover"
                                            alt="pg company logo"
                                        />
                                    </Grid>
                                    <Grid className={classes.companyIcon} item>
                                        <Image
                                            objectPosition="center center"
                                            quality={100}
                                            src="/company-logos/ibm.svg"
                                            width={87.5}
                                            height={35}
                                            objectFit="cover"
                                            alt="IBM logo"
                                        />
                                    </Grid>
                                    <Grid className={classes.companyIcon} item>
                                        <Image
                                            objectPosition="center center"
                                            quality={100}
                                            src="/company-logos/verizon.svg"
                                            width={154}
                                            height={35}
                                            objectFit="cover"
                                            alt="Verizon logo"
                                        />
                                    </Grid>
                                    <Grid className={classes.companyIcon} item>
                                        <Image
                                            objectPosition="center center"
                                            quality={100}
                                            src="/company-logos/intel.svg"
                                            width={55}
                                            height={35}
                                            objectFit="cover"
                                            alt="Intel logo"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <div className={classes.callToActionContainer}>
                            <Typography className={classes.callToActionText} variant="subtitle1" align="center">
                                We Offer Very Flexible & Competitive Rates To Help Businesses Succeed
                            </Typography>
                            <Button className={classes.callToActionButtonMobile} variant="contained" onClick={toggleDrawer(showQuoteMenu)}>
                                Request A Quote
                            </Button>
                            <Button className={classes.callToActionButton} variant="contained" onClick={() => router.push("/#contact-us")}>
                                Request A Quote
                            </Button>
                        </div>
                    </Grid>
                </Grid >
            </div>
            <QuoteMenu drawerState={showQuoteMenu} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default BrandsSection