🔹 1. Core TypeScript Fundamentals

Q.1) What are the key differences between type aliases and interface in TypeScript? When would you prefer one over the other?

Q.2) Explain the difference between unknown, any, and never. Give real-world use cases.

Q.3) What is structural typing in TypeScript, and how does it differ from nominal typing?

Q.4) How does TypeScript’s type inference work? What are some limitations of inference?

Q.5) Can you explain declaration merging in TypeScript with examples?

🔹 2. Advanced Types

Q.6) What are discriminated unions and how do they help with type-safe exhaustive checks?

Q.7) Explain mapped types (Partial<T>, Readonly<T>, Pick<T>, etc.). How would you create a custom mapped type?

Q.8) What are conditional types in TypeScript? Can you implement a utility type like Exclude<T, U>?

Q.9) What are template literal types? Show an example of enforcing API endpoints like "GET /users" or "POST /users".

Q.10) Explain how intersection types work. What are some pitfalls when combining multiple types?

🔹 3. Generics & Utility

Q.11) How do generics improve type safety? Can you explain with an example of a generic Repository<T> class?

Q.12) What are generic constraints (extends) and why are they useful?

Q.13) How would you write a generic function that accepts only array-like structures?

Q.14) What’s the difference between keyof, typeof, in, and infer in TypeScript?

Q.15) Can you write a utility type that makes all properties in a type optional except one?

🔹 4. Classes, OOP & Design

Q.16) Explain the differences between public, private, protected, and readonly in TypeScript.

Q.17) How does TypeScript implement abstract classes vs interfaces? When would you use each?

Q.18) How does implements differ from extends in TypeScript classes?

Q.19) Can you explain mixins in TypeScript and when you’d use them?

Q.20) How would you enforce immutability in class design using TypeScript?

🔹 5. Functions, Async, and Error Handling

Q.21) What is the difference between overloads and union types for function signatures? Which is better in practice?

Q.22) How does TypeScript handle async/await return types? Can you strictly type a function returning a Promise?

Q.23) How would you type a function that accepts a callback which can return either sync or async values?

Q.24) How do you ensure exhaustive error handling in TypeScript for promises and API responses?

Q.25) What is the difference between the void and never return types in functions?

🔹 6. Real-World & Architecture

Q.26) How do you type-check JSON API responses safely in TypeScript? Do you use runtime validation (e.g. Zod, io-ts)?

Q.27) How do you handle third-party JavaScript libraries that don’t have TypeScript types?

Q.28) How do you structure TypeScript in a large-scale monorepo or microservices setup?

Q.29) How does TypeScript improve DX (developer experience) in React/Angular/Vue projects? Give examples.

Q.30) What are some common pitfalls when migrating a large JavaScript codebase to TypeScript?


# -----------------------------------------------------------

1. What are the key differences between type aliases and interface? When prefer one over the other?

Answer:

interface is primarily for describing object shapes and supports declaration merging (multiple interface declarations with same name merge).

type aliases are more flexible: they can name primitives, unions, tuples, mapped/conditional types, etc. They cannot be merged.

Use interface for public object/contract shapes (libraries, APIs) when you want extension via extends and merging. Use type when you need unions, tuples, or complex type expressions.

interface A { x: number }
interface A { y: string } // merged -> { x: number; y: string }

type T = { x: number } | { y: string } // union only possible with type

2. Explain unknown, any, and never. Use-cases.

Answer:

any: disables type checking. Use when migrating or interfacing with untyped libs — avoid for long-term code.

unknown: safer alternative to any. Value must be narrowed before use. Good for external input.

never: type for values that never occur (e.g., functions that always throw or infinite loops). Useful in exhaustive checks.

let a: any;    // anything, dangerous
let u: unknown; // safer, need checks: if (typeof u === 'string') ...
function fail(): never { throw new Error(); }

3. What is structural typing vs nominal typing?

Answer:
TypeScript uses structural typing: compatibility is based on members (shape), not the declared name. If two types have compatible shapes, they are assignable. Nominal typing relies on explicit identities (class names). Structural typing enables flexible refactoring and duck-typing.

type P = { x: number }
type Q = { x: number }
const p: P = { x: 1 }
const q: Q = p // allowed (structural)

4. How does TypeScript’s type inference work? Limitations.

Answer:
TS infers types from initializers, function return expressions, contextual types (from generics, parameters). Limitations: complex control flows, wide any sources, overloaded function inference, and when generic type parameters cannot be inferred (need explicit generics). Type widening (e.g., const a = [] becomes any[]) can surprise — use as const or annotations.

const x = 5; // inferred number
const arr = [] as number[]; // avoid any[]

5. Declaration merging in TypeScript — explain.

Answer:
interface and namespaces allow declaration merging: multiple declarations of same interface or namespace are combined. Useful for augmenting library types (module augmentation). type aliases do not merge.

interface Window { app?: string }
interface Window { user?: string } // merged -> Window has app and user

6. Discriminated unions and exhaustive checks.

Answer:
A discriminated union uses a common literal property (tag) to distinguish variants. With switch + never-based check, you can enforce exhaustive handling.

type Shape =
  | { kind: 'circle'; r: number }
  | { kind: 'rect'; w: number; h: number }

function area(s: Shape) {
  switch (s.kind) {
    case 'circle': return Math.PI * s.r * s.r
    case 'rect': return s.w * s.h
    default: return assertNever(s) // compile-time safety
  }
}
function assertNever(x: never): never { throw new Error('Unexpected'); }

7. Mapped types — how they work; example custom mapped type.

Answer:
Mapped types transform properties of an object type using a for … in syntax over keyof T. Built-ins: Partial, Readonly, Pick, Record.

type Mutable<T> = { -readonly [K in keyof T]: T[K] } // remove readonly
type Nullable<T> = { [K in keyof T]: T[K] | null }

8. Conditional types — explain and example (Exclude).

Answer:
Conditional types compute types based on conditions: T extends U ? X : Y. Exclude<T, U> removes from T those types assignable to U.

type Exclude<T, U> = T extends U ? never : T
type T = Exclude<'a' | 'b' | 'c', 'b'> // 'a' | 'c'

9. Template literal types — example enforcing API strings.

Answer:
Template literal types build string literal types.

type Method = 'GET' | 'POST'
type Path = '/users' | '/orders'
type Endpoint = `${Method} ${Path}`

const e: Endpoint = 'GET /users' // valid


Useful for typed HTTP routes, event names, etc.

10. Intersection types — how they work and pitfalls.

Answer:
Intersections combine types: A & B must satisfy both. Pitfalls: conflicting property types (e.g., x: string & number becomes never), mixing unions can produce unintuitive results. Use when composing traits.

type A = { a: number }
type B = { b: string }
type C = A & B // { a: number; b: string }

11. Generics — how they improve type safety; example Repository<T>.

Answer:
Generics allow type-safe abstractions and code reuse without losing specificity.

class Repository<T extends { id: string }> {
  private store = new Map<string, T>();
  save(item: T) { this.store.set(item.id, item) }
  find(id: string): T | undefined { return this.store.get(id) }
}

12. Generic constraints (extends) and why useful.

Answer:
extends limits generic types to those with expected properties/shape, enabling safe operations within function/class.

function pluck<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

13. Generic function that accepts array-like structures.

Answer:
Use a generic with constraint ArrayLike<T> or index signature.

function first<T>(xs: ArrayLike<T>): T | undefined {
  return xs.length ? xs[0] : undefined
}

14. Differences between keyof, typeof, in, and infer.

Answer:

keyof T: union of property names of T.

typeof x (type-level): gets type of value x (only in type context).

in (mapped type): iterate keys K in keyof T.

infer (in conditional types): extracts type parts.

type K = keyof {a:1,b:2} // 'a'|'b'
type T = typeof 5 // number
type ExtractReturn<T> = T extends (...args:any)=>infer R ? R : never

15. Utility type: make all props optional except one.

Answer:
Use mapped/conditional types.

type RequireOnly<T, K extends keyof T> = Required<Pick<T, K>> & Partial<Omit<T, K>>

16. public, private, protected, readonly in TS.

Answer:

public (default): accessible anywhere.

private: only inside class (TS-checked).

protected: class + subclasses.

readonly: can be set only at declaration or in constructor — enforces immutability.

class C { public a=1; private b=2; protected c=3; readonly id: string; }

17. Abstract classes vs interfaces — when use each.

Answer:

abstract class: can include implementation details, protected members, constructors. Use when you want shared behavior and state.

interface: pure contract — multiple interface inheritance possible. Use for flexible type contracts and when implementing by multiple classes.

18. implements vs extends in TS classes.

Answer:

extends inherits implementation and type from a base class.

implements enforces that a class matches a type/interface but doesn’t inherit implementation.

interface I { m(): void }
class Base { b() {} }
class C extends Base implements I { m() {} }

19. Mixins in TypeScript and use cases.

Answer:
Mixins simulate multiple inheritance by copying behavior into target classes. Use when composing orthogonal behaviors.

type Constructor<T = {}> = new(...args:any[]) => T
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    created = Date.now()
  }
}

20. Enforce immutability in class design using TS.

Answer:
Use readonly and return frozen objects or expose only immutable views. Use Readonly<T> for types, and avoid exposing mutating methods.

class Person { constructor(public readonly name:string){} }
const p: Readonly<{x:number}> = { x: 1 }

21. Overloads vs union types for functions. Which better?

Answer:

Overloads provide multiple call signatures with a single implementation body; good when behavior varies by argument types in a way unions can't describe precisely.

Union types are simpler but may lose precise return types. Prefer overloads when return type depends on argument type.

function parse(s: string): string[]
function parse(b: Buffer): string[]
function parse(x: any) { /* impl */ }

22. Typing async/await return types strictly.

Answer:
An async function returns Promise<T>. Type the function return explicitly for clarity.

async function f(): Promise<number> { return 1 }

23. Typing a function that accepts callbacks returning sync or async values.

Answer:
Union return T | Promise<T>; or use generic with Awaited<T> to handle both.

type MaybePromise<T> = T | Promise<T>
function use<T>(cb: () => MaybePromise<T>) { return Promise.resolve(cb()) }


Use Awaited<T> (TS 4.5+) to get resolved type.

24. Ensuring exhaustive error handling for promises and API responses.

Answer:
Combine static types (discriminated unions) with runtime validation (Zod, io-ts) and always handle .catch. Use Result<T, E> patterns to force callers to handle errors.

type ApiRes = { ok: true; data: User } | { ok: false; err: string }

25. Difference between void and never return types.

Answer:

void: function may return undefined or no meaningful value.

never: function does not return (throws or infinite loop). Use for unreachable/exhaustiveness checks.

26. Type-checking JSON API responses — runtime validation.

Answer:
Use runtime schema validation libraries (Zod, io-ts, runtypes). Static types are not runtime checks; always validate untrusted input.

import { z } from 'zod'
const User = z.object({ id: z.string(), name: z.string() })
const parsed = User.parse(JSON.parse(body)) // throws on invalid

27. Handling third-party JS libs without types.

Answer:

Install @types/xxx if available.

If not, create declare module 'lib' with minimal typings.

Gradually add proper type definitions or use unknown + runtime checks.

declare module 'legacy-lib' {
  export function someFn(...args:any[]): any
}

28. Structuring TypeScript in large monorepos/microservices.

Answer:

Use tsconfig project references for compile performance and clear boundaries.

Share types via a packages-only @org/types package, or use codegen for API contracts (OpenAPI, GraphQL).

Keep strict noImplicitAny, strict on; have per-package tsconfigs.

29. TypeScript improving DX in React/Angular/Vue — examples.

Answer:

Strong typing for Props, state, and hooks reduces runtime bugs.

Auto-complete and refactor safety: rename props, actions, and route names.

Strict typing improves component contracts; e.g., typed Redux thunks, typed Apollo responses.

type Props = { onClick: (id: string) => void }
const Comp: React.FC<Props> = ({onClick}) => ...

30. Common pitfalls when migrating large JS -> TS.

Answer:

Using any as a shortcut (loses benefits).

Not validating runtime data (assuming compile-time types imply runtime safety).

Misconfigured tsconfig (loose flags).

Circular type dependencies.

Long compile times — solve via incremental builds and project references.


# --------------------------------------------------------------

1. Type (alias)

A type in TypeScript is a way to name a type definition so you can reuse it.
It can describe primitives, objects, unions, intersections, tuples, etc.

type UserID = string;  // alias for string
type Point = { x: number; y: number }; // object shape

const id: UserID = "abc123";
const p: Point = { x: 10, y: 20 };


2. Union ( | )

A union type means a value can be one type OR another.
It’s like a logical OR between types.

type Status = "pending" | "success" | "error"; // union of literals
type Input = string | number; // string OR number

let s: Status = "pending";  // ✅ allowed
s = "success";              // ✅ allowed
// s = "done";              // ❌ not allowed

function printId(id: string | number) {
  console.log("ID:", id);
}

3. Intersection ( & )

An intersection type means a value must satisfy ALL types at once.
It’s like a logical AND between types.

type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee; // must have both

const emp: Staff = { name: "Alice", id: 101 }; // ✅

🔹 What is Type Inference?

Type inference means TypeScript automatically figures out the type of a variable, function, or expression without you explicitly writing it.

let x = 10; // TypeScript infers "number"


🔹 What are Generics?

Generics allow you to write reusable, type-safe code by making types parameters instead of hardcoding them.

👉 Instead of writing a function/class/type for each possible type, you define it once and let the caller decide the type.

Think of them as variables for types.

function wrap<T>(value: T): { value: T } {
  return { value };
}

const n = wrap(42);       // { value: number }
const s = wrap("hello");  // { value: string }


🔹 Generic Constraints (extends)

You can restrict what types are allowed.

function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

getLength("hello"); // ✅ string has length
getLength([1, 2, 3]); // ✅ array has length
// getLength(42); ❌ number has no length


🔹 1. keyof

Produces a union of property names (keys) of a given type.

type Person = { id: number; name: string; age: number };

type Keys = keyof Person;  
// "id" | "name" | "age"

let k: Keys = "id";   // ✅ allowed
// k = "salary";      // ❌ error


2. typeof

Gets the type of a value/variable (not runtime typeof, but compile-time TypeScript version).

const user = { id: 1, name: "Alice" };

type UserType = typeof user;
// { id: number; name: string }

const anotherUser: UserType = { id: 2, name: "Bob" }; // ✅ works


🔹 3. in

Used inside mapped types to iterate over keys of a union (often from keyof).

type Options = "dark" | "light" | "system";

type Config = {
  [K in Options]: boolean;
};

// Equivalent to:
type Config = {
  dark: boolean;
  light: boolean;
  system: boolean;
};


🔹 4. infer

Special keyword used inside conditional types to extract and name a type.

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type Result = ReturnType<Fn>; 
// string




