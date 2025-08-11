import { NextResponse } from "next/server";

export const GET = async () => {
  return new NextResponse(JSON.stringify([]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
