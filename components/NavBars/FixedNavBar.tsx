import React, { useState } from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, IconButton, Link } from '@material-ui/core'
import { Menu } from "@material-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import SideMenu from '../SideMenu';


interface Props {

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
        flex: 1,
        [theme.breakpoints.down("xs")]: {
            maxWidth: "75%",
            marginTop: 5
        },
    },
    navBarLink: {
        color: "#fff",
        padding: "0px 16px",
        fontWeight: 500,
        textShadow: "0px 2px 5px #00000040",
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
                className={classes.fixedNavBar}
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid className={classes.logo} item>
                    <Link rel="noopener" href="/" underline="none">
                        <Image
                            src="/logos/logo-white.svg"
                            width={279.9}
                            height={63.9}
                            objectFit="fill"
                            loading="eager"
                            quality={100}
                            alt='Protocoding logo white' />
                    </Link>
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
                        <Grid item>
                            <Link rel="noopener" className={classes.navBarLink} variant="body1" href="/#services" underline="none">
                                Our Services
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link rel="noopener" className={classes.navBarLink} variant="body1" href="/#portfolio" underline="none">
                                Our Portfolio
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link rel="noopener" className={classes.navBarLink} variant="body1" href="/process" underline="none">
                                Our Process
                            </Link>
                        </Grid>
                        {/* <Grid item>
                      <Button
                        variant="contained"
                        className={classes.playVideoButton}
                        startIcon={<PlayArrow className={classes.playIcon} />}
                      >
                        Watch Video
                      </Button>
                    </Grid> */}
                        <Grid item>
                            <Button color="secondary" onClick={() => router.push("/contact")} className={classes.navBarButton}>Contact Us</Button>
                        </Grid>
                    </Grid>
                    {/* <Grid item>
                  <Button
                    variant="contained"
                    className={classes.playVideoButton}
                    startIcon={<PlayArrow className={classes.playIcon} />}
                  >
                    Watch Video
                  </Button>
                </Grid>
                <Grid item>
                  <Link href="/#contact-us">
                    <Button className={classes.navBarButton}>Contact Us</Button>
                  </Link>
                </Grid> */}
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
