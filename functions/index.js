const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Imap = require("imap");
const { simpleParser } = require("mailparser");

const html = require("./html");
const chtml = require("./chtml");
const client = require("./reply");
const creply = require("./creply");
const yslReply = require("./yslReplay");
const yslHtml = require("./yslHtml");
const atcHtml = require("./atcHtml");
const atcReply = require("./atcReply");

const { Resend } = require("resend");
const app = express();
const id = crypto.randomBytes(6).toString("hex");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

admin.initializeApp(functions.config().firebase);

const resend = new Resend("re_WSFAmrSj_PJMGBYQDuHtVrkPy2zzsNU7S");
const cresend = new Resend("re_4XaBwY9F_9iiGLcSj1FG4Jri52ymbQPwi");
const ysl = new Resend("re_h7Yc8DGA_6prDJ2PnF3hWY74mNr3oh34S");
const atc = new Resend("re_ArHoPbig_JohVjpvSXZpxx7p8hU7nhUbt");

app.get("/", (req, res) => {
  res.send("!!! BACKEND !!!");
});

app.post("/mailBook", async (req, res) => {
  try {
    const { name, email, number, message, program } = req.body;
    const subject = program;
    const body =
      "Name: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Number: " +
      number +
      "\n" +
      "Message: " +
      message +
      "\n";
    // SMTP (sending) server details
    const smtpServer = "smtp.titan.email";
    const smtpPort = 587;

    // Create a nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      auth: {
        user: "info@bookwormcentre.com",
        pass: "~/4Ac>;C@9Q/DA9",
      },
    });

    // Create the email options
    const mailOptions = {
      from: "info@bookwormcentre.com",
      to: "info@bookwormcentre.com",
      subject: subject,
      text: body,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
    console.log("Info object:", info);
    res.status(200).json({ info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.post("/mail", async (req, res) => {
  const { fullname, email, number, query } = req.body;
  let ip = (req.headers["x-forwarded-for"] || "").split(",")[0];
  try {
    const ClientData = await resend.emails.send({
      from: "info@buteconstruction.co.uk",
      to: email,
      subject: "bute-noreply",
      html: client(fullname),
    });
    const Companydata = await resend.emails.send({
      from: "info@buteconstruction.co.uk",
      to: [
        "saravanagobi@buteconstruction.co.uk",
        "aravin.kalu@buteconstruction.co.uk",
        "bute.tudorel@buteconstruction.co.uk",
      ],
      subject: `Request#${id}`,
      html: html(fullname, email, number, query, ip),
    });
    res.status(200).json({ Companydata });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/cMail", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  let ip = (req.headers["x-forwarded-for"] || "").split(",")[0];
  try {
    const ClientData = await cresend.emails.send({
      from: "info@sharasolutions.co.uk",
      to: email,
      subject: "shara-noreply",
      html: creply(name),
    });
    const Companydata = await cresend.emails.send({
      from: "info@sharasolutions.co.uk",
      to: ["saran@creativesquare.net", "shagar@creativesquare.net"],
      subject: `Request#${id}`,
      html: chtml(name, email, message),
    });
    res.status(200).send({ Companydata });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/ysl", async (req, res) => {
  const { name, email, number, msg } = req.body;
  try {
    const ClientData = await ysl.emails.send({
      from: "info@yslcivilsltd.co.uk",
      to: email,
      subject: "ysl-noreply",
      html: yslReply(name),
    });
    const Companydata = await ysl.emails.send({
      from: "info@yslcivilsltd.co.uk",
      to: ["info@yslcivilsltd.co.uk"],
      subject: `Request#${id}`,
      html: yslHtml(name, email, number, msg),
    });
    res.status(200).json({ Companydata });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

app.post("/atcEmail", async (req, res) => {
  const { name, email, number, msg } = req.body;
  try {
    const ClientData = await atc.emails.send({
      from: "info@asiatradecentre.com",
      to: email,
      subject: "atc-noreply",
      html: atcReply(name),
    });
    const Companydata = await atc.emails.send({
      from: "info@asiatradecentre.com",
      to: ["shagyfox133@gmail.com"],
      subject: `Request#${id}`,
      html: atcHtml(name, email, number, msg),
    });
    res.status(200).json({ Companydata, ClientData });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

app.post("/yslEmail", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const ClientData = await ysl.emails.send({
      from: "info@yslcivilsltd.co.uk",
      to: email,
      subject: "ysl-noreply",
      html: yslReply(email.split("@")[0]),
    });
    const Companydata = await ysl.emails.send({
      from: "info@yslcivilsltd.co.uk",
      to: ["info@yslcivilsltd.co.uk"],
      subject: `Request#${id}`,
      html: yslHtml(email.split("@")[0], email, "00000000000", "No Message"),
    });
    res.status(200).json({ Companydata });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
});

exports.app = functions.https.onRequest(app);
