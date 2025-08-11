import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const body = await req.json();

  return new NextResponse(JSON.stringify([]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
