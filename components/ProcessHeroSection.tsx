import React, { useState } from "react";
import { Button, Grid, IconButton, Link, Typography } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { PlayArrow, Menu } from "@material-ui/icons";
import SideMenu from './SideMenu';
import Image from "next/image";
import { useRouter } from "next/router";
import QuoteMenu from "./QuoteMenu";
import styles from '../styles/util.module.css';
import FixedNavBar from "./NavBars/FixedNavBar";


interface Props { }

const title = "Seamless Pre-Production and Development Process";
const subtitle = "Our streamlined process enable businesses have complete control over the design and development of their website. Offering client input and revisions, we strive to deliver the best product within a timely manner.";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 600,
    // Primary Light Theme Color With 50% Opacity
    //backgroundColor: "#6398FB",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
    background: "linear-gradient(90deg, rgba(255,147,127,1) 0%, rgba(255,110,178,1) 25%, rgba(213,109,227,1) 50%, rgba(55,123,250,1) 75%, rgba(6,86,234,1) 100%);",
    display: "flex",
    // jusitfyContent: "flex-end",
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    position: "relative",
    zIndex: 1,
  },
  shape: {
    display: "flex",
    width: "100%",
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    height: "100%",
  },
  overlay: {
    height: "100%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  textColumn: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    marginLeft: 40,
    [theme.breakpoints.down(700)]: {
      justifyContent: "flex-start",
      marginLeft: 0,
    },
  },
  title: {
    color: "#FFF",
    fontSize: 48,
    fontWeight: 600,
    textShadow: "0px 3px 5px #00000040",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 34,
      textAlign: "center",
    },
    [theme.breakpoints.down(700)]: {
      fontSize: 30,
      textAlign: "center",
    },
    [theme.breakpoints.down(470)]: {
      fontSize: 28,
      textAlign: "center",
    },
    [theme.breakpoints.down(350)]: {
      fontSize: 22,
      textAlign: "center",
    },
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: "#F8F8F8",
    margin: "24px 0px",
    lineHeight: 2.0,
    textShadow: "0px 2px 5px #00000080",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      textAlign: "center",
    },
    [theme.breakpoints.down(470)]: {
      fontSize: 14,
      textAlign: "center",
    },
    [theme.breakpoints.down(350)]: {
      fontSize: 12,
      textAlign: "center",
    },
  },
  mockups: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    transform: "scaleX(-1)",
    minWidth: 400,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
      maxWidth: 250,
      minWidth: 0,
    },
  },
  bannerContent: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "yellow",
    padding: "0px 75px",
    [theme.breakpoints.down(700)]: {
      padding: "0px 24px",
    },
  },
  stretch: {
    height: "100%",
    flexDirection: "row",
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      padding: "24px 0px 100px 0px",
    },
  },
}));

const ProcessHeroSection = (props: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const [drawerState, setDrawerState] = useState(false);
  const [showQuoteMenu, setShowQuoteMenu] = useState(false);

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
    if (drawerState) {

    }

    if (isDrawer) {
      setDrawerState(!toggle);
    } else {
      setShowQuoteMenu(!toggle);
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.shape} >
          <Image
            src="/scenes/layered-waves.svg"
            objectPosition="bottom center"
            objectFit="cover"
            layout="fill"
            loading="eager"
            quality={100}
            alt='layered waves' />
        </div>

        <Grid
          className={classes.overlay}
          container
          direction="column"
          justifyContent="flex-start"
          wrap="nowrap"
        >
          <FixedNavBar />
          <Grid className={classes.bannerContent} item>
            <Grid
              className={classes.stretch}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid className={classes.mockups} item md={6} sm={12}>
                <Image src="/isometric-imgs/start-up.svg" width={396.2} height={400} alt="Website startup image" />
              </Grid>
              <Grid className={classes.textColumn} item md={6} sm={12}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                >
                  <Grid item >
                    <Typography className={classes.title} variant="h3">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.subtitle} variant="subtitle1">
                      {subtitle}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </div >
  );
};

export default ProcessHeroSection;