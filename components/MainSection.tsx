import React, { useEffect, useState } from "react";
import { AppBar, Button, Grid, IconButton, Link, Toolbar, Typography, Modal } from "@material-ui/core";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { PlayArrow, Menu } from "@material-ui/icons";
import SideMenu from './SideMenu';
import Image from "next/image";
import { useRouter } from "next/router";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player/lazy'
import QuoteMenu from "./QuoteMenu";
import FixedNavBar from "./NavBars/FixedNavBar";



interface Props { }

const title = "A Truly Open and Decentralized Internet"
const subtitle = "Lynx is a fast and user-friendly blockchain. Our blockchain supports Ethereum smart contracts with sub-second finality and minimal gas costs."

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 625,
    // Primary Light Theme Color With 50% Opacity
    //backgroundColor: "#6398FB",
    [theme.breakpoints.down("sm")]: {
      minHeight: "80vh", 
      // background: "linear-gradient(90deg, rgb(73, 46, 255) 0%, rgba(121,71,222,1) 50%, rgba(213,109,227,1) 100%);",
    },
    // background: "linear-gradient(90deg, rgb(73, 46, 255) 0%, rgba(121,71,222,1) 25%,  rgba(255,110,178,1) 75%);",
    // background: "linear-gradient(90deg, rgb(70, 48, 228) 0%, rgba(90, 60, 228, 1) 33%,  rgba(103, 63, 228, 1) 66%, rgba(122, 71, 224, 1) 100%);",
    backgroundColor: "rgba(70, 48, 228, 1);",
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
    height: "100%",
    overflow: "hidden",
    [theme.breakpoints.up(960)]: {
      position: "absolute",
      right: 0,
      bottom: 0,
      top: 0,
    },
    [theme.breakpoints.down(960)]: {
      position: "absolute",
      right: 0,
      bottom: 0,
      left: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: "80%",
      display: "flex"
    },
  },
  wave: {
    display: "none",
    [theme.breakpoints.up(960)]: {
      display: "none",
    },
    [theme.breakpoints.down(960)]: {
      display: "flex",
    },
  },
  steps: {
    display: "flex",
    [theme.breakpoints.up(960)]: {
      display: "flex",
    },
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
  overlay: {
    height: "100%",
    zIndex: 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  callToActionRow: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      //marginTop: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down(400)]: {
      flexWrap: "wrap",
    },
  },
  callToActionButton: {
    color: "rgba(70, 48, 228, 1);",
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
    [theme.breakpoints.down(1050)]: {
      height: 60,
      width: 180,
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      height: 60,
      width: 200,
    },
  },
  textColumn: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    marginLeft: 40,
    [theme.breakpoints.down(1200)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 0,
    },
  },
  title: {
    color: "#FFF",
    fontSize: 44,
    fontWeight: 600,
    textShadow: "0px 3px 5px #00000040",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      textAlign: "center",
    },
    [theme.breakpoints.down(700)]: {
      fontSize: 30,
      textAlign: "center",
    },
    [theme.breakpoints.down(470)]: {
      fontSize: 30,
      textAlign: "center",
    },
    // [theme.breakpoints.down(400)]: {
    //   margin: "40px 0px",
    // },
    [theme.breakpoints.down(350)]: {
      fontSize: 22,
      textAlign: "center",
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "#F8F8F8",
    margin: "24px 0px",
    lineHeight: 1.75,
    textShadow: "0px 2px 5px #00000080",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      margin: "24px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      textAlign: "center",
      lineHeight: 1.5,
      margin: "24px 24px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
      lineHeight: 1.5,
      margin: "24px 0px",
    },
  },
  mockups: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    minWidth: 400,
    maxWidth: "none",
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 24,
      maxWidth: 250,
      minWidth: 0,
      display: "none",
    },
    [theme.breakpoints.down(700)]: {
      marginBottom: 24,
      maxWidth: 225,
      minWidth: 0,
      display: "none",
    },
    // [theme.breakpoints.down(425)]: {
    //   display: "none",
    // },
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
    justifyContent: 'flex-start',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      padding: "0px 0px 100px 0px",
    },

  },
  playIcon: {
    width: 30,
    height: 30,
    filter: "drop-shadow(0px 2px 5px #00000040);",
    [theme.breakpoints.down(470)]: {
      height: 27.5,
      width: 27.5,
    },
  },
  playVideoButton: {
    color: "#fff",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "0px 8px",
    justifyContent: "center",
    height: 50,
    width: 175,
    fontSize: 20,
    textTransform: "none",
    fontWeight: 500,

    textShadow: "0px 2px 5px #00000040",
    [theme.breakpoints.down("sm")]: {
      height: 50,
      width: 150,
      fontSize: 17,
    },
    "&:hover": {
      backgroundColor: "#0000001A",
      boxShadow: "none",
    },
  },
  desktopOnly: {
    display: "block",
    [theme.breakpoints.down(600)]: {
      display: 'none'
    },
  },
  mobileOnly: {
    display: "flex",
    [theme.breakpoints.up(600)]: {
      display: 'none'
    },
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  desktopVideoPlayer: {
    display: "flex",
    [theme.breakpoints.up(640)]: {
      display: "none",
    },
    [theme.breakpoints.down(640)]: {
      display: "none"
    },
  },
  mobileVideoPlayer: {
    [theme.breakpoints.up(640)]: {
      display: "none",
    },
    [theme.breakpoints.down(640)]: {
      display: "none"
    },
  },
  videoPlayerContainer: {
    position: "relative",
    display: "flex",
    width: "100%",
    aspectRatio: "16 / 9",
    maxWidth: 720,
    maxHeight: 405,
    // '@media (orientation: landscape)': {
    //   maxWidth: 560,
    //   maxHeight: 315,
    // },
  },
  videoPlayer: {
    aspectRatio: "16 / 9",
  },
  midOnly: {
    display: "flex",
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
  }
}));

const MainSection = (props: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const [drawerState, setDrawerState] = useState(false);
  const [showQuoteMenu, setShowQuoteMenu] = useState(false);
  const [modalState, setModalState] = useState(false);


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
          <div className={classes.wave}>
          <Image
            src="/scenes/layered-waves-mobile.svg"
            objectPosition="bottom center"
            objectFit="cover"
            layout="fill"
            loading="eager"
            quality={100}
            alt='layered waves' />
          </div>
          <div className={classes.steps}>
          <Image
            src="/scenes/layered-steps.svg"
            objectPosition="bottom center"
            objectFit="cover"
            layout="fill"
            loading="eager"
            quality={100}
            alt='layered waves' />
          </div>
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
                  <Grid item>
                    <Grid className={classes.callToActionRow} container direction="row" alignItems="center" spacing={2} wrap="nowrap">
                      <Grid item>
                        <Button
                          size="large"
                          className={`${classes.callToActionButton} ${classes.mobileOnly}`}
                          onClick={() => router.push("/whitepaper")}
                        >
                          Learn More
                        </Button>
                        <Button
                          size="large"
                          className={`${classes.callToActionButton} ${classes.desktopOnly}`}
                          onClick={() => router.push("/whitepaper")}
                        >
                          Learn More
                        </Button>
                      </Grid>
                      {/* <Grid item>
                        <Button
                          variant="contained"
                          className={classes.playVideoButton}
                          startIcon={<PlayArrow className={classes.playIcon} />}
                          onClick={() => setModalState(true)}
                        >
                          Watch Video
                        </Button>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={classes.mockups} item md={6} sm={12}>
                <Image src="/isometric-imgs/internet.svg" width={350} height={350} alt='Laptop main image' draggable={false} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div >
      <QuoteMenu drawerState={showQuoteMenu} toggleDrawer={toggleDrawer} />
      {/* <Modal
        className={classes.modal}
        open={modalState}
        onClose={() => setModalState(false)}
      >
        <div className={classes.videoPlayerContainer}>
          <ReactPlayer className={classes.videoPlayer} url='https://www.youtube.com/watch?v=pMSlGoKUjDY' width='100%' height='100%' playing={true} loop={true} controls={false} />
        </div>
      </Modal> */}
    </div >
  );
};

export default MainSection;