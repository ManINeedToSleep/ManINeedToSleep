import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  company?: string;
  message?: string;
  website?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const rateLimitStore = new Map<string, number[]>();

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const entries = rateLimitStore.get(ip) ?? [];
  const recent = entries.filter((timestamp) => timestamp > windowStart);
  recent.push(now);
  rateLimitStore.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
};

export async function POST(request: Request) {
  try {
    const { name, company, message, website } =
      (await request.json()) as ContactPayload;

    const trimmedMessage = message?.trim();
    if (!trimmedMessage) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (website?.trim()) {
      return NextResponse.json(
        { error: "Submission rejected." },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_TO || user;

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const subjectParts = ["Portfolio message"];
    if (name?.trim()) subjectParts.push(name.trim());
    if (company?.trim()) subjectParts.push(company.trim());

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: recipient,
      subject: subjectParts.join(" · "),
      text: [
        `Name: ${name?.trim() || "N/A"}`,
        `Company: ${company?.trim() || "N/A"}`,
        "",
        trimmedMessage,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
