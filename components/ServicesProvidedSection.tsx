import {
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ServicesCard from "./Cards/ServicesCard";
import { useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      [theme.breakpoints.up("sm")]: {
        padding: "100px 100px 80px 100px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "50px 75px 80px 75px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "50px 24px 80px 24px",
      },
      borderTopColor: theme.palette.primary.main,
      borderTopStyle: "solid",
      borderTopWidth: 10,
    },
    background: {
      zIndex: 2,
      position: "absolute",
      display: "flex",
      justifyContent: "flex-end",
      left: 0,
      right: 0,
      top: -15,
      height: 300,
      backgroundImage: "url('scenes/wave-scene.svg')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "cover",
      transform: "scaleY(-1)",
    },
    imageList: {
      maxWidth: 400,
      [theme.breakpoints.down("xs")]: {
        maxHeight: 660,
        overflow: 'hidden',
        transition: "max-height 1.5s ease-out"
      },
      [theme.breakpoints.up("sm")]: {
        maxWidth: "100%",
      },

      //   width: 500,
      //   width: "00px",
      //   height: 450,
    },
    expand: {
      [theme.breakpoints.down("xs")]: {
        maxHeight: '1700px',
      },

    },
    collapse: {
      [theme.breakpoints.down("xs")]: {
        maxHeight: 660,
        overflow: 'hidden',
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
      marginBottom: 64,
      [theme.breakpoints.down("sm")]: {
        fontSize: 40,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 32,
      },
    },
    itemHeight: {
      height: "100% !important",
      [theme.breakpoints.up("sm")]: {
        width: "48% !important",
        marginLeft: 10,
      },
      [theme.breakpoints.up("lg")]: {
        width: "32% !important",
        marginLeft: 10,
      },
      //   [theme.breakpoints.up("sm")]: {
      //     marginLeft: 10,
      //   },
    },
    moreBtns: {
      [theme.breakpoints.down("sm")]: {
        display: 'flex',
        justifyContent: "center",
        marginTop: 48,
      },
      [theme.breakpoints.up("sm")]: {
        display: 'none'
      },
    },
    button: {
      color: "#FFF",
      height: 60,
      width: 250,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 5,
      borderWidth: 2,
      fontSize: 20,
      fontWeight: 600,
      textTransform: "none",
      boxShadow: "0px 3px 5px #00000040",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.down("xs")]: {
        height: 50,
        width: 175,
      },
    },
    center: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

interface Props { }

const ServicesProvidedSection = (props: Props) => {
  const [showAll, setShowAll] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div id="services" className={classes.root}>
      <div className={classes.background} />
      {/* <div className={classes.center}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.title} variant="h4" align="center">
              We Can Provide More
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle} variant="h3" align="center">
              High Quality Services
            </Typography>
          </Grid>
          <Grid item>
            <Grid className={`${classes.imageList} ${showAll ? classes.expand : classes.collapse}`} container direction="row" spacing={4}>
              {servicedata.data.map((item: any, index: number) => (
                <ServicesCard key={index} index={index} colorHex={item.hex} service={item.service} />
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.moreBtns}>
              {!showAll && (<Button className={classes.button} endIcon={<ExpandMoreIcon />} color="primary" onClick={() => setShowAll(true)} variant="contained">
                Show All
              </Button>
              )}
              {showAll && (<Button className={classes.button} endIcon={<ExpandLessIcon />} color="primary" onClick={() => setShowAll(false)} variant="contained">
                Show Less
              </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
};

export default ServicesProvidedSection;