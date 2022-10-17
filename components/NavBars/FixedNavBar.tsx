import React, { useState } from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, IconButton, Link } from '@material-ui/core'
import { Menu } from "@material-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import SideMenu from '../SideMenu';


interface Props {
    isOpaque?: boolean,
}

const useStyles = makeStyles((theme: Theme) => ({
    fixedNavBar: {
        height: 90,
        width: "100%",
        padding: "0px 32px",
        [theme.breakpoints.down("sm")]: {
            padding: "0px 16px",
        },
    },
    opaqueFixedNavBar: {
        height: 90,
        width: "100%",
        padding: "0px 32px",
        backgroundColor: "#FFF",
        [theme.breakpoints.down("sm")]: {
            padding: "0px 16px",
        },
    },
    desktopNavBar: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    mobileMenuButton: {
        height: 30,
        width: 30,
        color: "white",
        display: "block",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    buttonContainer: {
        display: "block",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    logo: {
        display: "flex",
        flex: 1,
        justifyContent: 'flex-start',
        [theme.breakpoints.down("xs")]: {
            maxWidth: "75%",
            marginTop: 5
        },
    },
    navBarLink: {
        color: "#FFF",
        padding: "0px 16px",
        fontWeight: 500,
        textShadow: "0px 2px 5px #00000040",
    },
    opaqueNavBarLink: {
        color: "#000",
        padding: "0px 16px",
        fontWeight: 500,
    },
    navBarButton: {
        backgroundColor: theme.palette.primary.light,
        color: '#FFF',
        padding: "0px 8px",
        justifyContent: "center",
        height: 45,
        width: 120,
        marginLeft: 16,
        textTransform: "none",
        boxShadow: "0px 3px 5px #00000040",
        borderRadius: 25,
        fontWeight: 600,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

const FixedNavBar = (props: Props) => {

    const classes = useStyles();
    const router = useRouter();
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (toggle: boolean, isDrawer: boolean = true) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setDrawerState(!toggle);
    };

    return (
        <div>
            <Grid
                className={props.isOpaque ? classes.opaqueFixedNavBar : classes.fixedNavBar}
                // style={{backgroundColor: props.isOpaque ? "white" : "transparent"}}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid className={classes.logo} item>
                    {props.isOpaque ? (<Link rel="noopener" href="/" underline="none">
                        <Image
                            src="/logos/logo-blue.svg"
                            width={225}
                            height={60}
                            objectFit="fill"
                            loading="eager"
                            quality={100}
                            alt='Lynx logo white' />
                    </Link>) : (<Link rel="noopener" href="/" underline="none">
                        <Image
                            src="/logos/logo-white.svg"
                            width={225}
                            height={60}
                            objectFit="fill"
                            objectPosition="left center"
                            loading="eager"
                            quality={100}
                            alt='Lynx logo white' />
                    </Link>)}
                </Grid>
                <Grid item>
                    <Grid
                        className={classes.desktopNavBar}
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        {/* <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/#services" underline="none">
                                Introduction
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/" underline="none">
                                Home
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/whitepaper" underline="none">
                                Whitepaper
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/#join-the-community" underline="none">
                                Join The Community
                            </Link>
                        </Grid>
                        {/* <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/process" underline="none">
                                Innovation
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/process" underline="none">
                                Participate
                            </Link>
                        </Grid> */}
                        {/* <Grid item>
                            <Link rel="noopener" className={props.isOpaque ? classes.opaqueNavBarLink : classes.navBarLink} variant="body1" href="/contact" underline="none">
                                FAQ
                            </Link>
                        </Grid> */}
                    </Grid>
                </Grid>
                <Grid className={classes.buttonContainer} item>
                    <IconButton onClick={toggleDrawer(drawerState)}>
                        <Menu className={classes.mobileMenuButton} />
                    </IconButton>
                </Grid>
            </Grid>
            <SideMenu drawerState={drawerState} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default FixedNavBar
