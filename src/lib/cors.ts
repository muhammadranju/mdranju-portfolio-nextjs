import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
  "https://muhammadranju.vercel.app",
  "https://mdranju.vercel.app",
  "https://ranju.vercel.app",
  "https://mdranju.netlify.app",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

export function corsResponse(
  data: any,
  request: NextRequest,
  status: number = 200
) {
  const origin = request.headers.get("origin");
  const response = NextResponse.json(data, { status });

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

export function handleOptions(request: NextRequest) {
  const origin = request.headers.get("origin");
  const response = new NextResponse(null, { status: 204 });

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}
