export {auth as middleware} from "@/config/nextAuth"
// import { NextResponse } from 'next/server';
// import { getToken } from "next-auth/jwt";
// import type { NextRequest } from 'next/server';

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req }); 

//   const requestedPath = req.nextUrl.pathname;

//   if (token) {
//     if (requestedPath === '/admin/signin') {
//       return NextResponse.redirect(new URL('/admin/dashboard', req.url));
//     }
//   } else {
//     if (!requestedPath.startsWith('/admin/signin')) {
//       return NextResponse.redirect(new URL('/admin/signin', req.url));
//     }
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: ["/admin/:path*"],
};
