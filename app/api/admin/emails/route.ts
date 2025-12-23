import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("admin_session");

    if (!sessionToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch all emails from database
    const emails = await prisma.waitlistEmail.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        email: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        emails: emails.map((email: { email: string; createdAt: Date }) => ({
          email: email.email,
          createdAt: email.createdAt.toISOString(),
        })),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Get emails error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
