import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { isAuthenticated, getPermission } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const permission = await getPermission("create:post");

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
        request.url,
      ),
    );
  }

  if (!permission?.isGranted) {
    return NextResponse.redirect(
      new URL(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

