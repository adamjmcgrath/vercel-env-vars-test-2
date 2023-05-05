import { NextRequest, NextResponse } from "next/server";
export function middleware(request) {
  return new NextResponse(
    `MY_ENV_VAR_FROM_FILE=${process.env.MY_ENV_VAR_FROM_FILE}
PUBLIC_MY_ENV_VAR_FROM_FILE=${process.env.PUBLIC_MY_ENV_VAR_FROM_FILE}
MY_ENV_VAR_FROM_DASHBOARD=${process.env.MY_ENV_VAR_FROM_DASHBOARD}
PUBLIC_MY_ENV_VAR_FROM_DASHBOARD=${process.env.PUBLIC_MY_ENV_VAR_FROM_DASHBOARD}
VERCEL_BRANCH_URL=${process.env.VERCEL_BRANCH_URL}`,
    { status: 200, headers: { "content-type": "text/plain" } }
  );
}
