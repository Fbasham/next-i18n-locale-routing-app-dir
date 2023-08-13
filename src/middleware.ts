import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Todo: add your middleware if there is any ;)

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
