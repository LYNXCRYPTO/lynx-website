import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  InputLabel,
  Container,
} from "@material-ui/core";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

interface Props { }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#FFF",
    minHeight: 600,
    padding: "100px 40px",
    backgroundImage: "url('scenes/half-blob-scene.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "100px 24px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 24px 100px",
      backgroundImage: "url('scenes/half-blob-scene-mobile.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom right",
      backgroundSize: "contain",
    },
  },
  title: {
    fontSize: 48,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down(470)]: {
      fontSize: 32,
    },
    [theme.breakpoints.down(370)]: {
      fontSize: 28,
    },
  },
  callToActionButton: {
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 250,
    margin: "24px 0px",
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
      display: "flex",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  callToActionButtonMobile: {
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    maxWidth: 350,
    margin: "24px 0px",
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
      display: "flex",
      height: 60,
    },
    [theme.breakpoints.down(300)]: {
      height: 50,
      fontSize: 16,
    },
  },
  subtext: {
    marginBottom: 16,
  },
  socialIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },
  socialIcon: {
    filter: "none",
    "&:hover": {
      filter: "invert(36%) sepia(90%) saturate(2320%) hue-rotate(209deg) brightness(102%) contrast(96%)",
    },
  },
}));

const FooterSection = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid id="contact-us" className={classes.root} container direction="column" justifyContent="center" alignItems="center">
      <Typography className={classes.title} variant="h3" align="center">
        Want to Get Involved?
      </Typography>
      <Button className={classes.callToActionButton} variant="contained" target="_blank" href="https://discord.gg/Nqttg5whAQ">
        Join The Community
      </Button>
      <Button className={classes.callToActionButtonMobile} variant="contained" target="_blank" href="https://discord.gg/Nqttg5whAQ">
        Join The Community
      </Button>
      <Typography className={classes.subtext} variant="body1" align="center">
        or learn more about the <Link style={{fontWeight: 600}} href="/whitepaper">Lynx Protocol</Link>
      </Typography>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item>
          <div className={classes.socialIconContainer}>
          <Link rel="noopener" href="https://discord.gg/Nqttg5whAQ" target="_blank">
            <Image
              className={classes.socialIcon}
              src="/icons/discord.svg" height={50} width={50}
              alt='Discord logo' />
          </Link>
          </div>
        </Grid>
        <Grid item>
        <div className={classes.socialIconContainer}>
          <Link rel="noopener" href="https://github.com/jordanlesson/lynx-python" target="_blank">
            <Image
              className={classes.socialIcon}
              src="/icons/github.svg" height={50} width={50}
              alt='Github logo' />
          </Link>
          </div>
        </Grid>
        <Grid item>
        <div className={classes.socialIconContainer}>
          <Link rel="noopener" href="https://twitter.com/LynxProtocol" target="_blank">
            <Image
              className={classes.socialIcon}
              src="/icons/twitter.svg" height={50} width={50}
              alt='Twitter logo' />
          </Link>
          </div>
        </Grid>
        <Grid item>
        <div className={classes.socialIconContainer}>
          <Link rel="noopener" href="https://www.linkedin.com/company/lynx-protocol/" target="_blank">
            <Image
              className={classes.socialIcon}
              src="/icons/linkedin.svg" height={50} width={50}
              alt="Linkedin logo" />
          </Link>
          </div>
        </Grid>
      </Grid>
    </Grid >
  );
};

export default FooterSection;