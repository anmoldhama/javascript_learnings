 # Node js

🚀 Architecture & Design (1–10)
How would you design a Node.js application that needs to handle 10,000 concurrent connections?

You need to build a microservices-based architecture using Node.js. How will you manage inter-service communication?

How would you structure a large-scale Node.js monorepo with shared utilities across services?

How do you implement service discovery between multiple Node.js microservices?

You need to migrate a monolithic Express app to microservices. What’s your plan?

How would you implement graceful shutdown in a Node.js server?

How do you handle versioning of APIs in a Node.js backend?

How would you enforce strict separation of concerns in a Node.js MVC architecture?

You're building an app that must be GDPR-compliant. How do you handle user data in your Node.js server?

How would you implement a plugin system (e.g., like Discord bots) in a Node.js app?

🧪 Testing & Error Handling (11–20)
How do you write unit tests for an async service that hits a database?

You're writing tests for a third-party API integration. How would you mock the external service?

Your tests are failing randomly. How do you debug flaky tests in a Node.js project?

How would you capture and report unhandled exceptions in your Express app?

How do you write integration tests for a route that handles file uploads?

How do you test event-driven architecture (e.g., Kafka, RabbitMQ) in a Node.js service?

A third-party API you're calling is intermittently failing. How would you handle retries and fallbacks?

How do you test a middleware that validates authentication tokens?

How would you monitor and track slow queries or memory leaks in a Node.js app?

How would you log request and response payloads without exposing sensitive information?

📦 Package Management & Dependency Handling (21–30)
How would you secure your app against malicious npm packages?

You find a memory leak after installing a new dependency. What’s your plan to identify and fix it?

How do you update all outdated packages safely in a Node.js monorepo?

How do you manage internal packages (shared libraries) across multiple Node.js projects?

What’s your strategy for managing breaking changes in third-party dependencies?

How do you handle native module compilation issues in Dockerized Node.js environments?

How would you build a custom npm package and use it in multiple internal projects?

You’ve found a critical vulnerability in a package. How do you patch it temporarily?

How do you check your entire dependency tree for known vulnerabilities?

How would you prevent dependency confusion attacks in your CI/CD pipeline?

🌐 API & Middleware (31–40)
How would you implement global error handling in an Express.js app?

How do you secure APIs against mass assignment or overposting?

How would you implement a request validation layer in your RESTful API?

You need to support file uploads and streaming in your API. How would you implement it?

How would you implement API rate limiting per user using middleware?

How do you prevent the double submission of forms or POST requests?

You’re building a public API. How do you handle versioning, throttling, and abuse?

How do you implement custom middleware that tracks the response time of each API call?

How do you inject request-scoped data (like user ID) throughout your request lifecycle?

How do you build a multi-tenant Express.js API?

⚡ Performance & Optimization (41–50)
How do you find and fix performance bottlenecks in a Node.js app?

How would you reduce TTFB (Time to First Byte) in a Node.js API?

How would you profile memory usage of a production Node.js app?

How do you implement caching at route or database level?

How do you preload data at startup to reduce API response time?

You need to batch database writes in Node.js. How would you design this?

How would you optimize an Express route that fetches and transforms millions of records?

Your Node.js server is CPU-bound. What solutions do you suggest?

How do you leverage Redis for performance optimization in a Node.js app?

How would you scale Node.js horizontally across multiple CPU cores?



 # MONGODB

 🔍 Design & Modeling (1–10)
How would you model a many-to-many relationship (e.g., students and courses) in MongoDB?

You need to store user addresses. Should you embed them in the user document or reference a separate collection?

Your app requires multi-language support for product descriptions. How would you structure your documents?

You need version control for a document (like Git). How would you store version history?

How would you store time-series data for user activity logs?

You’re building a chat app. How would you model messages, threads, and users?

How would you model a hierarchical category system (like folders or product categories)?

When should you denormalize data in MongoDB, and what are the trade-offs?

You need to store millions of IoT sensor readings. How would you design the schema for scalability?

What schema design would you use to support soft deletes with auditing?

⚙️ Indexes & Performance (11–20)
Your query is slow on a large collection. How do you identify and fix the performance issue?

How would you decide between a compound index and multiple single-field indexes?

You have a query with multiple filters and a sort. How do you optimize it using indexes?

How do you analyze and optimize queries using the .explain() method?

You’re using regex or $text search on a field. What indexes should be used?

How would you handle performance if a collection has 100M+ documents?

How do you handle performance degradation due to large document sizes?

What indexing strategies would you use for a geo-location-based app (e.g., nearby restaurants)?

How do you ensure that indexes don't consume too much RAM?

You need to frequently run analytics on historical data. How would you optimize storage and indexing?

📚 Aggregation & Queries (21–30)
How would you perform a join between orders and users in MongoDB?

You want to calculate the top 5 selling products this month. How would you write the aggregation?

How do you group user transactions by month and calculate totals?

How would you flatten a nested array inside a document during aggregation?

How do you compute the average rating of a product from its reviews?

You want to paginate sorted results with filtering. How do you do it efficiently?

You need to enrich order data with user and product details. What aggregation stages would you use?

How would you get documents that have at least 3 items in an array field?

How do you find duplicate records based on a specific field?

How would you aggregate a count of items grouped by dynamic tags?

🔐 Security & Access Control (31–40)
How do you implement row-level security (e.g., user can only read their own documents)?

You need to store encrypted user credentials and sensitive data. How would you handle this?

How do you restrict access to a database for a read-only role?

You’re managing multi-tenant data in a shared collection. How would you isolate access per tenant?

What steps would you take to audit who accessed or modified specific data?

How do you secure connection strings and avoid leaking database credentials?

How do you enforce schema validation at the database level in MongoDB?

You need to ensure that only signed and verified JWTs can access certain documents. How do you integrate this?

How do you prevent overexposing sensitive fields (e.g., password hashes) in query responses?

How would you handle token-based access to MongoDB APIs in a microservice architecture?

⚡ Scaling, Reliability & Ops (41–50)
Your MongoDB is hitting memory and CPU limits. What steps do you take to scale it?

How do you ensure high availability for a MongoDB cluster?

Your app requires strong consistency. How would you configure MongoDB for that?

You need to isolate reads and writes across nodes. How do you configure read/write concerns?

How do you handle failover in a replica set?

How do you backup and restore large MongoDB databases?

You need to migrate data between collections or transform schema. How do you do it with zero downtime?

You’re receiving duplicate writes due to network retries. How do you ensure idempotency in MongoDB?

Your app has a global audience. How do you design a sharded cluster to minimize latency?

What monitoring tools or metrics do you track for production MongoDB?


# REACTJS

🔧 Component Design & Structure (1–10)
You have a form with 10+ input fields. How would you manage the state efficiently?

A child component needs to trigger a method in its grandparent. How would you handle this?

You need to reuse a complex UI pattern (e.g., modal, tooltip) in multiple places. How would you structure it?

You want to build a highly customizable button component. How do you support variants, sizes, and disabled states?

Your component has multiple prop combinations. How do you test or document it?

A component re-renders too often. How would you optimize it?

How do you handle conditional rendering when multiple states control different parts of the UI?

How would you convert a class-based component to a functional one using hooks?

You need to show a loading skeleton before the data is ready. How would you implement it?

You need to create a layout system like a dashboard with collapsible sidebars. How do you design the structure?

🧠 State Management (11–20)
You want to share state across multiple unrelated components. What approach would you use?

Your component needs to reset its state when a route changes. How would you implement this?

You need to cache API responses and reuse them across components. How would you manage it?

How would you implement undo/redo functionality in a drawing app?

How would you persist form data between page refreshes or route changes?

You need to debounce an input state update (e.g., search bar). How would you do it?

You want to globally track loading or error states from multiple async operations. How do you model this?

You have deeply nested state updates. How would you simplify them?

How would you prevent unnecessary state updates in a React component?

When would you use useReducer() over useState()?

📡 API Handling & Side Effects (21–30)
How do you handle race conditions in API requests in React?

You want to cancel an ongoing fetch request when the component unmounts. How would you handle it?

How do you retry a failed API call with exponential backoff?

You need to poll an API every 5 seconds until a condition is met. How would you implement it?

How would you handle file uploads and show upload progress?

How would you structure a component that fetches paginated data and supports infinite scroll?

What’s your approach to centralizing API calls and response handling in a React app?

You want to show a global error popup when any request fails. How would you build it?

How would you chain multiple async API calls in a sequence using hooks?

How would you fetch data only once per session even after page reloads?

🧩 Performance Optimization (31–40)
How do you memoize expensive computations in React?

A list component with 10,000 items lags. How do you optimize it?

How would you implement lazy loading for route-based components?

When would you use React.memo or useMemo? What are the trade-offs?

How do you profile and fix a slow-rendering component?

How do you split large JS bundles in a React app?

How would you debounce user input before triggering re-renders?

You need to load third-party scripts (like Google Maps) only when needed. How would you do that?

How do you optimize re-renders for components using Redux or Context API?

What are best practices for optimizing images in a React app?

🔐 Security, Forms & UX (41–50)
How do you prevent XSS in a React app?

How do you implement a custom input component that works with react-hook-form or Formik?

You need to build a step-based form wizard. How would you structure it?

How do you handle validation errors and show user-friendly messages?

You want to implement Google OAuth in your React app. What steps would you take?

How would you restrict access to certain routes in a React app?

How would you make a component accessible to screen readers (ARIA, keyboard nav)?

You want to persist user theme preference (dark/light). How would you implement this?

How would you implement a toast notification system in a React app?

How do you detect and respond to network status changes in a React app?


# MERN


🚀 Frontend (React.js) – 1 to 10
How do you manage form state and validation across a multi-step registration process?

A user submits a form but leaves the page before the response returns. How do you cancel the API call?

Your dashboard needs to update in real-time when another user makes a change. How do you implement this?

How do you protect a route from being accessed without authentication in React?

You want to show global loading indicators when fetching data. How do you do this cleanly?

How do you prevent unnecessary re-renders when a parent component’s state changes?

How do you share data across unrelated components without prop drilling?

You want to integrate a third-party charting library in a React app. How do you handle dynamic resizing and data updates?

How do you persist dark mode preference and apply it dynamically across the app?

How do you implement file upload and preview (e.g., profile picture)?

🛠️ Backend (Node.js + Express) – 11 to 20
How do you handle file uploads and store them in MongoDB or the filesystem?

A user wants to reset their password. How do you securely implement this?

How do you protect certain API routes to be accessible only by admins?

A payment service sends a webhook to your backend. How do you verify it and process the request?

How do you implement pagination, sorting, and filtering in an Express API?

You have a long-running task (like video processing). How do you handle it without blocking the server?

How do you rate limit login attempts on your backend?

How do you securely store and compare passwords?

How do you allow users to upload large files efficiently?

How do you structure your Express routes and controllers for a growing codebase?

📦 MongoDB (Mongoose) – 21 to 30
You need to model users, posts, and comments. How do you handle relationships?

How do you ensure that a unique field (like email) doesn’t duplicate in a high-concurrency environment?

You want to log the time a record was last updated. How do you do it in Mongoose?

How do you handle soft deletes in MongoDB?

A user can “like” multiple posts, and a post can have many “likes.” How do you model this?

How do you create a text search feature using MongoDB?

How do you write an efficient query to get a user’s posts with comments and likes?

How do you implement role-based access control using Mongoose schemas?

How do you use aggregation to generate a report of user activities per month?

You need to ensure transaction safety across multiple collections. How do you implement it?

🔄 MERN Stack Integration – 31 to 40
How do you pass JWT from the frontend and validate it in backend for protected routes?

A form is not submitting correctly from React to Express. How do you debug it?

How do you upload an image from React and store it using Express and MongoDB?

How do you implement a login system using React (frontend) and Node.js (backend)?

How do you handle CORS errors when frontend and backend are on different ports/domains?

How do you manage environment variables across frontend and backend?

How do you keep frontend state in sync after a successful database update?

How do you manage refresh tokens in the MERN stack for persistent authentication?

How do you implement a "forgot password" flow from React to Node.js and MongoDB?

How do you implement optimistic UI updates (e.g., liking a post)?

⚙️ Performance, Security, and Deployment – 41 to 50
Your MongoDB queries are slow. How do you identify and fix the problem?

How do you secure API endpoints in Express from unauthorized access?

How do you store API keys and secrets securely in a MERN stack application?

How do you deploy the MERN stack on a single VPS (like DigitalOcean)?

How do you deploy the frontend to Vercel/Netlify and backend to Railway/Render?

How do you manage sessions vs JWT tokens in a MERN application?

How do you prevent XSS and CSRF attacks in MERN stack apps?

How do you scale a MERN app to support 100k+ users?

How do you monitor logs and errors in production?

How do you set up CI/CD for a MERN stack app?



# ADVANCED MERN 


🔐 Authentication & Authorization (1–10)
How would you implement role-based access control in a MERN stack app with different user types like Admin, Editor, and Viewer?

How do you handle access token expiration and implement refresh tokens securely in the MERN stack?

How would you persist login sessions securely across browser refreshes and tab closures?

How do you invalidate all user sessions when a password is reset?

How would you build a 2FA (Two-Factor Authentication) flow with Node.js and React?

How do you prevent JWT token theft via XSS attacks in a React app?

How do you ensure email verification after user registration using MERN stack?

How would you implement OAuth (Google/Facebook) login in your MERN app?

How do you prevent CSRF attacks in a MERN stack application?

How would you handle account lockout after multiple failed login attempts?

🚀 Performance Optimization (11–20)
Your MongoDB read queries are slowing down your API. How do you optimize read performance?

How would you optimize frontend bundle size for a React production build?

How do you implement pagination and infinite scroll efficiently in a MERN blog app?

How do you reduce TTFB (Time to First Byte) in a MERN app?

How do you implement caching on both frontend (React) and backend (Node.js) to reduce DB hits?

How do you handle debounced search in React connected to a MongoDB-powered API?

Your dashboard has multiple slow aggregations. How do you handle them efficiently without blocking the UI?

How do you use Redis or in-memory caching to store frequently accessed data?

How would you perform lazy loading of large modules/components in React?

How do you track and eliminate memory leaks in a long-running Express.js app?

🧱 Architecture & Design (21–30)
How do you structure your MERN application for large-scale enterprise development?

How would you split your monolithic MERN app into microservices?

How do you share common types or models between frontend and backend in a MERN app?

How would you implement a message queue system (like RabbitMQ/Kafka) in your MERN app for async tasks?

How do you manage configuration and secrets across environments in a MERN app?

How would you implement multi-tenancy in your MERN application?

How do you version your API and ensure backward compatibility?

Your app supports multiple locales. How do you implement i18n and l10n across React and Node?

How do you implement a modular permission system for dynamic components in React based on backend roles?

How would you design a headless CMS using the MERN stack?

🔄 Real-Time Features & Communication (31–40)
How would you build a real-time chat app with MERN and WebSocket (Socket.IO)?

How do you sync real-time notifications between users in your MERN stack app?

How do you rate-limit API access and prevent abuse in real-time collaboration tools?

How would you implement a live user status (online/offline/typing) system?

How do you handle WebSocket disconnections and reconnections gracefully?

How do you scale a WebSocket-based app in production with horizontal scaling?

How do you track live edits in a collaborative document editor built with MERN?

How would you implement retry logic for failed WebSocket events?

How do you integrate server-sent events (SSE) in your MERN stack app?

How would you implement real-time analytics dashboards using MongoDB Change Streams?

⚙️ DevOps, CI/CD, and Deployment (41–50)
How would you create a CI/CD pipeline for your MERN app using GitHub Actions?

How do you deploy a MERN stack app using Docker and Docker Compose?

How would you set up Kubernetes deployment for a containerized MERN app?

How do you monitor app health and errors in real-time using tools like Prometheus + Grafana or ELK stack?

How do you implement blue-green or canary deployment strategies for zero-downtime deployment?

How do you scale your MERN app horizontally with autoscaling groups on AWS or DigitalOcean?

How do you handle frontend/backend routing conflicts in a Dockerized MERN app behind NGINX?

How do you secure environment variables in production for a MERN app?

How do you set up automatic HTTPS certificates (SSL) using Let's Encrypt for your deployed MERN app?

How do you configure log aggregation and alerting for backend and frontend logs?

