🧩 1–20: Basics of Express.js
What is Express.js?

How does Express.js differ from Node.js?

How do you create a basic Express server?

What is req and res in Express?

How do you define routes in Express?

How do you send JSON data in a response?

How do you serve static files with Express?

What is the default port for Express applications?

How do you handle query parameters in Express?

How do you handle route parameters in Express?

What is the purpose of express.json()?

How do you handle form data in Express?

What is res.status() used for?

How do you redirect a request in Express?

How do you set response headers?

What is app.use() used for?

What is the difference between app.get() and app.post()?

How do you create dynamic routes in Express?

What is the purpose of next() in middleware?

How do you handle 404 errors in Express?

🔁 21–40: Routing & Middleware
What are middleware functions in Express?

How do you use third-party middleware in Express?

What is the order of middleware execution?

What is a Router in Express, and how do you use it?

How can you break routes into different files?

What is the difference between application-level and router-level middleware?

How do you apply middleware to specific routes?

How does error-handling middleware differ?

How do you log requests in Express?

What is CORS and how do you enable it in Express?

How do you parse cookies in Express?

How can you restrict access to certain routes (authorization)?

How do you perform authentication in Express?

How do you handle file uploads in Express?

What is the use of express.urlencoded()?

How can you validate incoming data in Express routes?

How do you create a global error handler?

How does the next(err) function work?

What is the helmet package used for?

What are some common middleware used in production?

🔐 41–60: Security, Sessions & Authentication
How do you prevent XSS in Express?

How do you prevent SQL injection in an Express app?

How do you implement session-based authentication?

What is the express-session package?

How do you store sessions securely in production?

How do you implement JWT-based authentication?

How can you restrict access to an admin route?

How do you hash passwords in Express apps?

What is the use of bcrypt?

How do you implement role-based access control?

How do you expire sessions after inactivity?

How do you rate-limit requests in Express?

How do you avoid brute-force attacks?

How do you implement OAuth with Express?

How do you ensure that Express runs only over HTTPS?

How do you implement CSRF protection?

How do you sanitize input in Express?

What are CORS preflight requests?

How do you whitelist specific origins in CORS?

How do you store and access environment variables securely?

🧱 61–80: Architecture & Real-World Scenarios
How would you structure a large Express.js project?

How do you implement service and controller layers?

How do you handle database connections in Express?

How do you inject dependencies into routes?

How do you manage configuration across environments (dev/stage/prod)?

How do you implement logging in Express?

What is a good folder structure for microservices using Express?

How do you implement pagination in Express APIs?

How do you deal with request timeouts?

How do you handle circular dependencies in Express?

How can you test your Express routes?

What testing frameworks can be used with Express?

How do you mock database calls in tests?

How do you create a versioned API (v1, v2, etc.) in Express?

How do you connect Express with a MongoDB database?

How do you send emails from an Express app?

How do you handle long-running tasks (e.g., video processing)?

How do you implement request validation at the middleware level?

How do you separate internal vs external API routes?

How do you handle rate-limited third-party API calls in Express?

🚀 81–100: Advanced, Optimization & Deployment
How do you improve performance in an Express app?

How do you implement caching in Express?

How do you use Redis with Express?

How do you implement a background queue in Express?

How do you handle memory leaks in an Express app?

How do you debug an Express app in production?

What are some signs of performance bottlenecks in Express?

How do you deploy an Express app on AWS EC2?

How do you deploy an Express app using Docker?

How do you configure load balancing for an Express app?

How can you auto-restart an Express app on crash?

What is PM2 and how do you use it?

How do you use environment variables with .env and dotenv?

How do you create a middleware to log response time?

What are some common pitfalls in Express development?

How do you prevent memory bloat in large Express applications?

How do you optimize Express app startup time?

How do you expose only HTTPS routes in Express?

What is Express Generator and how does it help?

What alternatives to Express exist, and when would you not use Express?



# Scenario based question


🔄 1–10: Routing, Middleware & Flow Control
How would you apply authentication middleware to a subset of routes only?

A route handler is not responding. How would you debug it?

How would you implement request throttling for login routes?

You need to call an external API before sending a response — how would you handle errors from that API in the route?

How would you implement middleware that logs the request method, URL, and execution time?

How would you protect a route that should only be accessed by users with a specific role (e.g., admin)?

If you need to handle the same logic across GET, POST, and PUT methods, how would you organize your code?

A route that uses async/await is silently failing. What’s wrong and how would you fix it?

A global error handler is not catching certain route errors. How do you ensure all errors are caught properly?

How would you implement dynamic route-based caching?

🔒 11–20: Authentication, Security, and Sessions
How would you implement JWT-based login with automatic token renewal?

Users are staying logged in even after token expiry — what could be wrong?

How would you prevent CSRF attacks in a form-based login route?

How would you restrict CORS only to a whitelist of trusted frontend origins?

How would you hash and store passwords securely in Express?

How would you implement a “remember me” functionality with sessions in Express?

A user should only be allowed to make 5 failed login attempts per hour. How do you implement this?

How would you securely store session data across distributed servers?

A user’s session is getting lost randomly — how would you debug session persistence issues?

How would you disable or hide sensitive Express headers in production?

⚙️ 21–30: API Architecture, Versioning & Best Practices
How would you design an Express app to support versioned APIs like /api/v1/ and /api/v2/?

How do you structure your Express application for maintainability in a microservices setup?

If you need to add input validation for multiple routes, how would you implement it efficiently?

How would you implement centralized response formatting for all APIs?

How would you expose API docs for your Express routes?

How would you implement soft deletes in an Express+Mongo or Express+MySQL API?

You need to track API usage statistics per user. How would you implement that?

How would you write middleware to transform legacy request payloads into a new format?

Your Express app needs to call a microservice and fallback to a cached result if it fails. How do you design that?

How would you implement localization (i18n) in Express routes?

🧪 31–40: Testing, Debugging & Error Handling
How would you test an Express route that depends on a database connection?

A production error occurs without logs — how do you debug what went wrong?

You need to test file uploads in your Express API. How would you approach this?

How do you handle unexpected exceptions from a third-party API in an Express route?

An Express route takes too long to respond — how do you profile it?

How would you write a test case to validate that only authenticated users can access a route?

How do you write integration tests for routes that include JWT authentication?

Your next() call breaks the middleware flow — what might be the issue?

An API randomly returns 500 errors, but logs look normal — how do you isolate the problem?

How do you test rate-limiting behavior in an Express route?

🚀 41–50: Performance, Scalability & Deployment
How would you implement Redis caching for expensive Express API calls?

How do you load-balance an Express app across multiple instances?

An Express route is being hammered with requests — how do you protect it without affecting others?

How would you structure an Express app to be ready for serverless deployment (e.g., AWS Lambda)?

How do you optimize performance when your Express app handles large file uploads?

How would you implement a queueing mechanism for background tasks from Express (e.g., sending emails)?

How do you gracefully shut down an Express server without dropping connections?

How would you handle real-time updates using WebSockets alongside Express?

How would you monitor memory leaks in a high-traffic Express server?

How would you containerize and deploy your Express app using Docker?

