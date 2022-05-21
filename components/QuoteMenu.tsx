import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider";
import Image from "next/image";
import { Link, Grid, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import FooterSection from "./FooterSection";
import QuoteForm from "./QuoteForm";

interface Props {
  drawerState: boolean;
  toggleDrawer: (state: boolean, isDrawer?: boolean) => any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flex: 1,
    backgroundImage: "url('scenes/half-blob-scene-mobile.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "contain",
  },
  gridItem: {
    display: "flex",
  },
  title: {
    minHeight: 90,
    padding: "0px 16px",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderBlockStyle: "solid",
    marginBottom: 24,
  },
  divider: {
    marginBottom: 24,
    height: 1,
  },
  sideMenuButton: {
    width: 250,
    height: 50,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "none",
  },
  paper: {
    height: "100%",
    width: "100%",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      width: 280,
    },
  },
  link: {
    width: "100%",
    "&:hover": {
      backgroundColor: "lightblack",
    },
  },
  formTitle: {
    fontSize: 26,
    fontWeight: 600,
  },
  formSubtitle: {
    fontSize: 16,
    fontWeight: 500,
    margin: 32,
    [theme.breakpoints.down("xs")]: {
      margin: 16,
    },
  },
}));

export default function SideMenu(props: Props) {
  const classes = useStyles();

  return (
    <div >
      <SwipeableDrawer
        anchor={"right"}
        open={props.drawerState}
        disableDiscovery={true}
        onClose={props.toggleDrawer(props.drawerState)}
        onOpen={props.toggleDrawer(props.drawerState)}
      >
        <Grid className={classes.root} container direction="column">
          <Grid className={classes.gridItem} item>
            <Grid className={classes.title} container direction="row" justifyContent="space-between" alignItems="center" wrap="nowrap">
              <Grid item>
                <Image
                  src="/logos/logo-blue.svg"
                  width={225}
                  height={50}
                  objectFit="fill"
                  loading="eager"
                  quality={100}
                  alt='Protocoding logo blue'
                />
              </Grid>
              <Grid item>
                <IconButton onClick={props.toggleDrawer(props.drawerState, false)}>
                  <ClearIcon style={{ height: 30, width: 30 }} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography className={classes.formTitle} variant="h5" align="center">
              Join Our Team
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.formSubtitle} variant="body1" align="center">
              The Lynx Foundation is always looking for help to further develop the Lynx Protocol.
            </Typography>
          </Grid>
          <Grid item>
            <QuoteForm />
          </Grid>
        </Grid>
      </SwipeableDrawer >
    </div >
  );
}