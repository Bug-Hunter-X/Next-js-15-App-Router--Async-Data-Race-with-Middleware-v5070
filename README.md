# Next.js 15 App Router Async Data Race with Middleware

This repository demonstrates a subtle bug that can occur in Next.js 15's App Router when using asynchronous actions within page components and middleware that modifies the request.  The issue arises from a potential race condition where the async action attempts to access data before the middleware has fully modified the request.