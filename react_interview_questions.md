 Basic React Questions
Q.1) What is React and how does it work?

Q.2) What are the key features of React?

Q.3) What is JSX?

Q.4) What is the virtual DOM?

Q.5) How is React different from other frameworks like Angular or Vue?

Q.6) What are components in React?

Q.7) What is the difference between functional and class components?

Q.8) What is props in React? How are they used?

Q.9) What is state in React? How is it different from props?

Q.10) How do you handle events in React?

Q.11) What are controlled vs uncontrolled components?

Q.12) What is the purpose of key prop in lists?

Q.13) What is the difference between componentWillMount() and componentDidMount()?

Q.14) What is conditional rendering in React?

Q.15) How can you style React components?

Q.16) What are fragments in React?

Q.17) What is the use of useState() hook?

Q.18) What is the use of useEffect() hook?

Q.19) How do you pass data between components (parent to child, child to parent)?

Q.20) What is the purpose of defaultProps and propTypes?

🟡 Intermediate React Questions
Q.21) What is the difference between useEffect() and componentDidMount()?

Q.23) What are React hooks? Why were they introduced?

Q.24) Explain the rules of hooks.

Q.25) What is the use of useContext() hook?

Q.26) What is React.memo() and how does it help performance?

Q.27) What is the difference between useCallback() and useMemo()?

Q.28) How does reconciliation work in React?

Q.29) What is React Router and how do you use it?

Q.30) How do you handle form inputs in React?

Q.31) What are higher-order components (HOC)?

Q.32) What is the Context API?

Q.33) What are render props in React?

Q.34) What is prop drilling? How can it be avoided?

Q.35) What are portals in React?

Q.36) What are error boundaries in React?

🔴 Advanced React Questions
Q.37) What is server-side rendering (SSR) in React?

Q.38) What is hydration in React and when is it used?

Q.39) What are concurrent features in React 18?

Q.40) What is React Fiber?

Q.41) What is suspense and lazy loading in React?

Q.42) How does code splitting work in React?

Q.43) What is the difference between strict mode and normal rendering?

Q.44) What is batching in React and how does it improve performance?

Q.45) How does React handle reconciliation and diffing?

Q.46) How do you optimize a React application?

Q.47) How to implement infinite scrolling in React?

Q.48) How do you handle performance issues like unnecessary re-renders?

Q.49) What is the difference between shallow rendering and deep rendering in tests?

Q.50) How can you test React components using Jest and React Testing Library?

Q.51) What are the best practices for structuring a large-scale React application?





React Advanced & Real-World Scenario-Based Questions
What are the main differences between Redux and Context API?

How do you manage global state without Redux?

What is the purpose of useReducer() and when should you use it?

What is stale state in React and how do you avoid it?

Explain React’s batching behavior in setState() inside and outside event handlers.

What happens when you call setState() in useEffect()?

How does React handle asynchronous rendering?

How would you implement a debounce in a React input field?

What are compound components in React?

How would you handle accessibility (a11y) in a React application?

⚙️ Performance, Optimization, and Rendering
What causes unnecessary re-renders in React?

How does React.PureComponent work?

How do you identify performance bottlenecks in a React app?

How does React DevTools help in debugging performance issues?

What are some strategies for lazy loading images and components?

What is the difference between React.lazy and dynamic import()?

What are some memoization techniques in React?

When should you use useLayoutEffect() over useEffect()?

What is the React render cycle?

What are the downsides of excessive use of useMemo or useCallback?

🧪 Testing in React
How do you test components with hooks like useEffect and useState?

What is the difference between enzyme and React Testing Library?

How do you mock API calls in React tests?

What is snapshot testing in React and when is it useful?

How do you test components with React Router or Redux?

How do you simulate user input events in tests?

📦 Code Organization and Architecture
How should you structure a React project for scalability?

How do you separate UI and logic in a React component?

What are presentational and container components?

How would you architect a large React app with authentication and routing?

What are custom hooks and how do you create one?

How do you share logic across multiple components?

🛰️ Integrations and Advanced Features
How does React integrate with GraphQL (e.g., Apollo Client)?

How do you persist state across reloads in React?

How do you handle authentication in a React SPA (Single Page Application)?

What is Server Components in React and how do they differ from Client Components?

How would you use WebSockets in a React application?

How would you implement dark mode toggle in React?

🔄 Routing and Navigation
How does dynamic routing work in React Router v6?

How do you protect routes in React (e.g., for logged-in users only)?

How do you pass data between routes?

How do nested routes work in React Router?

🛠️ State Management and Forms
What’s the difference between formik, react-hook-form, and uncontrolled inputs?

How do you manage form validation in React?

How do you handle dynamic forms in React?

How do you sync React state with localStorage or sessionStorage?

🎯 Edge Cases and Debugging
How do you fix hydration mismatch in React (especially in SSR)?

What happens if two states are updated in a row in the same component?

Why should you avoid modifying state directly in React?

How do you debug memory leaks in React?





React Deep Concepts & Internals
What is the Virtual DOM and how does React use it?

Explain reconciliation in React.

What is fiber architecture in React?

How does React determine which components need to re-render?

What is React’s diffing algorithm?

What are keys in React and why are they important?

What happens if you use an array index as a key in a list?

How does React use the concept of synthetic events?

What is the difference between synthetic and native DOM events?

How does React optimize DOM updates?

⚛️ Hooks Deep Dive
Can you call a hook conditionally? Why or why not?

Why does useEffect sometimes run twice in development?

How does the cleanup function in useEffect work?

What are the best practices for using useEffect?

What are some use cases of useImperativeHandle?

How does useRef differ from useState?

How would you use useRef to store previous props?

Explain the role of useDeferredValue and useTransition.

When would you use useSyncExternalStore?

What problem does useId solve in concurrent rendering?

🧱 Component Patterns and Reusability
What are higher-order components (HOCs)?

What is the render props pattern?

How do you build a reusable modal component in React?

What is a controlled vs uncontrolled component?

How do you create a wizard (multi-step) form in React?

What are smart and dumb components?

How do you implement role-based access control in a component?

How can you decouple logic from a component using hooks?

🌐 Server-Side Rendering & Next.js Concepts
What is server-side rendering (SSR) and how does React support it?

How does hydration work in SSR?

What are the performance implications of SSR vs CSR?

What is static site generation (SSG) and how is it different from SSR?

How does Next.js improve React SSR?

What is Incremental Static Regeneration (ISR) in Next.js?

What is the getServerSideProps and getStaticProps lifecycle in Next.js?

🧵 Concurrent Mode and Suspense
What is React Suspense and how does it work?

How does React Suspense help with code splitting?

How do you show a fallback while a component loads?

What is the difference between Suspense and Error Boundaries?

What is Concurrent Mode and what problems does it solve?

🧨 Error Boundaries and Stability
What is an error boundary and how is it implemented?

What types of errors can error boundaries catch?

Why can’t error boundaries catch errors in event handlers?

How would you handle API failure gracefully in a React UI?

How do you create a fallback UI for a broken component?

🔗 Real-world Architecture and Maintenance
How do you implement feature toggles in React?

What is tree shaking and how does it relate to React?

How do you handle large-scale component libraries?

How do you build a micro frontend with React?

How do you version components across teams in a mono-repo or design system?



 React Architecture & Design Decisions
How do you structure a large-scale React application?

What is the atomic design methodology in React?

How do you manage feature modules in a React mono-repo?

When should you use compound component pattern?

How would you implement plugin architecture in React?

What are the trade-offs of colocating state vs lifting state up?

What is the difference between presentational and container components in modern apps?

How can you share logic between unrelated React components?

⚛️ Hooks (Advanced Use Cases)
How do you throttle or debounce API calls with hooks?

What is a custom hook and how do you manage side-effects inside it?

How do you persist state between sessions using hooks?

How would you use useMemo to optimize a heavy computation?

When is useLayoutEffect preferred over useEffect?

Can hooks replace Redux? When should you choose which?

What are stale closures in hooks and how do you handle them?

🧵 Performance Optimization & Memory Management
How do you prevent unnecessary re-renders in React?

What are the differences between memoization at component vs hook level?

How does React optimize rendering with React.memo()?

What tools can you use to profile React performance?

What is the role of React.StrictMode in performance debugging?

🎯 Testing & Best Practices
How do you test React components using RTL (React Testing Library)?

How would you mock context and hooks in tests?

What is the difference between shallow and full rendering in tests?

How do you test async components (like data fetching)?

How do you test custom hooks?

🧰 State Management (Beyond useState)
How does Zustand or Jotai compare to Redux?

When should you use Context API vs a state library like Redux or Recoil?

How can you sync state across multiple tabs in React?

How do you implement optimistic UI updates in React?

What is a selector in state management and why is it useful?

🌍 Routing, Navigation & Lazy Loading
How do nested routes work in React Router v6?

How can you protect routes based on user roles?

What is code splitting and how is it done with React Router?

How do you handle route-based lazy loading with React.lazy()?

How would you create a custom 404 page in React Router?

💬 Forms & Controlled Input
How do you manage complex form state in React?

What are the benefits of using Formik or React Hook Form?

How would you implement conditional form fields in React?

How do you validate dynamic form fields?

How do you handle file uploads in React forms?

🧠 React with TypeScript & Advanced Typing
How do you type props for function components in TypeScript?

How do you type children in a component?

What is React.FC and when should you avoid it?

How do you type a custom hook return value?

How do you define and use discriminated unions in React props?

⚙️ DevOps, Build, and Deployment
How do you improve the bundle size of a React app?

What is tree shaking and how does it work in React builds?

How do you analyze a production bundle in React?

How would you implement environment-based configurations in React?

What is a PWA and how do you turn your React app into one?






Advanced React Behavior & Internal Workings
What is the React reconciliation process?

How does React handle concurrent rendering?

What is the difference between synchronous and concurrent rendering in React?

What is the fiber architecture in React?

How do batched updates work in React 18?

How does React differ from frameworks like Vue or Svelte in terms of rendering?

What is the significance of keys in a list? Why shouldn’t you use indexes?

How does React internally detect state changes?

Why does updating the same state value still cause a re-render?

What happens if you update state during rendering?

🪝 Deep Dive into Hooks
How do you build a custom useFetch hook?

Why should you avoid putting hooks inside conditions or loops?

What are the rules of hooks and how does ESLint enforce them?

How do you use useReducer to manage state in a complex form?

What are the caveats of using useRef for storing values?

🧠 Context API & Prop Drilling
How do you handle deeply nested prop passing without prop drilling?

How can you create a theme switcher using React Context?

What are performance implications of using Context API?

How can you memoize Context values to prevent unnecessary re-renders?

What is a potential downside of using a single global context?

🧪 Testing React (Real-World)
How do you test a component that fetches data from an API?

How do you test components that use useEffect?

How can you test form validation logic in React?

How do you simulate a user event in React Testing Library?

How would you test error boundaries?

🔁 Lifecycle & Component Patterns
How do you replicate componentDidMount using hooks?

How do you safely use async operations in useEffect?

What are render props and when would you use them?

What is a Higher-Order Component (HOC)?

How do HOCs compare to custom hooks?

🚀 Performance, Optimization & Lazy Loading
How can you lazy load images in React?

How do you split vendor and app code in a React project?

What are some real-world use cases for React.memo?

How do you avoid memory leaks in React apps?

What strategies can you use to improve first paint performance?

🔗 Integration with APIs and Services
How do you handle canceling API requests in React?

How can you use WebSockets in a React app?

What is the best way to handle GraphQL in React?

How do you integrate third-party libraries (e.g., Google Maps, Chart.js) with React?

How do you manage polling intervals in React for live data?

📦 React + Ecosystem
What are some advantages of using Vite over CRA?

How does React integrate with Next.js?

How do you implement server-side rendering (SSR) in React?

What is hydration in React and when does it happen?

How do you handle React apps with internationalization (i18n)?

⚖️ Code Quality, Dev Experience, and Deployment
How do you configure ESLint and Prettier in a React project?

How do you track and fix memory leaks in production React apps?

What is source map and how is it useful for debugging?

How do you implement A/B testing in a React app?

What strategies would you use to handle feature flags in React?




Core React
What are React elements and how do they differ from components?

What happens during the React reconciliation process?

What is the virtual DOM and how does React use it?

How does React identify which components to re-render?

What are controlled vs uncontrolled components in React?

🔄 State & Props
What happens if you mutate state directly in React?

How do you pass data from a child component to a parent?

What is prop drilling and how can it be avoided?

How can you memoize values derived from props?

When would you lift state up in React?

⚙️ Hooks (Advanced)
What rules must be followed when using React hooks?

What is the difference between useEffect and useLayoutEffect?

How would you use useReducer instead of useState?

What is the purpose of useRef in functional components?

How does useMemo help optimize performance?

💡 Custom Hooks
How do you structure a custom hook?

How do custom hooks share logic between components?

Can custom hooks use other hooks inside them?

How do you handle side effects in custom hooks?

How would you debug a custom hook?

🧱 Component Design
What is the difference between presentational and container components?

What is a higher-order component (HOC) and when would you use one?

How do render props differ from HOCs?

How can you enforce prop types in a component?

How do you memoize a functional component?

📦 React Router / Navigation
How do you protect routes in a React app?

What is the difference between useNavigate and <Navigate />?

How does dynamic routing work in React Router?

How do you pass state via React Router navigation?

What happens when a route is not matched?

🔁 React & API Integration
How do you handle errors in API calls with hooks?

How can you cancel a fetch request when a component unmounts?

How do you manage loading and error states when calling APIs?

How do you retry failed API requests in React?

How would you implement polling in React?

🧰 React Context & State Management
What are the limitations of using React Context for global state?

How do you optimize performance when using React Context?

How does context differ from Redux or Zustand?

How do you persist context state between page reloads?

What is the best way to reset context state?

🧪 Testing React
How do you test hooks like useEffect and useState?

How do you mock an API call in a test?

What is the purpose of the React Testing Library?

How do you simulate user events in tests?

How do you test conditional rendering in a component?

⚡ Performance & Optimization
How does React’s batching mechanism work?

What is the difference between synchronous and concurrent rendering?

What is a React key prop and why is it important?

How do you profile React component performance?

What causes unnecessary re-renders and how can you avoid them?


🧠 For Senior-Level Interviews: Add More Depth In
To fully prepare for senior-level interviews, you’ll want to supplement with:

1. Architecture & Design Patterns in React
How would you design a scalable React component architecture?

What is compound component pattern?

What is the provider pattern and how do you use it in real-world apps?

How do you abstract shared behavior across unrelated components?

How do you organize large-scale React projects with feature-based folder structure?

2. Advanced Performance Optimization
How would you handle performance in a React app with thousands of DOM nodes?

What are common causes of memory leaks in React?

How do React 18 features like automatic batching and concurrent rendering affect performance?

3. React 18 & Concurrent Features
What is the difference between legacy and concurrent mode?

How does useTransition help with UX?

What is the purpose of startTransition?

4. State Management at Scale
How would you choose between Redux Toolkit, Zustand, Recoil, Jotai, and React Context?

How would you persist and rehydrate Redux state securely?

How do you split Redux store into multiple slices and combine them?

5. Testing at Scale
How do you test complex user workflows?

How do you mock context providers or Redux stores in tests?

6. Security in React
How do you prevent XSS attacks in React apps?

What are best practices for securing React SPAs?

7. TypeScript with React
How do you type component props and state using TypeScript?

How do you type generic hooks or HOCs?

8. SSR, SSG, and Hydration
What is hydration in React and how does it work in SSR apps?

How do you use getServerSideProps or getStaticProps in Next.js?

9. Deployment and Monitoring
How do you measure front-end performance after deployment?

What tools do you use for logging and error tracking?








1. Component Architecture Scenario
🚧 Scenario: You're building a dashboard for a SaaS product with charts, filters, sidebars, modals, and role-based views.
🔎 Question:
How would you structure your React app to keep it modular, scalable, and testable?
What patterns would you use?

👉 Follow-ups:

How would you organize files and folders?

Would you use feature-based or domain-driven structure?

How would you implement shared layouts?

🪢 2. State Management Decision Scenario
🚧 Scenario: The app needs to share user data, theme preferences, and notification settings across deeply nested components.
🔎 Question:
Would you use Redux, Context API, or a different library (like Zustand, Recoil)?
Why?

👉 Follow-ups:

When would Context be enough vs. Redux Toolkit?

How do you handle state persistence?

📦 3. Micro-Frontend Integration
🚧 Scenario: Your team is splitting a large monolith into micro-frontends. You're responsible for the user profile section.
🔎 Question:
How would you architect your part of the app to work independently, yet integrate with the shell app?

👉 Follow-ups:

What framework/library would you use for micro-frontends? (e.g., Module Federation)

How do you share state and routing?

⚛️ 4. Handling React Performance Bottlenecks
🚧 Scenario: Your app is laggy when rendering large lists and charts.
🔎 Question:
How would you identify the bottlenecks and optimize performance?

👉 Follow-ups:

Would you use memoization? Virtualization?

How do tools like React Profiler or Web Vitals help?

🧪 5. Reusable Component Design
🚧 Scenario: You need to design a highly reusable <DataTable /> component with support for sorting, filtering, and pagination.
🔎 Question:
How would you design this component to be reusable across different modules?

👉 Follow-ups:

How do you handle prop drilling or shared logic?

Would you use composition or render props?

📜 6. Server-Side Rendering & Hydration
🚧 Scenario: You’re working on a Next.js e-commerce app where SEO is crucial.
🔎 Question:
How would you decide between SSR, SSG, and CSR?
How does hydration work?

👉 Follow-ups:

How do you preload data?

How do you avoid hydration mismatch errors?

🧵 7. Multi-Theme System Architecture
🚧 Scenario: Product team wants light, dark, and high-contrast themes.
🔎 Question:
How would you architect a scalable multi-theme system in React?

👉 Follow-ups:

CSS-in-JS or CSS variables?

How do you sync theme state across tabs?

📊 8. Analytics & Error Tracking
🚧 Scenario: PM asks to log all user interactions and track feature usage.
🔎 Question:
Where and how would you place instrumentation in a React app?

👉 Follow-ups:

Would you use middleware? Custom hooks?

How do you avoid polluting business logic?

🛡 9. Authentication & Route Guarding
🚧 Scenario: Your app has protected routes and needs both public and private access handling.
🔎 Question:
How would you design the authentication flow and protect routes in React?

👉 Follow-ups:

Would you use HOCs or custom route components?

How do you handle JWT expiration and token refresh?

📂 10. Lazy Loading & Code Splitting
🚧 Scenario: Your app’s bundle size is slowing down initial load time.
🔎 Question:
How would you implement code splitting and lazy loading in React?

👉 Follow-ups:

What tools or techniques do you use? (React.lazy, dynamic import, etc.)

How do you preload critical components?



