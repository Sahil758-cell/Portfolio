import { Resend } from "resend";
import { PROFILE } from "../../../constants/data";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!email || !message) {
    return Response.json({ ok: false, error: "Email and message are required" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: PROFILE.email,
      replyTo: email,
      subject: `New portfolio message from ${email}`,
      text: message,
    });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Failed to send message" }, { status: 502 });
  }
}
