import { NextResponse } from "next/server";
import { Resend } from "resend";

// We initialize conditionally inside the handler or check if the key exists
// to prevent Next.js from crashing on boot if the .env variable is missing.

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, context, budget } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // 1. Send Email via Resend
    // Note: To send from an actual domain, you must verify the domain in Resend.
    // We default to 'onboarding@resend.dev' for testing if not configured.
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL || "hello@mechlink.africa";

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #09090B; color: #FAFAFA; padding: 40px; border-radius: 12px; border: 1px solid #26262D;">
        <h1 style="font-size: 24px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 32px;">New Project Inquiry</h1>
        
        <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #26262D;">
          <p style="margin: 0 0 8px 0; color: #71717A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Client Details</p>
          <p style="margin: 0 0 4px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 4px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #E8A838; text-decoration: none;">${email}</a></p>
          <p style="margin: 0; font-size: 16px;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
        </div>

        <div style="margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #26262D;">
          <p style="margin: 0 0 8px 0; color: #71717A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Project Architecture</p>
          <p style="margin: 0 0 4px 0; font-size: 16px;"><strong>Context:</strong> ${context?.join(", ") || "None specified"}</p>
          <p style="margin: 0; font-size: 16px;"><strong>Budget:</strong> ${budget || "None specified"}</p>
        </div>

        <div>
          <p style="margin: 0 0 8px 0; color: #71717A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #A1A1AA;">
            ${message || "No additional message provided."}
          </p>
        </div>
      </div>
    `;

    // Only attempt to send if we have a key (prevents crashing if user hasn't set it yet)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `MechLink <${fromEmail}>`,
        to: [toEmail],
        subject: `New Lead: ${name} (${context?.[0] || 'Project Inquiry'})`,
        replyTo: email,
        html: emailHtml,
      });
    } else {
      console.log("No RESEND_API_KEY found. Skipping email send. Payload would have been:", emailHtml);
    }

    // 2. Fire Discord/Slack Webhook (Optional but highly recommended)
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🚀 **New Project Inquiry from ${name}**\n**Email:** ${email}\n**Phone:** ${phone || "N/A"}\n**Context:** ${context?.join(", ")}\n**Budget:** ${budget}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error (/api/contact):", error);
    return NextResponse.json(
      { error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
