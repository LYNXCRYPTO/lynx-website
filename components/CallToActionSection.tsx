import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography, Button, Link } from "@material-ui/core";

interface Props { }

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "64px 24px",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 16px",
    },
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,

    },
  },
  subtitle: {
    color: "#000",
    fontSize: 48,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  row: {
    margin: "64px 0px",
    [theme.breakpoints.down(535)]: {
      margin: "64px 0px 0px 0px",
    },
  },
  rowItem: {
    width: 250,
    [theme.breakpoints.down(800)]: {
      marginBottom: 32,
    },
    [theme.breakpoints.down(535)]: {
      marginBottom: 100,
      width: 300,
    },
  },
  description: {
    fontSize: 26,
    fontWeight: 600,
    [theme.breakpoints.down(535)]: {
      fontSize: 30,
      fontWeight: 600,
    },
  },
  divider: {
    marginTop: 16,
    height: 3,
    backgroundColor: "blue",
    width: 125,
    [theme.breakpoints.down(535)]: {
      width: 175,
    },
  },
  callToActionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  callToActionText: {
    fontSize: 36,
    marginBottom: 24,
  },
  callToActionButton: {
    height: 50,
    width: 250,
    borderRadius: 0,
    borderWidth: 2,
    fontSize: 18,
    fontWeight: 600,
  },
}));

const CallToActionSection = (props: Props) => {
  const classes = useStyles();

  return (
    <section id="portfolio">
      <Grid className={classes.root} container direction="column" justifyContent="flex-start" alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h4" align="center">
            A Client Focused Digital Agency Located In The USA
          </Typography>
          <Typography className={classes.subtitle} variant="h3" align="center">
            With A Highly Customized Digital Solution
          </Typography>
        </Grid>
        <Grid item>
          <Grid className={classes.row} container direction="row" justifyContent="center" alignItems="center">
            <Grid className={classes.rowItem} item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography className={classes.description} variant="subtitle1" align="center">
                    Expert Team Members
                  </Typography>
                </Grid>
                <Grid item>
                  <div className={classes.divider} />
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.rowItem} item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography className={classes.description} variant="subtitle1" align="center">
                    Results Driven Proactive Approach
                  </Typography>
                </Grid>
                <Grid item>
                  <div className={classes.divider} />
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.rowItem} item>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography className={classes.description} variant="subtitle1" align="center">
                    Streamlined Execution
                  </Typography>
                </Grid>
                <Grid item>
                  <div className={classes.divider} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.callToActionContainer} item>
          <Typography className={classes.callToActionText} variant="h3" align="center">
            Ready To Discuss Your Project?
          </Typography>
          <Button className={classes.callToActionButton} variant="outlined">
            Request A Quote
          </Button>
        </Grid>
      </Grid>
    </section>
  );
};

export default CallToActionSection;
