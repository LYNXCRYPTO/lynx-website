import React, { useEffect, useState } from 'react';
import { Theme, makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Grid, IconButton, Link, List, Toolbar, Typography } from '@material-ui/core';
import Image from "next/image";
import { useRouter } from "next/router";
import { PlayArrow, Menu } from "@material-ui/icons";
import styles from '../../styles/NavBar.module.css';
import SideMenu from '../SideMenu';

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
    desktopOnly: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    mobileOnly: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    mobileMenu: {
        padding: 10
    },
    floatingMenu: {
        height: 90,
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 32px",
        [theme.breakpoints.down("sm")]: {
            padding: "0px 16px",
        },
    },
    navBarLink: {
        color: "#fff",
        padding: "0px 16px",
        fontWeight: 500,
        textShadow: "0px 2px 5px #00000040",
    },
    navBarLinkFloatinNav: {
        color: "#000",
        padding: "0px 16px",
        fontWeight: 500,
        // textShadow: "0px 2px 5px #00000040",
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
    callToActionRow: {
        justifyContent: "flex-start",
        [theme.breakpoints.down(470)]: {
            justifyContent: "center",
        },
    },
    callToActionButton: {
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
        backgroundColor: "#FFF",
        padding: "0px 8px",
        justifyContent: "center",
        height: 60,
        width: 250,
        fontSize: 20,
        textTransform: "none",
        // boxShadow: "0px 3px 5px #00000040",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
        transform: "scale(1)",
        animation: "pulse-white 3s infinite 1s",
        "&:hover": {
            backgroundColor: "#F4F4F4",
        },
        [theme.breakpoints.down(470)]: {
            height: 50,
            width: 200,
        },
    },
    fixedNavBar: {
        height: 70,
        padding: "0px 32px",
        [theme.breakpoints.down(375)]: {
            padding: "0px 16px",
        },
    },
    mobileMenuButton: {
        height: 30,
        width: 30,
        display: "block",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    mobileNavContainer: {
        [theme.breakpoints.down("md")]: {
            display: "flex",
        },
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    logoContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "75%",
        },
    },
    linkContainer: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    playIcon: {
        width: 27.5,
        height: 27.5,
        filter: "drop-shadow(0px 2px 5px #00000040);",
        [theme.breakpoints.down(470)]: {
            height: 25,
            width: 25,
        },
    },
    playVideoButton: {
        color: "#000",
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "0px 8px",
        justifyContent: "center",
        height: 45,
        width: 145,
        fontSize: 16,
        textTransform: "none",
        fontWeight: 500,

        [theme.breakpoints.down(780)]: {
            height: 40,
            width: 140,
            fontSize: 14,
        },
    },
}));

const NavBar = (props: Props) => {
    const classes = useStyles()
    const router = useRouter();
    const [showAppBar, setshowAppBar] = useState(false);
    const [firstFadeState, setfirstFadeState] = useState(false);

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

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = (event: any) => {
        if (window.scrollY >= 300) {
            if (!firstFadeState) {
                setfirstFadeState(true)
            }
            setshowAppBar(true);
        } else {
            setshowAppBar(false);
        }
    };


    return (
        <Grid >
            {
                firstFadeState && (
                    <AppBar
                        position="fixed"
                        elevation={24}
                        className={`${showAppBar ? styles.backgroundAnimated : styles.fadeOut} ${classes.floatingMenu}`}
                    >
                        <Toolbar style={{ width: "100%", padding: 0, }}>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                {/* <Grid style={{ flex: 1 }} className={classes.mobileNavContainer} item>
                                    <Image
                                        src="/logos/logo-blue.svg"
                                        width={200}
                                        height={50}
                                        objectFit="fill"
                                        loading="eager"
                                        onClick={() => window?.scrollTo(0, 0)}
                                        quality={85} />
                                </Grid> */}
                                <Grid className={classes.logoContainer} item>
                                    <Link rel="noopener" href="/" underline="none">
                                        <Image
                                            src="/logos/logo-blue.svg"
                                            width={279.9}
                                            height={63.9}
                                            objectFit="fill"
                                            loading="eager"
                                            onClick={() => window.scrollTo(0, 0)}
                                            quality={85}
                                            alt='Protocoding logo blue' />
                                    </Link>
                                </Grid>
                                <Grid className={classes.linkContainer} item>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid item>
                                            <Link rel="noopener" className={classes.navBarLinkFloatinNav} variant="body1" href="/#services" underline="none">
                                                Introduction
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link rel="noopener" className={classes.navBarLinkFloatinNav} variant="body1" href="/whitepaper" underline="none">
                                                Whitepaper
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link rel="noopener" className={classes.navBarLinkFloatinNav} variant="body1" href="/process" underline="none">
                                                Innovation
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link rel="noopener" className={classes.navBarLinkFloatinNav} variant="body1" href="/process" underline="none">
                                                Participate
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link rel="noopener" className={classes.navBarLinkFloatinNav} variant="body1" href="/process" underline="none">
                                                FAQ
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.mobileNavContainer} item>
                                    <IconButton onClick={toggleDrawer(drawerState)}>
                                        <Menu className={classes.mobileMenuButton} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                )
            }
            <SideMenu drawerState={drawerState} toggleDrawer={toggleDrawer} />
        </Grid >
    )
}

export default NavBar