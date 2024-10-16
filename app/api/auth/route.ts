import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest) {
  return NextResponse.json({ data: await req.json() });
}
