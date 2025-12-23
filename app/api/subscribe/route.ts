import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const getEmailHtml = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1d1d1b; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(118.69% 85.24% at 50% 25.2%, #FFF 0%, #F4F4FF 58.08%, #FFF 84.05%); padding: 40px 20px; text-align: center; border-radius: 12px;">
        <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 16px; color: #1d1d1b;">
          Welcome to HumanBacked! 🎉
        </h1>
        <p style="font-size: 18px; margin-bottom: 24px; color: #1d1d1b;">
          Thanks for joining our waitlist. You're now part of the trust layer for the AI era.
        </p>
        <p style="font-size: 16px; color: #1d1d1b; margin-bottom: 8px;">
          We're building something special, and we're excited to have you along for the journey.
        </p>
        <p style="font-size: 16px; color: #1d1d1b;">
          We'll keep you updated on our progress and let you know when we're ready to launch.
        </p>
        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #C7C7C6;">
          <p style="font-size: 14px; color: #1d1d1b/70;">
            No spam, just human updates that matter.
          </p>
        </div>
      </div>
    </body>
  </html>
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailPattern.test(email.trim())) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 });
    }

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const fromEmail = process.env.GMAIL_FROM_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Gmail credentials not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong. Please contact us on info@humanbacked.com",
        },
        { status: 500 },
      );
    }

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `HumanBacked <${fromEmail}>`,
      to: email.trim(),
      subject: "Welcome to HumanBacked Waitlist! 🎉",
      html: getEmailHtml(),
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully! Check your email for confirmation." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
