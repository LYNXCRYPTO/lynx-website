import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 100,
      backgroundColor: "FBFBFB",
      borderRadius: 10,
      boxShadow: "0px 6px 12.5px #00000040",
    },
    color: {
      width: "15%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    serviceTitleContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#0000001A",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      padding: 8,
      borderBottomLeftRadius: 5,
    },
    serviceTitle: {
      fontSize: 20,
      fontWeight: 500,
      [theme.breakpoints.between("xs", "sm")]: {
        fontSize: 18,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },




    servicesCard: {
      //   width: 320,
      // textAlign: "center",
      background: "#FBFBFB",
      borderRadius: 5,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#0000001A",
      boxShadow: "0px 6px 12.5px #00000040",
      position: "relative",
      minHeight: "80px !important",
      [theme.breakpoints.up("sm")]: {
        minHeight: "88px !important",
      },
      [theme.breakpoints.up("lg")]: {
        minHeight: "68px !important",
      },
    },

    accordianHeight: {
      height: "80px !important",
      [theme.breakpoints.up("sm")]: {
        height: "88px !important",
      },
      [theme.breakpoints.up("lg")]: {
        height: "68px !important",
      },

    },
    cardColor: {
      width: 10,
      height: "80px !important",
      [theme.breakpoints.up("sm")]: {
        height: "88px !important",
      },
      [theme.breakpoints.up("lg")]: {
        height: "68px !important",
      },
      left: 0,
      borderRadius: 10,
      zIndex: 10,
      top: 0,
      position: "absolute",
    },
    cardColor2: {
      width: 35,
      height: "80px !important",
      [theme.breakpoints.up("sm")]: {
        height: "88px !important",
      },
      [theme.breakpoints.up("lg")]: {
        height: "68px !important",
      },
      left: 2,
      //   borderRadius: 10,
      zIndex: 10,
      top: 0,
      position: "absolute",
    },
    protoImg: {
      position: 'absolute',
      top: 0,

    },
    protoImgContainer: {
      position: 'absolute',
      zIndex: 20,
      left: 6,
      top: "50%",
      transform: "translateY(-45%)"

    },
    heading: {
      height: '100%',
      fontSize: theme.typography.pxToRem(15),
      borderBottomLeftRadius: 5,
      "&:after": {
        content: "''",
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "8px",
        bottom: "0px",
        left: "0",
        backgroundColor: theme.palette.primary.main,
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
        borderBottomLeftRadius: 5,
        marginLeft: 3,
      },
      "&:hover&:after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
        borderBottomLeftRadius: 5,
      }
    },
  })
);

interface Props {
  colorHex: string;
  service: string;
  index: number;
}

const ServicesCard = (props: Props) => {
  const classes = useStyles();
  const { colorHex, service } = props;

  return (
    <Grid item sm={6} xs={12}>
      <Grid className={`${classes.root}`} container direction="row">
        <Grid style={{ backgroundColor: colorHex }} className={classes.color} item >
          <Image alt='White protocodin logo' className={classes.protoImg} src="/wProto.png" width={25} height={25} objectFit="contain" />
        </Grid>
        <Grid className={`${classes.serviceTitleContainer}`} item>
          <Typography className={`${classes.serviceTitle}`} variant="subtitle1" align="center">
            {service}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesCard;
