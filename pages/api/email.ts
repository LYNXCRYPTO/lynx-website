// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import * as sgMail from "@sendgrid/mail";
import { Request, Response, NextFunction } from "express";

export default async function handler(req: Request, res: Response) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  if (req.method === "POST") {
    const msg = {
      to: "jordan@protocoding.com", // Change to your recipient
      from: "lynxprotocolofficial@gmail.com", // Change to your verified sender
      subject: `${req.body.subject}`,
      text: `${req.body.email} ${req.body.message}`,
      html: `<div>
      <div>
       Name: ${req.body.name}
      </div>
      <div>
        Email: <a href = "mailto: ${req.body.email}">${req.body.email}</a>
      </div>
      <div>
        Company: ${req.body.email ? req.body.email : 'N/A'}
      </div>
      <strong>Phone: ${req.body.phone}</strong>
      <p>${req.body.message}</p>
      </div>`,
    };
    await sgMail
      .send(msg)
      .then(() => {
        res
          .status(200)
          .send("Email Sent Successfully. Will get in touch with you soon!");
      })
      .catch((error) => {
        res
          .status(500)
          .send(
            "Sending email failed. Please retry or send email manually to contact@ccghealthcare.com"
          );
      });
  } else {
    res.status(404);
  }
}