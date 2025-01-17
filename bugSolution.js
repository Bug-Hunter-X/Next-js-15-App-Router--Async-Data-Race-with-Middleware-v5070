// bugSolution.js
import { unstable_getServerSession } from 'next-auth'; // Or your auth library
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export async function GET(req) {
  const session = await unstable_getServerSession(req, res, authOptions);
  // Access the session here. It will be available because the middleware ensures authentication before proceeding.
  const userData = await fetch(`/api/user/${session.user.id}`);
  return new Response(JSON.stringify({userData}));
}

// ... (Your API route /api/user/[id] to fetch user data using session.user.id)

// In your page component:
//Ensure that you use getServerSideProps or getStaticProps or a similar function to access data from middleware

