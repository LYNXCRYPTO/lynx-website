import React from 'react'
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Container, Button } from '@material-ui/core'
import Image from "next/image";
import { useRouter } from "next/router";
import FadeInSection from './Util/FadeInSection';

interface Props {

}

const description1 = "Completely custom UI/UX design with client input to perfectly capture your brand’s online presence. We create engaging user experiences that are as strong as the technology behind them. We approach user interface design from a consumer-first perspective, putting users at the heart of the products we create."
const description2 = "Developing a successful digital product is a complex process that requires a significant amount of time applying innovative solutions, and following reliable processes. Using a streamlined and efficient development process we are able to implement beautiful and responsive user interfaces that are highly-interactive."
const description3 = "Improving application exposure and increasing traffic is essential for surpassing competition. Using comprehensive analytics and optimizing application processes, we are able to increase your website's exposure on search engines to help you generate more revenue."

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
            padding: "0px 200px",
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
            padding: "0px 200px",
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
            padding: "0px 200px",
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
                                            Expert User Interface Design
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description1}
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#design")}>
                                            Learn More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.imgSubsection} item sm={6} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/design.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='design aspect image'
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
                            <Grid style={{ transform: "scaleY(-1) scaleX(-1)", }} className={classes.imgSubsection} item sm={6} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/coding.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        loading="eager"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='female coding image'
                                    />
                                </FadeInSection>

                            </Grid>
                            <Grid style={{ transform: "scaleY(-1)" }} className={classes.descriptionSubsection} item sm={6} xs={12}>
                                <Grid container direction="column" justifyContent="center">
                                    <Grid item>
                                        <Typography className={classes.title} variant="h3">
                                            Superior Development Process
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description2}
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#development")}>
                                            Learn More
                                        </Button>
                                    </Grid>
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
                                            Results Driven Optimization
                                        </Typography>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "center", }} item>
                                        <Typography className={classes.description} variant="body1">
                                            {description3}
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.learnMoreButtonContainer} item>
                                        <Button className={classes.learnMoreButton} onClick={() => router.push("/process/#optimization")}>
                                            Learn More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.imgSubsection} item sm={6} xs={12}>
                                <FadeInSection>
                                    <Image
                                        src="/isometric-imgs/seo.svg"
                                        width={366.38}
                                        height={400}
                                        objectFit="fill"
                                        // placeholder="blur"
                                        // blurDataURL="/logos/desktop-logo_10x10.png"
                                        quality={100}
                                        alt='SEO optimization image'
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
