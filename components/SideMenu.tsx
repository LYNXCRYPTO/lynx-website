import React from "react";
import AppBar from "@material-ui/core/AppBar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Image from "next/image";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import GroupIcon from "@material-ui/icons/Group";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Link, Grid } from "@material-ui/core";

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
    backgroundSize: "cover",
  },
  logo: {
    filter: "brightness(0) saturate(100%) invert(14%) sepia(79%) saturate(5463%) hue-rotate(250deg) brightness(89%) contrast(96%);",
  },
  title: {
    minHeight: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

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
    display: "flex",
    width: 220,
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
}));

export default function SideMenu(props: Props) {
  const classes = useStyles();

  const handleClickScroll = (id: string) => {
    const ele = document.getElementById(id);
  };

  return (
    <div >
      <SwipeableDrawer
        anchor={"left"}
        open={props.drawerState}
        disableDiscovery={true}
        onClose={props.toggleDrawer(props.drawerState)}
        onClick={props.toggleDrawer(props.drawerState)}
        onOpen={props.toggleDrawer(props.drawerState)}
      >
        <div className={classes.title}>
          <Image
            className={classes.logo}
            src="/logos/logo-blue.svg"
            width={225}
            height={60}
            objectFit="fill"
            loading="eager"
            quality={100}
            alt='Lynx logo blue'
          />
        </div>
        <Divider />
        <List>
          <ListItem button className={classes.sideMenuButton}>
            <Link rel="noopener" className={classes.link} href="/" underline="none">
              <Typography className={classes.buttonText} variant="button">
                Home
              </Typography>
            </Link>
          </ListItem>
          <ListItem button className={classes.sideMenuButton}>
            <Link rel="noopener" className={classes.link} href="/whitepaper" underline="none">
              <Typography className={classes.buttonText} variant="button">
                Whitepaper
              </Typography>
            </Link>
          </ListItem>
          <ListItem button className={classes.sideMenuButton}>
            <Link rel="noopener" className={classes.link} href="/#join-the-community" underline="none">
              <Typography className={classes.buttonText} variant="button">
                Join The Community
              </Typography>
            </Link>
          </ListItem>
          {/* <ListItem button className={classes.sideMenuButton}>
            <Link rel="noopener" className={classes.link} href="/contact" underline="none">
              <Typography className={classes.buttonText} variant="button">
                Contact Us
              </Typography>
            </Link>
          </ListItem> */}
        </List>
        <div className={classes.root} />
      </SwipeableDrawer>
    </div>
  );
}