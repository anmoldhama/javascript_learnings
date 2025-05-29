🔹 1–10: Express Basics
What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides features to build web and API servers.

How do you create a basic Express server?

js
Copy
Edit
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server running'));
How do you define a route in Express?

js
Copy
Edit
app.get('/route', (req, res) => res.send('Hello'));
What are middleware functions in Express?
Functions that have access to req, res, and next, used for processing requests.

How do you serve static files in Express?

js
Copy
Edit
app.use(express.static('public'));
What is req.params?
An object containing route parameters, e.g., /user/:id makes req.params.id available.

What is req.query?
Contains the query string parameters, e.g., /user?name=John → req.query.name.

What is req.body and how do you access it?
The body of a POST request. Use express.json() or express.urlencoded() middleware.

What is next() used for?
Passes control to the next middleware function in the stack.

How do you handle 404 errors in Express?
Add a catch-all route at the end:

js
Copy
Edit
app.use((req, res) => res.status(404).send('Not Found'));
🔹 11–20: Middleware and Routing
What is the order of middleware execution?
In the order they are defined using app.use() and routes.

How can you create a custom middleware?

js
Copy
Edit
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(logger);
How do you use third-party middleware in Express?
Install via npm and app.use(require('middleware')).

What is the difference between app.use() and app.get()?
use() is for all HTTP methods, get() is specific to GET requests.

How do you handle form data in Express?
Use express.urlencoded({ extended: true }).

What are route parameters in Express?
Named segments in the URL path used to capture values.

How can you group routes in Express?
Use express.Router() to modularize route handlers.

How do you handle different HTTP methods for the same path?
Use app.get(), app.post(), etc. for the same route.

How do you redirect in Express?
res.redirect('/new-path').

How do you send a JSON response in Express?
res.json({ message: 'Hello' }).

🔹 21–30: Error Handling and Advanced Routing
How does Express handle errors?
Through error-handling middleware with 4 arguments:

js
Copy
Edit
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
What is express.Router() used for?
To create modular, mountable route handlers.

How do you mount a router in Express?

js
Copy
Edit
const router = express.Router();
app.use('/api', router);
How do you restrict access to routes (auth)?
Use middleware to check authentication before route handlers.

How to handle async/await errors in Express routes?
Use try/catch or wrap in an error-handling helper:

js
Copy
Edit
const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
What are path parameters?
Dynamic parts of a route defined using : syntax.

What is the difference between res.send() and res.json()?
send() can send any type, json() sets Content-Type: application/json.

Can you send multiple responses to a single request?
No. Only one response can be sent per request.

What is app.locals and res.locals?
Objects for passing data around app-wide or per-request.

How do you chain multiple middleware in Express?
List them as an array or arguments:

js
Copy
Edit
app.get('/example', mw1, mw2, handler);
🔹 31–40: Security and Performance
How do you prevent XSS in Express?
Use libraries like helmet and sanitize inputs.

How do you protect against CSRF?
Use csurf middleware to validate request tokens.

How do you use CORS in Express?
Use the cors package:

js
Copy
Edit
const cors = require('cors');
app.use(cors());
How to implement rate limiting?
Use express-rate-limit middleware.

How can you handle file uploads in Express?
Use multer middleware.

How to cache responses in Express?
Use headers or third-party middleware like apicache.

How do you log requests in Express?
Use morgan middleware.

How do you compress responses in Express?
Use compression middleware.

How do you serve HTTPS with Express?
Use the https module from Node.js with SSL certs:

js
Copy
Edit
https.createServer({ key, cert }, app).listen(443);
How do you limit the request body size?
Configure express.json({ limit: '100kb' }).

🔹 41–50: Real-World Practices & Debugging
How do you implement pagination in Express?
Use limit and offset from query parameters.

How do you deploy an Express app?
Use platforms like Heroku, Vercel, or a VPS (with PM2 or Docker).

How do you handle environment variables in Express?
Use the dotenv package.

How do you structure a large Express app?
Modularize using folders like routes/, controllers/, services/.

How do you handle uncaught exceptions in Express?
Use process-wide handlers:

js
Copy
Edit
process.on('uncaughtException', ...);
process.on('unhandledRejection', ...);
How do you validate input data in Express?
Use express-validator or Joi.

What is the role of app.listen()?
Starts the HTTP server and begins accepting requests.

What is the difference between Express and Koa?
Koa is more lightweight and uses async/await natively; Express has more built-in features.

How do you test an Express API?
Use testing libraries like supertest, jest, or mocha.

What is the best practice for error logging in Express?
Use a logger like winston, and avoid sending stack traces in production.