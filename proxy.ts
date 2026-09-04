import ROUTES from "@/constants/routes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const proxy = async (request: NextRequest) => {

  return NextResponse.next();
};

// 보호할 경로 설정
export const config = {
  matcher: ["/protected/:path*"],
};
