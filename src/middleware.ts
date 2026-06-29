import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/lib/auth.config";
import { isAdmin } from "@/lib/rbac";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = req.auth?.user?.role;
  const isAuthed = !!req.auth;

  const guard = (ok: boolean) => {
    if (ok) return NextResponse.next();
    const url = new URL("/login", req.nextUrl);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  };

  if (pathname.startsWith("/admin")) return guard(isAuthed && isAdmin(role));
  if (pathname.startsWith("/partner"))
    return guard(
      isAuthed &&
        (role === "PARTNER" ||
          role === "CLINIC_STAFF" ||
          role === "DOCTOR" ||
          isAdmin(role)),
    );
  if (pathname.startsWith("/portal")) return guard(isAuthed);

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/partner/:path*", "/portal/:path*"],
};
