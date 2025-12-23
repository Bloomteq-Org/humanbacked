import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

const getEmailHtml = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1d1d1b; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
      <div style="background: linear-gradient(118.69% 85.24% at 50% 25.2%, #FFF 0%, #F4F4FF 58.08%, #FFF 84.05%); padding: 40px 20px; text-align: center; border-radius: 12px;">
        <!-- Logo centered on top -->
        <div style="margin-bottom: 32px; text-align: center;">
          <img 
            src="https://wnm9vp5xvsjdmdmf.public.blob.vercel-storage.com/logo.svg" 
            alt="HumanBacked" 
            width="165" 
            height="22" 
            border="0"
            style="max-width: 165px; height: auto; margin: 0 auto; display: block;" 
          />
        </div>

        <!-- Email Content -->
        <div style="text-align: left; max-width: 500px; margin: 0 auto;">
         
          
          <p style="font-size: 16px; margin-bottom: 16px; color: #1d1d1b; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="font-size: 16px; margin-bottom: 16px; color: #1d1d1b; line-height: 1.6;">
            Thanks for joining the waitlist — we're excited to have you with us.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 16px; color: #1d1d1b; line-height: 1.6;">
            You're officially on the list, and we'll be in touch as soon as we're ready to share updates, early access details, or next steps. We're working hard behind the scenes to build something that delivers real value, and your interest helps shape what we're creating.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 16px; color: #1d1d1b; line-height: 1.6;">
            In the meantime, feel free to keep an eye on your inbox. We'll only reach out with relevant updates and important announcements.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 24px; color: #1d1d1b; line-height: 1.6;">
            Thanks again for signing up — we appreciate your support.
          </p>
          
          <p style="font-size: 16px; margin-top: 32px; color: #1d1d1b; line-height: 1.6;">
            Best,<br>
            HumanBacked Team
          </p>
        </div>
      </div>
    </body>
  </html>
`;

const getEmailText = () => `
You're on the waitlist 🎉

Hi there,

Thanks for joining the waitlist — we're excited to have you with us.

You're officially on the list, and we'll be in touch as soon as we're ready to share updates, early access details, or next steps. We're working hard behind the scenes to build something that delivers real value, and your interest helps shape what we're creating.

In the meantime, feel free to keep an eye on your inbox. We'll only reach out with relevant updates and important announcements.

Thanks again for signing up — we appreciate your support.

Best,
HumanBacked Team
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

    const trimmedEmail = email.trim().toLowerCase();

    // Check if email already exists in database
    const existingEmail = await prisma.waitlistEmail.findUnique({
      where: { email: trimmedEmail },
    });

    // If email already exists, return success (don't send duplicate email)
    if (existingEmail) {
      return NextResponse.json(
        { success: true, message: "You're already on the waitlist!" },
        { status: 200 },
      );
    }

    // Save email to database FIRST (before sending email)
    await prisma.waitlistEmail.create({
      data: {
        email: trimmedEmail,
      },
    });

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    // Use Gmail user as from email to avoid verification issues
    const fromEmail = gmailUser;

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

    // Send email (if this fails, email is still saved in database)
    try {
      await transporter.sendMail({
        from: `HumanBacked <${fromEmail}>`,
        replyTo: process.env.GMAIL_FROM_EMAIL || fromEmail, // Use custom email as reply-to
        to: email.trim(),
        subject: "You're on the waitlist 🎉",
        text: getEmailText(), // Plain text version
        html: getEmailHtml(),
        headers: {
          // Prevent email from being collapsed/truncated
          "X-Mailer": "HumanBacked",
          "X-Priority": "1", // High priority - prevents collapsing
          Importance: "high",
          "List-Unsubscribe": `<mailto:${process.env.GMAIL_FROM_EMAIL || fromEmail}?subject=unsubscribe>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      });
    } catch (emailError) {
      // Log email error but don't fail the request since email is already saved
      console.error("Failed to send email, but email is saved in database:", emailError);
    }

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
