import { Request, Response } from "express";
import { sendMailService } from "../services/mail.service";

export const sendMailController = async (req: Request, res: Response) => {
  try {
    const { username, email, subject, message } = req.body;

    if (!username || !email || !subject || !message) { 
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    await sendMailService({ username, email, subject, message });

    res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (err) {
    console.error("❌ Nodemailer error:", err); // <- log full error
    res.status(500).json({ success: false, message: "Failed to send mail" , error: err  });
  }
};
