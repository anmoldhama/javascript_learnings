Q. why fastify is faster as compare to expressjs ?

1. Low-overhead architecture
Express.js is built on Connect middleware, which wraps many functions, causing extra function calls and middleware checks for every request.

Fastify uses a minimal, optimized routing core with less abstraction and fewer unnecessary layers, reducing CPU cycles per request.

2. Schema-based Request/Response Validation
Fastify supports JSON Schema validation with Ajv out of the box.

When you define schemas for request bodies, queries, and responses, Fastify:

Pre-compiles the validation into a JavaScript function at startup.

Avoids repeated parsing/validation at runtime.

This makes request parsing much faster than Express, which often validates dynamically via libraries like Joi.

3. Faster HTTP serialization
In Express, res.json() uses JSON.stringify() every time → slower for big objects.

Fastify uses fast-json-stringify, which generates a compiled function for serialization based on your schema — 3–5x faster for large responses.

Example:

const fastJson = require('fast-json-stringify');
const stringify = fastJson({ type: 'object', properties: { hello: { type: 'string' } } });
console.log(stringify({ hello: 'world' }));
4. Asynchronous optimization
Express middleware is callback-based and less optimized for async/await.

Fastify is fully async-first with native Promise support, meaning no wrapping/unwrapping callbacks → fewer event loop delays.

5. Plugin encapsulation
Fastify’s plugin system isolates scope and reuses pre-initialized contexts, avoiding global middleware checks that Express performs on every request.

6. Logging built-in (pino)
Fastify uses pino, a very fast JSON logger that writes logs in a stream without blocking.

In Express, developers often use slower logging libraries like morgan/winston.




# Questions and Answers

1. Basics & Architecture
Q.1 What is Fastify, and how does it differ from Express.js?
ans : Fastify is an nodejs framework i.e used to create the servers.
 Its is faster as compared to expressjs because of its fast-json-stringify and schema validation.

 Performance:

Fastify is much faster than Express.js because it uses fast-json-stringify for response serialization and schema-based validation to reduce runtime overhead.

Express uses a more generic middleware-based approach which adds more function calls and slower serialization.

Built-in Schema Validation:

Fastify uses JSON Schema to validate request payloads (query, body, params) and automatically serializes responses.

Express requires manual validation or third-party middleware (like joi or express-validator).

Plugin System:

Fastify has a highly encapsulated plugin system for better modularity and isolation.

Express plugins can often leak state across routes if not carefully managed.

Logging:

Fastify has Pino logger built-in for zero-cost async logging.

Express doesn’t come with logging; developers usually integrate morgan or winston.

Q.2 Explain Fastify’s plugin system and encapsulation. Why is it important?  need to practise
ans : 
Fastify’s plugin system allows you to encapsulate routes, decorators, and hooks inside isolated modules.
When you register a plugin using fastify.register(), everything inside that plugin (routes, hooks, decorators) is scoped to that plugin only and its descendants.

Q.3 How does Fastify achieve better performance compared to Express?
ans : 

Q.4 What is schema-based validation in Fastify, and how does it work internally?
ans : 

Q.5 What is fast-json-stringify, and why is it faster than JSON.stringify()?
ans : 

2. Request Handling & Validation
How do you define request and response schemas in Fastify? Give an example.
ans : 

What are decorators in Fastify? How would you use them to add custom functionality?
ans : 

Explain how to handle async errors in Fastify without crashing the server.
ans : 

How do you validate query params, headers, and request body in Fastify?
ans : 

What’s the difference between preValidation, preHandler, and onRequest hooks?
ans : 

3. Performance & Optimization
How does Fastify handle logging, and why is Pino used?

How do you benchmark a Fastify API?

What is encapsulation in Fastify, and how does it help with performance?

How do you handle high-load scenarios in Fastify?

4. Plugins & Architecture
How do you create a reusable Fastify plugin? Give an example.

What is fastify-plugin and when should you use it?

Explain Fastify’s lifecycle hooks and their order of execution.

5. Real-world Scenarios
How do you integrate Fastify with a database (e.g., MongoDB, PostgreSQL)?

How would you implement authentication in Fastify using JWT?

How do you handle file uploads in Fastify?
