const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const html = require("./html");
const client = require("./reply");
const { Resend } = require("resend"); // You should import Resend from "resend" if you haven't already.

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

admin.initializeApp(functions.config().firebase);

const resend = new Resend("re_WSFAmrSj_PJMGBYQDuHtVrkPy2zzsNU7S");

app.get("/", (req, res) => {
  res.send("!!! BACKEND !!!");
});

app.post("/mail", async (req, res) => {
  const { fullname, email, number, query } = req.body;
  try {
    const ClientData = await resend.emails.send({
      from: "info@buteconstruction.co.uk",
      to: email,
      subject: "no-reply",
      html: client(fullname),
    });
    const Companydata = await resend.emails.send({
      from: "info@buteconstruction.co.uk",
      to: ["saravanagobi@buteconstruction.co.uk"],
      subject: "New Request",
      html: html(fullname, email, number, query),
    });
    res.status(200).json({ Companydata });
  } catch (error) {
    res.status(500).json({ error });
  }
});

exports.app = functions.https.onRequest(app);
