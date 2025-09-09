import type { Request, Response } from "express";
import nodemailer from "nodemailer";

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields" });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to =
    process.env.CONTACT_TO_EMAIL ||
    process.env.TO_EMAIL ||
    process.env.SMTP_USER;

  if (!host || !user || !pass || !to) {
    return res
      .status(500)
      .json({
        ok: false,
        error:
          "Email service not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL.",
      });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from: {
        name: `Portfolio Contact | ${name}`,
        address: user,
      },
      replyTo: email,
      to,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    return res.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    return res
      .status(500)
      .json({ ok: false, error: err?.message || "Failed to send" });
  }
}
