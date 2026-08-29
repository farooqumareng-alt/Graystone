import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const { name, phone, pickup, dropoff, date, time, service, notes } = await request.json()

    if (!name || !phone || !pickup || !dropoff || !date || !time || !service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

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

    // Persist to Supabase (best-effort -- a booking should still reach
    // the business by email even if the database write fails).
    let savedToDatabase = false
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY
    if (supabaseUrl && supabaseSecretKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseSecretKey)
        const { error: dbError } = await supabase.from("bookings").insert({
          name,
          phone,
          pickup,
          dropoff,
          preferred_date: date,
          preferred_time: time,
          service,
          notes: notes || null,
        })
        if (dbError) {
          console.error("Supabase insert error:", dbError)
        } else {
          savedToDatabase = true
        }
      } catch (dbErr) {
        console.error("Supabase insert threw:", dbErr)
      }
    } else {
      console.error("Booking not saved to database: SUPABASE_URL or SUPABASE_SECRET_KEY is not configured.")
    }

    // Email the business (best-effort too, for the same reason).
    let emailSent = false
    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.BOOKING_NOTIFY_EMAIL
    if (apiKey && notifyEmail) {
      const resend = new Resend(apiKey)
      const html = renderBookingEmail(name, phone, rows)
      const { error: emailError } = await resend.emails.send({
        from: "Gray Stone Transport <onboarding@resend.dev>",
        to: notifyEmail,
        subject: `New Ride Request - ${name}`,
        html,
      })
      if (emailError) {
        console.error("Resend error:", emailError)
      } else {
        emailSent = true
      }
    } else {
      console.error("Booking email not sent: RESEND_API_KEY or BOOKING_NOTIFY_EMAIL is not configured.")
    }

    if (!savedToDatabase && !emailSent) {
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

const SITE_URL = "https://www.graystonet.com"
const NAVY = "#041e41"
const BLUE = "#003e99"
const LIGHT_BLUE = "#769ac9"

function renderBookingEmail(name: string, phone: string, rows: [string, unknown][]) {
  const rowsHtml = rows
    .map(
      ([label, value], i) => `
        <tr>
          <td style="padding:12px 0;border-bottom:${i === rows.length - 1 ? "none" : "1px solid #e5e7eb"};font:600 14px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:${NAVY};vertical-align:top;width:160px;">${escapeHtml(label)}</td>
          <td style="padding:12px 0;border-bottom:${i === rows.length - 1 ? "none" : "1px solid #e5e7eb"};font:400 14px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#374151;vertical-align:top;">${escapeHtml(String(value))}</td>
        </tr>`
    )
    .join("")

  return `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f3f4f6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td align="center" style="padding:32px 40px 20px;">
                <img src="${SITE_URL}/email-logo.png" width="170" alt="Gray Stone Transport" style="display:block;max-width:170px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="height:4px;background-color:${BLUE};line-height:4px;font-size:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 40px 8px;">
                <h1 style="margin:0 0 4px;font:700 20px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:${NAVY};">New Ride Booking Request</h1>
                <p style="margin:0;font:400 14px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#6b7280;">A new ride has been requested through the website. Details below.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 40px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f8;border-radius:8px;">
                  <tr>
                    <td style="padding:16px 20px;font:600 14px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:${NAVY};">
                      Next step: call or text ${escapeHtml(name)} at
                      <a href="tel:${escapeHtml(phone.replace(/[^0-9+]/g, ""))}" style="color:${BLUE};text-decoration:none;">${escapeHtml(phone)}</a>
                      to confirm the booking.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:${NAVY};padding:28px 40px;">
                <p style="margin:0 0 4px;font:700 15px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#ffffff;">Gray Stone Transport</p>
                <p style="margin:0 0 12px;font:400 13px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:rgba(255,255,255,0.65);">Professional NEMT Services in Dallas-Fort Worth, Texas</p>
                <p style="margin:0;font:400 13px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:${LIGHT_BLUE};">
                  <a href="tel:9405007787" style="color:${LIGHT_BLUE};text-decoration:none;">(940) 500-7787</a>
                  &nbsp;&middot;&nbsp;
                  <a href="${SITE_URL}" style="color:${LIGHT_BLUE};text-decoration:none;">graystonet.com</a>
                </p>
                <p style="margin:16px 0 0;font:400 11px -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:rgba(255,255,255,0.4);">This is an automated notification sent from your website's booking form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}
