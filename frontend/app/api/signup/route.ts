import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json(
    {
      message: "Signup submission received (demo endpoint).",
      received: body,
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      message: "SRMS signup route is active.",
    },
    { status: 200 }
  );
}

