import { NextRequest, NextResponse } from "next/server";
export function middleware(request) {
  return new NextResponse(
    `VERCEL_BRANCH_URL=${process.env.VERCEL_BRANCH_URL}
MY_VERCEL_BRANCH_URL=${process.env.MY_VERCEL_BRANCH_URL}
PUBLIC_MY_VERCEL_BRANCH_URL=${process.env.PUBLIC_MY_VERCEL_BRANCH_URL}
MY_VERCEL_BRANCH_URL_DASHBOARD=${process.env.MY_VERCEL_BRANCH_URL_DASHBOARD}
PUBLIC_MY_VERCEL_BRANCH_URL_DASHBOARD=${process.env.PUBLIC_MY_VERCEL_BRANCH_URL_DASHBOARD}`,
    { status: 200, headers: { "content-type": "text/plain" } }
  );
}
