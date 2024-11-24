import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = request.body
  return new NextResponse(data);
}