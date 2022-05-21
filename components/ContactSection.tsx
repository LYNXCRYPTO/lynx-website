import React, { useState } from 'react'
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Image from "next/image";
import { LocationOn, WatchLater, ContactSupport } from "@material-ui/icons";

interface Props {

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: "50px 75px 100px 75px",
        backgroundColor: "#FFF",
        backgroundImage: "url('scenes/half-blob-scene.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "cover",
        [theme.breakpoints.down("xs")]: {
            padding: "50px 24px 100px 24px",
            backgroundImage: "url('scenes/half-blob-scene-mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
        },
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FCFCFC",
        padding: 40,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#0000001A",
        boxShadow: "0px 5px 12.5px #00000040",
        marginRight: 24,
        [theme.breakpoints.down("sm")]: {
            padding: "40px 24px",
            marginRight: 0,
            marginBottom: 40,
        },
    },
    formTitle: {
        color: "#000",
        fontSize: 28,
        fontWeight: 600,
        [theme.breakpoints.down(500)]: {
            fontSize: 22,
        },
        [theme.breakpoints.down(400)]: {
            fontSize: 20,
        },
    },
    formSubtitle: {
        color: "#00000099",
        fontSize: 17,
        fontWeight: 500,
        margin: "8px 0px 24px 0px",
        [theme.breakpoints.down(500)]: {
            fontSize: 15,
        },
        [theme.breakpoints.down(400)]: {
            fontSize: 14,
        },
    },
    textField: {
        borderRadius: 0,
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 2,
        //borderBottomColor: theme.palette.primary.light,
        boxShadow: "0px 3px 3px #0000001A",
    },
    textFieldBackground: {
        backgroundColor: "#FBFBFB",
        marginBottom: 16,
        borderColor: "#000",
        borderStyle: "solid",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderLeftColor: "#F2F2F2",
        borderRightColor: "#F2F2F2",
        borderTopColor: "#F2F2F2",
    },
    tfBackground: {
        backgroundColor: "#FBFBFB",
        marginBottom: 16,
        borderColor: "#000",
        borderStyle: "solid",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderLeftColor: "#F2F2F2",
        borderRightColor: "#F2F2F2",
        borderTopColor: "#F2F2F2",
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0,
        },
    },
    columnContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    form: {
        width: "100%",
        maxWidth: 550,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    protoInfo: {
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            margin: 30
        },
    },
    button: {
        color: "#FFF",
        height: 50,
        width: 175,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 20,
        fontWeight: 600,
        textTransform: "none",
        boxShadow: "0px 3px 5px #00000040",
    },
    informationContainer: {
        display: "flex",
        flexDirection: "column",
        minHeight: 400,
        padding: "24px 16px",
        backgroundColor: "#FCFCFC",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#0000001A",
        boxShadow: "0px 5px 12.5px #00000040",
        width: 300,
        [theme.breakpoints.down("sm")]: {
            flex: 1,
        },
    },
    informationItem: {
        display: "flex",
        flexDirection: "column",
    },
    informationSubtitle: {
        fontSize: 20,
        fontWeight: 600,
    },
    informationIcon: {
        marginRight: 8,
    },
    informationDescription: {
        color: "#00000099",
        fontSize: 18,
        marginLeft: 8,
    },
}));

const ContactSection = (props: Props) => {

    const classes = useStyles();
    const [failure, setFailure] = useState<string>("");
    const [success, setSuccess] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const contactSubmit = async () => {
        try {
            const results = await axios.post("/api/email", formik.values);
            if (results.status === 200) {
                setSuccess(results.data);
                setSubmitted(true);
            }
        } catch (e) {
            setFailure(
                `Sending email failed. Please retry or send email manually to 
      contact@protocoding.com`
            );
        }
    };


    const formik = useFormik({
        initialValues: {
            name: "",
            companyname: "",
            subject: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Minimum 2 characters")
                .max(30, "Maximum 30 characters")
                .required("Required"),
            companyname: Yup.string()
                .max(30, "Maximum 30 characters"),
            subject: Yup.string()
                .min(2, "Minimum 2 characters")
                .max(30, "Maximum 30 characters")
                .required("Required"),
            email: Yup.string().email("Invalid email format").required("Required"),
            phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .max(12, "Phone number is not valid")
                .required("Required"),
            message: Yup.string()
                .min(4, "Minimum 4 characters")
                .max(240, "Maximum 240 characters")
                .required("Required"),
        }),
        onSubmit: (values) => {
            contactSubmit();
        },
    });

    const phoneChange = (event: any) => {
        let val = event.target.value;
        val = val.replace(/ /gm, "");

        let num = val;

        if (val.length > 9) {
            num = `${val.substring(0, 3)}-${val.substring(3, 6)}-${val.substring(
                6,
                10
            )}`;
        }
        num = num.trim();
        formik.setFieldValue("phone", num);
    };

    return (
        <Grid className={classes.root} container direction="row" justifyContent="space-between">
            <Grid item lg={9} md={8} sm={12}>
                <div className={classes.formContainer}>
                    <Typography className={classes.formTitle} variant="h4">
                        Start A Conversation With Us
                    </Typography>
                    <Typography className={classes.formSubtitle} variant="body1">
                        We will get in contact with you in less than 24 hours
                    </Typography>
                    <div className={classes.columnContainer}>
                        <form className={classes.form} onSubmit={formik.handleSubmit}>
                            <Grid container direction="column">
                                <Grid item>
                                    <TextField
                                        className={classes.textFieldBackground}
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        placeholder="Name"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={Boolean(formik.errors.name && formik.touched.name)}
                                        helperText={
                                            formik.errors.name &&
                                            formik.touched.name &&
                                            formik.errors.name
                                        }
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.textField,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* <Grid item>
                                    <TextField
                                        className={classes.textFieldBackground}
                                        id="companyname"
                                        name="companyname"
                                        autoComplete="company name"
                                        placeholder="Company Name"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.companyname}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={Boolean(formik.errors.companyname && formik.touched.companyname)}
                                        helperText={
                                            formik.errors.companyname &&
                                            formik.touched.companyname &&
                                            formik.errors.companyname
                                        }
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.textField,
                                            },
                                        }}
                                    />
                                </Grid> */}
                                <Grid item>
                                    <Grid container direction="row" spacing={2}>
                                        <Grid item sm={6} xs={12}>
                                            <TextField
                                                className={classes.tfBackground}
                                                id="email"
                                                name="email"
                                                autoComplete="email"
                                                placeholder="Email"
                                                fullWidth
                                                variant="outlined"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={Boolean(formik.errors.email && formik.touched.email)}
                                                helperText={
                                                    formik.errors.email &&
                                                    formik.touched.email &&
                                                    formik.errors.email
                                                }
                                                InputProps={{
                                                    classes: {
                                                        notchedOutline: classes.textField,
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <TextField
                                                className={classes.textFieldBackground}
                                                id="phone"
                                                name="phone"
                                                autoComplete="phone"
                                                placeholder="Phone"
                                                fullWidth
                                                variant="outlined"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={phoneChange}
                                                error={Boolean(formik.errors.phone && formik.touched.phone)}
                                                helperText={
                                                    formik.errors.phone &&
                                                    formik.touched.phone &&
                                                    formik.errors.phone
                                                }
                                                InputProps={{
                                                    classes: {
                                                        notchedOutline: classes.textField,
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        className={classes.textFieldBackground}
                                        id="subject"
                                        name="subject"
                                        autoComplete="subject"
                                        placeholder="Subject"
                                        fullWidth
                                        variant="outlined"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={Boolean(formik.errors.subject && formik.touched.subject)}
                                        helperText={
                                            formik.errors.subject &&
                                            formik.touched.subject &&
                                            formik.errors.subject
                                        }
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.textField,
                                            },
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        className={classes.textFieldBackground}
                                        id="message"
                                        name="message"
                                        placeholder="Message"
                                        fullWidth
                                        multiline
                                        variant="outlined"
                                        minRows={3}
                                        maxRows={4}
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={Boolean(formik.errors.message && formik.touched.message)}
                                        helperText={
                                            formik.errors.message &&
                                            formik.touched.message &&
                                            formik.errors.message
                                        }
                                        InputProps={{
                                            classes: {
                                                notchedOutline: classes.textField,
                                            },
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item className={classes.buttonContainer}>
                                {!submitted && (
                                    <Button
                                        className={classes.button}
                                        type="submit"
                                        color="primary"
                                        size="large"
                                        variant="contained"
                                    >
                                        SUBMIT
                                    </Button>
                                )}
                            </Grid>
                            {success && (
                                <Grid style={{ marginTop: 32, }} item>
                                    <Alert
                                        severity="success"
                                        onClose={() => {
                                            setSuccess(null);
                                        }}
                                    >
                                        {success}
                                    </Alert>
                                </Grid>
                            )}
                            {failure && (
                                <Grid style={{ marginTop: 32, }} item>
                                    <Alert
                                        severity="error"
                                        onClose={() => {
                                            setFailure("");
                                        }}
                                    >
                                        {failure}
                                    </Alert>
                                </Grid>
                            )}
                        </form>
                    </div>
                </div>
            </Grid>
            <Grid style={{ display: "flex", justifyContent: "flex-end", flex: 1, }} item lg={3} md={4} sm={12}>
                <div className={classes.informationContainer}>
                    <Image
                        src="/logos/logo-blue.svg"
                        width={225}
                        height={50}
                        objectFit="fill"
                        quality={100}
                        alt='Protocoding logo blue'
                    />
                    <Grid style={{ marginTop: 40 }} container direction="column" wrap="nowrap">
                        <Grid className={classes.informationItem} item>
                            <Grid style={{ marginBottom: 4 }} container direction="row">
                                <LocationOn className={classes.informationIcon} />
                                <Typography className={classes.informationSubtitle} variant="subtitle1">
                                    Our Office
                                </Typography>
                            </Grid>
                            <Typography className={classes.informationDescription}>
                                25882 Orchard Lake Rd,
                                Farmington Hills,
                                MI 48336
                            </Typography>
                        </Grid>
                        <Grid style={{ margin: "40px 0px" }} className={classes.informationItem} item>
                            <Grid style={{ marginBottom: 4 }} container direction="row">
                                <WatchLater className={classes.informationIcon} />
                                <Typography className={classes.informationSubtitle} variant="subtitle1">
                                    Working Hours
                                </Typography>
                            </Grid>
                            <Typography className={classes.informationDescription}>
                                Mon - Sun: 7:30AM to 8PM
                            </Typography>
                        </Grid>
                        <Grid className={classes.informationItem} item>
                            <Grid style={{ marginBottom: 4 }} container direction="row">
                                <ContactSupport className={classes.informationIcon} />
                                <Typography className={classes.informationSubtitle} variant="subtitle1">
                                    Contact
                                </Typography>
                            </Grid>
                            <Typography className={classes.informationDescription}>
                                contact@protocoding.com
                            </Typography>
                            <Typography className={classes.informationDescription}>
                                (248) 882-4142
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
}

export default ContactSection
