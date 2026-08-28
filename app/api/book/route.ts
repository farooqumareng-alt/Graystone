import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const { name, phone, pickup, dropoff, date, time, service, notes } = await request.json()

    if (!name || !phone || !pickup || !dropoff || !date || !time || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL

    if (!apiKey || !notifyEmail) {
      console.error("Booking email not sent: RESEND_API_KEY or BOOKING_NOTIFY_EMAIL is not configured.")
      return NextResponse.json({ error: "Booking is temporarily unavailable. Please call us instead." }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const rows = [
      ["Name", name],
      ["Phone", phone],
      ["Service Type", service],
      ["Pickup Address", pickup],
      ["Drop-off Address", dropoff],
      ["Preferred Date", date],
      ["Preferred Time", time],
      ["Additional Notes", notes || "—"],
    ]

    const html = `
      <h2>New Ride Booking Request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:600;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${escapeHtml(String(value))}</td></tr>`
          )
          .join("")}
      </table>
    `

    const { error } = await resend.emails.send({
      from: "Gray Stone Transport <onboarding@resend.dev>",
      to: notifyEmail,
      replyTo: undefined,
      subject: `Ride Booking Request - ${name}`,
      html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send booking request. Please call us instead." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Booking route error:", err)
    return NextResponse.json({ error: "Something went wrong. Please call us instead." }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
