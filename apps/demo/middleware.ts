/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";
import type { NextMiddleware } from "next/server";

const middleware: NextMiddleware = async (request) => {
  //const response = NextResponse.next();

  const { url, nextUrl, headers, referrer } = request;
  const { host, hostname, pathname, search } = nextUrl;
  console.log(pathname, search, hostname);
  console.log('Middlewear triggered');
  //X-Forwarded-Host
  //return NextResponse.redirect();
  return NextResponse.rewrite(`http://localhost:3000/server/${hostname}${pathname}${search}`);
  //return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|icon.png|favicon.ico|images|videos|robots.txt|sitemap|custom-ui|server).*)"],
}