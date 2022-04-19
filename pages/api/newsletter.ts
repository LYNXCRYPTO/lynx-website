// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// import * as sgMail from "@sendgrid/mail";
import { Request, Response, NextFunction } from "express";
import axios from "axios";

export default async function handler(req: Request, res: Response) {
  if (req.method === "PUT") {
    await axios
      .put(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          list_ids: [`${process.env.CCG_CONTACT_ID as string}`],
          contacts: [{ email: req.body.email + "" }],
        },
        {
          headers: {
            authorization: `Bearer ${process.env.SENDGRID_API_KEY as string}`,
            "content-type": "application/json",
          },
        }
      )
      .then(() => {
        res.status(200).send("Your signed up to our latest updates!");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } else {
    res.status(404);
  }
}
