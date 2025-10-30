import { createTransporter } from "../config/nodemailer.config";
import dotenv from "dotenv";
dotenv.config(); // loads variables from .env


interface MailData {
  username: string;
  email: string;
  subject: string;
  message: string;
}

export const sendMailService = async (data: MailData) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: data.email,         // recipient email
    to: process.env.EMAIL_USER, 
    subject: data.subject,
    html: `
      <h2>Message from ${data.username}</h2>
      <p><strong>from:</strong> ${data.email}</p>
      <p><strong>to:</strong> ${process.env.EMAIL_USER}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
