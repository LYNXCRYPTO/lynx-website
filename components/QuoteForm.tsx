import React, { useState } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
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
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            padding: "15px 20px 100px"
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            overflow: 'auto',
        },
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 8,
        marginLeft: 32,
    },
    contactInfoText: {
        fontSize: 20,
        fontWeight: 600,
        [theme.breakpoints.between(600, 700)]: {
            fontSize: 18,
        },
    },
    divider: {
        height: 1,
        backgroundColor: theme.palette.primary.main,
        margin: "0px 16px",
    },
    socialIcons: {
        filter: "none",
        "&:hover": {
            filter: "invert(36%) sepia(90%) saturate(2320%) hue-rotate(209deg) brightness(102%) contrast(96%)",
        },
    },
    subtitle: {
        fontSize: 26,
        fontWeight: 600,
        marginBottom: 16,
        [theme.breakpoints.down("xs")]: {
            fontSize: 24,
            fontWeight: 600,
        },
    },
    textField: {
        borderRadius: 0,
        borderStyle: "solid",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: theme.palette.primary.light,
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
    formRow: {
        // maxWidth: 400,
    },
    form: {
        maxWidth: 400,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
    },
    formWidth: {
        [theme.breakpoints.down("sm")]: {
            margin: 30
        },
        [theme.breakpoints.up("md")]: {
            width: '100%'
        },
        maxWidth: 550,
    },
    protoInfo: {
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            margin: 30
        },
    },
    button: {
        height: 50,
        width: 175,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 20,
        fontWeight: 600,
        textTransform: "none",
        boxShadow: "0px 3px 5px #00000040",
    },
}));

const FooterSection = (props: Props) => {
    const classes = useStyles()
    const theme = useTheme()
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
            lynxprotocolofficial@gmail.com`
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
        <Grid id="contact-us" className={classes.root} container direction="row" spacing={0}>
            {/* <Grid style={{ display: "flex", justifyContent: "center" }} item md={6} sm={12} xs={12}>
                <Grid container direction="column" justifyContent="center" alignContent="center">
                    <Grid item>
                        <Typography color="primary" align="center" className={classes.subtitle} variant="subtitle1">
                            Call, email, or submit form to get the quote process started!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" wrap="nowrap">
                            <Grid item>
                                <PhoneIcon className={classes.icon} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.contactInfoText} variant="subtitle2" align="center">
                                    (248) 882-4142
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ marginTop: 8, marginBottom: 24, }} item>
                        <Grid container direction="row" wrap="nowrap">
                            <Grid item>
                                <EmailIcon className={classes.icon} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.contactInfoText} variant="subtitle2" align="center">
                                    info@protocoding.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
            <Grid style={{ display: "flex", justifyContent: "center", }} item md={6} sm={12} xs={12}>
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
                            <Grid className={classes.formRow} container direction="row" spacing={2}>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        className={classes.textFieldBackground}
                                        style={{ [theme.breakpoints.down("sm")]: { paddingBottom: 0 }, }}
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
                                <Grid style={{ display: "flex", flex: 1 }} item sm={6} xs={12}>
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
                                size="large"
                                variant="contained"
                                color="primary"
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
            </Grid >
        </Grid >
    );
};

export default FooterSection;