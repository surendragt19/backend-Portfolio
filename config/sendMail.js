const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptionsToAdmin = {
    from: process.env.EMAIL_USER,
    to: "surendra203niet@gmail.com",
    subject: "New Message From Portfolio",
    html: `
      <h1>Contact User Details:</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank You for Connecting!",
    html: `
      <p>Dear ${name},</p>
        <p>Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.</p>
        <p>You can also connect with me on my LinkedIn profile <a href="https://www.linkedin.com/in/surendra-kumar-gupta-064294232/" target="_blank">Click Here!</a></p>
        <p>Best Regards,</p>
        <p>Surendra Kumar Gupta</p>
    `,
  };

  await transporter.sendMail(mailOptionsToAdmin);
  return transporter.sendMail(mailOptionsToUser);
};

module.exports = sendEmail;
