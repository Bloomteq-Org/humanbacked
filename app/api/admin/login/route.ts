import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Get credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // If credentials are not set, reject login
    if (!adminUsername || !adminPassword) {
      console.error("Admin credentials not configured in environment variables");
      return NextResponse.json(
        { success: false, error: "Admin access not configured" },
        { status: 500 },
      );
    }

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
      // Create a session token (simple implementation)
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString("base64");

      // Set cookie with session token
      const cookieStore = await cookies();
      cookieStore.set("admin_session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
