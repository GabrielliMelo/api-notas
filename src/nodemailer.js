const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "postmaster@sandbox83b3fa8ababb4ff5a16dbece6b937373.mailgun.org",
      pass: "54a3d6dbad52b94d3f96b9f8f0f9d2d9-20ebde82-514dd8ad",
    },
})

module.exports = transporter;