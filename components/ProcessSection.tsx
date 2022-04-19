import React from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core'
import { Adjust, TouchApp, LocalFlorist, Edit, Code, Extension, Storage, FlashOn, Pageview, BarChart } from "@material-ui/icons";

interface Props {

}

const description1 = "Creating a beautiful looking interface isn’t the only thing that goes into the design and architecture of a website. Mapping out functionality and optimizing user flow will provide new and returning users with a less stressful experience, ultimately increasing time spent and revenue generated on your website.";
const phase1Details1 = "We strive to provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.";
const phase1Details2 = "Designing a successful website includes anticipating what users might need to do and ensuring that the interface has elements that are easy to access, understand, and use to facilitate those actions.";
const phase1Details3 = "Wireframes, mockups, and prototypes are all provided to our clients in a timely manner. Once finished, clients are able to review our designs and make revisions before we begin the development of the site.";

const description2 = "Programming a website is a highly intensive and demanding process that involves the collaboration of a well-rounded development team. When starting from scratch and using high level programming languages, there are no limits to what content and features can appear on your website.";
const phase2Details1 = "Having a strong codebase that is completely tailored to your business is extremely beneficial for businesses in the long run. Making changes is far more efficient when you have complete control of the code powering your site.";
const phase2Details2 = "Sending and receiving information from other websites and applications is essential for most websites. Integrations like appointment schedulers, payment processors, and content management allows businesses to keep in contact with potential customers.";
const phase2Details3 = "Using Amazon Web Services (AWS), we are able to provide and store customer information safely and securely. Additionally, website hosting is far more simple and powerful than other providers.";

const description3 = "Knowing what’s going on behind the scenes or your well-rounded website is essential for improving traffic. Optimizing site load time and metadata will maximize your website’s exposure to potential customers surfing the web.";
const phase3Details1 = "Waiting a substantial amount of time for a website to load is not a good way to draw in new customers. By optimizing every element and media component on a page, we are able to have your website score high on the Lighthouse Speed Test, ultimately keeping users happy.";
const phase3Details2 = "Maximizing the amount of traffic on your website starts at the base of a website. Having engaging content and optimizing your website’s metadata, we’ll have your website ranking high in search engine results.";
const phase3Details3 = "Key statistics like visitor acquisition, demographics, and page views are essential for growing a website. Keeping track of your site’s analytics can be used to your advantage in order to generate more traffic and revenue for your business.";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#FFF",
        padding: "150px 200px",
        [theme.breakpoints.down("md")]: {
            padding: "150px 75px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "150px 24px",
        },
    },
    phaseSection: {
        margin: "150px 0px",
    },
    phaseDetails: {
        [theme.breakpoints.down("xs")]: {
            padding: "0px 16px",
        },
    },
    phaseCenterDetail: {
        [theme.breakpoints.down("xs")]: {
            margin: "24px 0px",
        },
    },
    phaseIcon: {
        width: 55,
        height: 55,
        marginRight: 16,
        color: theme.palette.primary.main,
        [theme.breakpoints.down(700)]: {
            width: 50,
            height: 50,
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 0,
            width: 55,
            height: 55,
        },
    },
    phaseTitle: {
        marginBottom: 16,
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    title: {
        marginBottom: 4,
        fontSize: 28,
        fontWeight: 600,
        [theme.breakpoints.down(700)]: {
            fontSize: 25,
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            margin: "8px 0px",
        },
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 500,
        color: "#000000A6",
        [theme.breakpoints.down(700)]: {
            fontSize: 17,
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
    },
    description: {
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 64,
        lineHeight: 1.75,
        color: "#00000099",
        [theme.breakpoints.down(700)]: {
            fontSize: 16,
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
    },
    detailIcon: {
        width: 45,
        height: 45,
    },
    detailTitle: {
        fontSize: 22,
        fontWeight: 500,
        color: theme.palette.primary.dark,
        margin: "8px 0px",
    },
    detailCaption: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.75,
    },
}));

const ProcessSection = (props: Props) => {

    const classes = useStyles()

    return (
        <Grid className={classes.root} container direction="column">
            <Grid item>
                <Grid container direction="column">
                    <Grid id="design" item>
                        <Grid className={classes.phaseTitle} container direction="row" alignItems="center">
                            <Grid style={{ display: "flex", alignItems: "center" }} item>
                                <Adjust className={classes.phaseIcon} />
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" wrap="nowrap" >
                                    <Typography className={classes.title} variant="h5">
                                        Phase I
                                    </Typography>
                                    <Typography className={classes.subtitle} variant="subtitle1">
                                        Designing an interactive and user-friendly interface
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.description} variant="body1">
                            {description1}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.phaseDetails} container direction="row" spacing={4}>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <TouchApp className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailTitle} variant="subtitle1">
                                            Interactive Experience
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase1Details1}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid className={classes.phaseCenterDetail} container direction="column">
                                    <Grid item>
                                        <LocalFlorist className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailTitle} variant="subtitle1">
                                            Beautiful Interface
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase1Details2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Edit className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailTitle} variant="subtitle1">
                                            Client Revisions
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase1Details3}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* #D56DE3 */}
            <Grid id="development" item>
                <Grid style={{ margin: "150px 0px", }} container direction="column">
                    <Grid item>
                        <Grid className={classes.phaseTitle} container direction="row" alignItems="center">
                            <Grid style={{ display: "flex", alignItems: "center" }} item>
                                <Adjust style={{ color: "#D56DE3", }} className={classes.phaseIcon} />
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" wrap="nowrap" >
                                    <Typography className={classes.title} variant="h5">
                                        Phase II
                                    </Typography>
                                    <Typography className={classes.subtitle} variant="subtitle1">
                                        Developing a completely custom and functional website
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.description} variant="body1">
                            {description2}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.phaseDetails} container direction="row" spacing={4}>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Code className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#D56DE3", }} className={classes.detailTitle} variant="subtitle1">
                                            Custom Code
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase2Details1}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid className={classes.phaseCenterDetail} container direction="column">
                                    <Grid item>
                                        <Extension className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#D56DE3", }} className={classes.detailTitle} variant="subtitle1">
                                            Advanced Integrations
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase2Details2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Storage className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#D56DE3", }} className={classes.detailTitle} variant="subtitle1">
                                            Powerful Backend
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase2Details3}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* #FF8A2E */}
            <Grid id="optimization" item>
                <Grid container direction="column">
                    <Grid item>
                        <Grid className={classes.phaseTitle} container direction="row" alignItems="center">
                            <Grid style={{ display: "flex", alignItems: "center" }} item>
                                <Adjust style={{ color: "#FF8A2E", }} className={classes.phaseIcon} />
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" wrap="nowrap" >
                                    <Typography className={classes.title} variant="h5">
                                        Phase III
                                    </Typography>
                                    <Typography className={classes.subtitle} variant="subtitle1">
                                        Optimizing website performance and visibility
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.description} variant="body1">
                            {description3}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.phaseDetails} container direction="row" spacing={4}>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <FlashOn className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#FF8A2E", }} className={classes.detailTitle} variant="subtitle1">
                                            Performance Speeds
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase3Details1}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid className={classes.phaseCenterDetail} container direction="column">
                                    <Grid item>
                                        <Pageview className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#FF8A2E", }} className={classes.detailTitle} variant="subtitle1">
                                            Search Engine Optimization
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase3Details2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <BarChart className={classes.detailIcon} />
                                    </Grid>
                                    <Grid item>
                                        <Typography style={{ color: "#FF8A2E", }} className={classes.detailTitle} variant="subtitle1">
                                            Data Analysis
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.detailCaption} variant="body1">
                                            {phase3Details3}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProcessSection
