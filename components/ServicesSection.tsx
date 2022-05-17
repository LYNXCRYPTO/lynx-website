import React from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Container, Button } from '@material-ui/core'
import Image from "next/image";
import { useRouter } from "next/router";
import FadeInSection from './Util/FadeInSection';

interface Props {

}

const description1 = "Currently, millions of people are unable to participate in blockchain applications due to several financial and technological discrepancies. The Lynx Network allows for everyone to be involved no matter what device they use. With just an Internet connection, anyone can browse a genuinely decentralized Internet while keeping the network safe and secure."
const description2 = "Lynx isn’t just a currency, it’s a virtual economy. Lend your local computing power to others on the Lynx Network and get paid. Create, trade, and utilize any digital good you can imagine with a plethora of applications hosted on Lynx. The possibilities are endless when you are in charge of your own reality."
const description3 = "You have entered a new frontier for decentralized applications. Develop user-focused applications with custom integrations and parameters. In addition to financial (DeFi), semi-financial, and governance applications, Lynx can support all types of apps related to gaming, live streaming, and a whole lot more."

const useStyles = makeStyles((theme: Theme) => ({
    section: {
        height: 600,
        overflow: "hidden",
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: 800,
        },
    },
    topSectionOverlay: {
        backgroundColor: "white",
        backgroundImage: "url('scenes/half-blob-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        padding: "0px 75px",
        height: "101%",
        width: "100%",
        position: "absolute",
        bottom: "-0.5%",
        [theme.breakpoints.up("md")]: {
            padding: "0px 150px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "100px 16px",
            backgroundImage: "url('scenes/half-blob-scene-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
        },
    },
    middleSectionOverlay: {
        backgroundColor: "white",
        backgroundImage: "url('scenes/blob-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        transform: "scaleY(-1)",
        padding: "0px 75px",
        height: "101%",
        width: "100%",
        position: "absolute",
        top: "-0.5%",
        [theme.breakpoints.up("md")]: {
            padding: "0px 150px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "0px 16px",
            backgroundImage: "url('scenes/blob-scene-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
            transform: "scaleY(-1)",
        },
        display: "flex",
    },
    bottomSectionOverlay: {
        backgroundColor: "white",
        backgroundImage: "url('scenes/blob-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        padding: "0px 75px",
        height: "101%",
        width: "100%",
        position: "absolute",
        top: "-0.5%",
        [theme.breakpoints.up("md")]: {
            padding: "0px 150px",
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 75px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 40px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "100px 16px",
            backgroundImage: "url('scenes/blob-scene-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
            backgroundSize: "cover",
        },
    },
    row: {
        flexDirection: "row",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    descriptionSubsection: {
        display: "flex",
        justifyContent: "center",
        height: 600,
        [theme.breakpoints.down("xs")]: {
            height: 300,
        },
    },
    imgSubsection: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 600,
        [theme.breakpoints.down("xs")]: {
            height: 300,
            maxWidth: 250,
        },
    },
    title: {
        [theme.breakpoints.up("xs")]: {
            fontSize: 36,
            fontWeight: 600,
            textAlign: "left",
        },
        [theme.breakpoints.between(600, 800)]: {
            fontSize: 28,
            textAlign: "left",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 16,
            fontSize: 28,
            textAlign: "center",
        },
    },
    description: {
        color: "#080808",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 2.0,
        margin: "24px 0px",
        [theme.breakpoints.up("xs")]: {
            fontSize: 16,
            fontWeight: 400,
            textAlign: "left",
        },
        [theme.breakpoints.between(600, 720)]: {
            fontSize: 13,
            textAlign: "left",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 14,
            textAlign: "center",
            maxWidth: 325,
        },
    },
    learnMoreButtonContainer: {
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("xs")]: {
            justifyContent: "center",
        },

    },
    learnMoreButton: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFF",
        height: 45,
        width: 125,
        textTransform: "none",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const ServicesSection = (props: Props) => {

    const classes = useStyles()
    const router = useRouter();

    const handleDesignClick = () => {
        router.push("/process/#design");
    };

    const handleDevelopmentClick = () => {
        router.push("/process/#development");
    };

    const handleOptimizationClick = () => {
        router.push("/process/#optimization");
    };

    return (
        <Grid container direction="column">
            <Grid className={classes.section} item>
                <div className={classes.topSectionOverlay}>
                    <Container maxWidth={'xl'}>
                        <Grid className={classes.row} container direction="row" justifyContent="center" spacing={2}>
                            <Grid className={classes.descriptionSubsection} item sm={6} xs={12}>
                                <Grid container direction="column" justifyContent="center">
                                    <Grid item>
                                        <Typography className={classes.title} variant="h3">
                                        An Internet Accessible To Everyone
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description1}
                                        </Typography>
                                    </Grid>
                                    {/* <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#design")}>
                                            Learn More
                                        </Button>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                            <Grid className={classes.imgSubsection} item sm={6} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/web.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='Web image'
                                        draggable={false}
                                    />
                                </FadeInSection>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Grid>
            <Grid className={classes.section} item>
                <div className={classes.middleSectionOverlay}>
                    <Container style={{ display: "flex", alignItems: "center" }} maxWidth={'xl'}>
                        <Grid className={classes.row} container direction="row" justifyContent="center" spacing={2}>
                            <Grid style={{ transform: "scaleY(-1) scaleX(-1)", }} className={classes.imgSubsection} item sm={5} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/business.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        loading="eager"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='IoE image'
                                        draggable={false}
                                    />
                                </FadeInSection>
                            </Grid>
                            <Grid item sm={2}/>
                            <Grid style={{ transform: "scaleY(-1)" }} className={classes.descriptionSubsection} item sm={5} xs={12}>
                                <Grid container direction="column" justifyContent="center">
                                    <Grid item>
                                        <Typography className={classes.title} variant="h3">
                                            The Internet of Everything
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description2}
                                        </Typography>
                                    </Grid>
                                    {/* <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#development")}>
                                            Learn More
                                        </Button>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Grid>
            <Grid className={classes.section} item >
                <div className={classes.bottomSectionOverlay}>
                    <Container maxWidth={'xl'}>
                        <Grid className={classes.row} container direction="row" justifyContent="center" spacing={2}>
                            <Grid className={classes.descriptionSubsection} item sm={6} xs={12}>
                                <Grid container direction="column" justifyContent="center">
                                    <Grid item>
                                        <Typography className={classes.title} variant="h3">
                                            Applications Just For You
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description3}
                                        </Typography>
                                    </Grid>
                                    {/* <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#optimization")}>
                                            Learn More
                                        </Button>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                            <Grid className={classes.imgSubsection} item sm={6} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/coding.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='Applications image'
                                        draggable={false}
                                    />
                                </FadeInSection>
                            </Grid>
                        </Grid>
                    </Container >
                </div>
            </Grid>
        </Grid >
    )
}

export default ServicesSection
