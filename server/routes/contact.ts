import type { Request, Response } from "express";
import nodemailer from "nodemailer";

function isEmail(v?: string) {
  return !!v && /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v);
}

function normalizeGmailUser(u?: string) {
  if (!u) return u;
  if (u.includes("@")) return u;
  const suffix = "gmail.com";
  if (u.endsWith(suffix)) {
    const prefix = u.slice(0, -suffix.length);
    return `${prefix}@${suffix}`;
  }
  return u;
}

export async function handleContact(req: Request, res: Response) {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields" });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const rawUser = process.env.SMTP_USER;
  const user = normalizeGmailUser(rawUser);
  const pass = process.env.SMTP_PASS;
  const to = (process.env.CONTACT_TO_EMAIL ||
    process.env.TO_EMAIL ||
    user) as string;

  if (!host || !user || !pass || !to) {
    return res.status(500).json({
      ok: false,
      error:
        "Email service not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL.",
    });
  }

  if (!isEmail(user) || !isEmail(to) || !isEmail(email)) {
    return res
      .status(400)
      .json({
        ok: false,
        error:
          "Invalid email address configured. Ensure SMTP_USER, CONTACT_TO_EMAIL, and your email are valid.",
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
    const msg = String(err?.message || "Failed to send");
    const hint =
      msg.includes("did not match the expected pattern") ||
      msg.toLowerCase().includes("envelope")
        ? " Check SMTP_USER/CONTACT_TO_EMAIL formatting (must be full email like name@gmail.com)."
        : "";
    return res.status(500).json({ ok: false, error: msg + hint });
  }
}
