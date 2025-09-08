import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const token = request.cookies.get("theme")?.value;
  console.log("Middleware Token:", token);
  if (request.nextUrl.pathname === "/api/profile" && !token) {
    return NextResponse.redirect(new URL("/api/time", request.url));
  }
  return response;
}
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/api/profile",};
