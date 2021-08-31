var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: "clientsprojects2020@gmail.com",
    pass: "Clientsprojects@2020",
  },
});

export const SendMail = (data) => {
  const maildata = {
    from: data.from,
    to: data.to,
    subject: data.subject,
    text: data.text,
  };
  transporter.sendMail(maildata, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
