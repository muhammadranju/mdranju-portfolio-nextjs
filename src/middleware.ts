import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { isAuthenticated, getPermission } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const permission = await getPermission("create:post");

  // If not logged in, redirect to login
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  // If permission denied, redirect to dashboard
  if (!permission?.isGranted) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
