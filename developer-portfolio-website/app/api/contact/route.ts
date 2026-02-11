import { NextResponse } from "next/server"
import { Resend } from "resend"

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function validatePayload(payload: ContactPayload) {
  return (
    typeof payload.name === "string" &&
    payload.name.trim().length >= 2 &&
    typeof payload.email === "string" &&
    payload.email.includes("@") &&
    typeof payload.subject === "string" &&
    payload.subject.trim().length > 0 &&
    typeof payload.message === "string" &&
    payload.message.trim().length >= 10
  )
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM
  const to = process.env.CONTACT_TO

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!validatePayload(payload)) {
    return NextResponse.json(
      { error: "Please complete all fields with valid information." },
      { status: 400 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const response = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\n${payload.message}`,
    })

    if (response.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
