✅ Core NestJS Concepts
What is the core architecture pattern followed by NestJS?

Explain the purpose of @Module, @Controller, and @Injectable.

How is dependency injection implemented in NestJS?

How are services different from providers?

What are pipes, and where are they used in NestJS?

What are guards in NestJS? Provide a real-world example.

Explain interceptors and give a use case.

How do you handle exceptions and errors globally in NestJS?

What is the difference between useClass, useValue, and useFactory in providers?

What is ExecutionContext and where is it used?

✅ Advanced Features & Patterns
How does NestJS support middleware, and how is it different from interceptors?

What is a custom decorator in NestJS? Give an example.

How would you implement Role-Based Access Control (RBAC) in NestJS?

What are dynamic modules in NestJS? When would you use them?

How do you implement caching in NestJS (e.g., Redis)?

How does NestJS handle async providers?

How do you test a controller or service using Jest in NestJS?

Explain how request lifecycle works in NestJS.

What’s the best way to structure a scalable NestJS application?

How do you implement validation in NestJS using class-validator and class-transformer?

✅ Database & ORM (TypeORM/Prisma/Mongoose)
How do you define a schema/model in TypeORM or Mongoose in NestJS?

How do you handle transactions in TypeORM or Prisma?

What is the difference between Entity, Repository, and DataSource in TypeORM?

How do you structure services for CRUD operations efficiently?

How do you implement pagination and filtering?

✅ API & Security
How do you secure APIs in NestJS using JWT?

How is Passport.js used with NestJS for authentication?

What is the purpose of @Req() and @Res()? When should you avoid them?

How would you implement rate limiting in NestJS?

How do you prevent mass assignment and input tampering?

✅ Microservices & Communication
How does NestJS support microservices architecture?

Explain how to use Redis or Kafka transport layers in NestJS microservices.

How would you communicate between services in a distributed NestJS setup?

What are message patterns in microservices context?

How would you implement event-driven architecture with NestJS?

✅ DevOps & Deployment
How do you dockerize a NestJS application?

What CI/CD tools have you used to deploy NestJS apps?

How do you monitor and log production NestJS applications (e.g., using Winston, Prometheus)?

How do you manage environment variables and configurations in NestJS?

What are the considerations while deploying a NestJS app on AWS/GCP?

✅ Real-World Scenarios
How would you handle file uploads (e.g., images or CSV) in NestJS?

What’s your approach to building a multi-tenant API using NestJS?

How do you handle background jobs in NestJS (e.g., using Bull or Agenda)?

How would you integrate WebSocket in NestJS?

How do you deal with circular dependencies in NestJS?

✅ Generative AI (Bonus if applicable)
Have you integrated NestJS with any AI model APIs (OpenAI, Hugging Face)?

How do you stream real-time AI responses (SSE or WebSocket)?

How would you handle retries and fallbacks while calling LLM APIs?

✅ Behavioral/Team Questions
Tell me about a complex bug you solved in a NestJS project.

How do you manage large-scale application codebases in NestJS?



1. Explain the architecture of a NestJS application and how it follows the modular approach.
Answer:

NestJS uses a modular architecture, where functionality is grouped into modules (self-contained units containing controllers, services, and providers).

This allows separation of concerns, scalability, and reusability.

At least one root module (AppModule) exists. You can have feature modules for specific domains.

Example:

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

Pro Tip:
Organize each feature in its own module for maintainability, and export only what’s needed.

2. How does Dependency Injection work in NestJS?
Answer:

NestJS implements DI using the IoC (Inversion of Control) container.

Providers (services, repositories, etc.) are registered in modules and can be injected anywhere.

NestJS creates a singleton instance by default.

Example:

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}
}

Pro Tip:
Use scoped providers (Scope.REQUEST, Scope.TRANSIENT) for request-specific logic.

3. What are Dynamic Modules and when would you use them?
Answer:
Dynamic Modules allow modules to be configured asynchronously or with runtime parameters.

Example:

@Module({})
export class DatabaseModule {
  static register(options: DbOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        { provide: 'DB_OPTIONS', useValue: options },
        DatabaseService,
      ],
      exports: [DatabaseService],
    };
  }
}

Pro Tip:
Use Dynamic Modules for reusable modules like Database, Config, Logger.

4. How to resolve circular dependency in NestJS?
Answer:
Circular dependencies occur when two modules/services depend on each other.
Solutions:

Use forwardRef() in module imports.

Use event emitters or message passing instead of direct service calls.

Example:

@Injectable()
export class ServiceA {
  constructor(@Inject(forwardRef(() => ServiceB)) private b: ServiceB) {}
}

Pro Tip:
If circular dependency appears often, your architecture might need restructuring.

5. How do Guards differ from Middleware in NestJS?
Answer:

Middleware → Runs before the route handler, can modify req/res, not aware of route metadata.

Guards → Run before route execution, have access to route metadata, mainly used for authentication/authorization.

Example Guard:

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const request = ctx.switchToHttp().getRequest();
    return request.user?.role === 'admin';
  }
}

6. How do you integrate RabbitMQ with NestJS?
Answer:

NestJS provides built-in Microservices transport for RabbitMQ.

Example:

// producer.module.ts
ClientsModule.register([
  { name: 'RABBIT_SERVICE', transport: Transport.RMQ, options: {
      urls: ['amqp://localhost:5672'],
      queue: 'my_queue',
  }},
]);

// consumer.service.ts
@MessagePattern('my_event')
async handleEvent(data: any) {
  console.log(data);
}

Pro Tip:
For production, always use acknowledgement mode and dead-letter queues.

7. How would you implement caching with Redis in NestJS?
Answer:
Use @nestjs/cache-manager or cache-manager-redis-store.

Example:

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore,
        host: 'localhost',
        port: 6379,
      }),
    }),
  ],
})

export class AppModule {}


8. How to gracefully shut down a NestJS app?
Answer:
Use onModuleDestroy and beforeApplicationShutdown hooks to close DB connections or message brokers.

Example:

@Injectable()
export class AppService implements OnModuleDestroy {
  async onModuleDestroy() {
    await this.db.close();
  }
}

Pro Tip:
Enable app.enableShutdownHooks() in main.ts.

9. How to implement API versioning in NestJS?
Answer:

app.enableVersioning({
  type: VersioningType.URI,
  defaultVersion: '1',
});
Then:

@Controller({ path: 'users', version: '2' })
export class UsersV2Controller {}

10. How would you implement CQRS in NestJS?
Answer:
NestJS has a CQRS module that separates Commands (write) and Queries (read).

Example:

export class CreateUserCommand {
  constructor(public readonly name: string) {}
}
Pro Tip:
CQRS works well in event-driven and complex domains, but avoid it for simple CRUD apps.


11. How do you implement validation with Pipes?
Answer: Use ValidationPipe with DTOs and class-validator.

Example:

@Post()
create(@Body(new ValidationPipe({ transform: true })) dto: CreateDto) {}
Pro tip: Enable global validation with app.useGlobalPipes(new ValidationPipe({ whitelist:true, transform:true })).

12. How do you implement authentication (JWT) and authorization (RBAC)?
Answer: Use Passport strategies for JWT auth (@nestjs/passport, passport-jwt). Use Guards and metadata to enforce roles.

Example:

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin')
@Get() adminEndpoint(){}

Pro tip: Keep token verification centralized in a guard/strategy.

13. How to globally apply middleware, guard, or interceptor?
Answer:

Middleware: app.use() in main.ts or consumer.apply() in module.

Global guards/interceptors/pipes: app.useGlobalGuards(), app.useGlobalInterceptors(), app.useGlobalPipes().

Pro tip: Global settings affect all routes—use cautiously.

14. How do you handle file uploads (local and S3) in NestJS?
Answer: Use @nestjs/platform-express with multer for multipart uploads; stream to S3 using AWS SDK.

Example (multer):

@Post('upload') @UseInterceptors(FileInterceptor('file')) upload(@UploadedFile() file){}

Pro tip: Stream large files to S3 to avoid storing on app disk.

15. How to implement WebSockets and real-time features?
Answer: Use @WebSocketGateway() and Socket.io or ws adapter. Use rooms/namespaces for partitions.

Example:

@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('msg')
  handle(client, payload){ client.emit('msg', payload); }
}

Pro tip: For scale, use Redis adapter for socket.io to enable multi-instance pub/sub.

16. How to implement GraphQL (code-first vs schema-first)?
Answer:

Code-first: Use decorators and classes, Nest generates schema.

Schema-first: Provide SDL schema and implement resolvers.

Example (code-first):

@Resolver()
export class UsersResolver {
  @Query(()=>User) user(){ return {} }
}

Pro tip: Code-first is ergonomic for TypeScript-heavy projects.

17. How to handle GraphQL subscriptions?
Answer: Use @nestjs/graphql with WebSocket transport (Apollo subscriptions) or graphql-ws. Configure PubSub or Redis for scaling.

Pro tip: Use graphql-ws for modern, standard WebSocket GraphQL subscriptions.

18. How do you implement caching (in-memory and Redis)?
Answer: Use Nest’s CacheModule with cache-manager-redis-store for Redis.

Example:

ts
Copy
Edit
CacheModule.register({ store: redisStore, host:'localhost' })
Pro tip: Cache at multiple levels: controller, service, and HTTP responses.

19. How would you scale a NestJS app horizontally?
Answer: Run multiple instances behind a load balancer, use sticky sessions or stateless JWTs, centralize state in Redis, use DB connection pools, and ensure shared storage for file uploads.

Pro tip: Externalize session, cache, and pub/sub to Redis.

20. How to implement rate limiting?
Answer: Use @nestjs/throttler or express-rate-limit middleware.

Example:

ts
Copy
Edit
ThrottlerModule.forRoot({ ttl:60, limit:10 })
Pro tip: Rate-limit sensitive endpoints more strictly (login, APIs).

21. How do you design microservices in NestJS?
Answer: Use Nest’s microservices module with transport strategies (TCP, Redis, NATS, RabbitMQ). Design services around bounded contexts and communicate via messaging (events) or request-response.

Pro tip: Prefer event-driven architecture for decoupling; use idempotency for events.

22. How to integrate RabbitMQ/Kafka/NATS?
Answer: Use Nest’s ClientsModule for RabbitMQ (Transport.RMQ) or Kafka adapter via @nestjs/microservices. Implement producers and consumers with @EventPattern and ClientProxy.

Pro tip: Use retry/backoff and dead-letter queues for RabbitMQ; for Kafka, manage offsets and consumer group behavior.

23. How to implement distributed transactions?
Answer: Use saga pattern or two-phase commit alternatives; in microservices, prefer eventual consistency with compensating transactions triggered by events.

Pro tip: Avoid distributed transactions at DB level; handle compensation and idempotency across services.

24. How to handle request-response vs event-based patterns?
Answer:

Request-response: Use ClientProxy.send() for synchronous calls.

Event-based: Use ClientProxy.emit() to publish events and handle asynchronously.

Pro tip: Use request-response sparingly; prefer events for decoupling and scale.

25. How do you implement graceful shutdown and resource cleanup?
Answer: Enable shutdown hooks (app.enableShutdownHooks()), implement OnModuleDestroy/beforeApplicationShutdown in providers, close DB and message broker connections.

Example:

ts
Copy
Edit
@Injectable()
export class AppService implements OnModuleDestroy {
  async onModuleDestroy(){ await db.close(); }
}
Pro tip: Ensure long-running tasks are handled or drained before exit.

26. How to test controllers, services, and e2e tests?
Answer:

Unit tests: Use Jest and mock dependencies with Test.createTestingModule.

e2e tests: Use Supertest to spin up app and test endpoints.

Example (unit):

ts
Copy
Edit
const module = await Test.createTestingModule({ providers:[MyService] }).compile();
const svc = module.get(MyService);
Pro tip: Mock external HTTP and DB calls to isolate tests.

27. How to mock dependencies in Nest tests?
Answer: Provide mocked providers via useValue or useFactory in Test.createTestingModule.

Example:

ts
Copy
Edit
{ provide: UsersService, useValue: { find: jest.fn() } }
Pro tip: Reset mocks between tests to avoid leakage.

28. How to implement request context / correlation IDs?
Answer: Use request-scoped providers, middleware to attach correlation ID (req.id), or use cls-hooked/AsyncLocalStorage to store context accessible in services.

Pro tip: Avoid request-scoped providers when performance is critical; use AsyncLocalStorage.

29. How to secure endpoints against SQL/NoSQL injection?
Answer: Use parameterized queries/ORMs, validate and sanitize inputs, employ prepared statements, and limit database user privileges.

Pro tip: Use ORM-level protections and strict DTO validation.

30. How to implement API versioning?
Answer: app.enableVersioning({ type: VersioningType.URI }) and annotate controllers or routes with @Controller({ version: '2' }).

Pro tip: Consider header-based versioning for internal clients.

31. How to handle file streaming and large payloads?
Answer: Stream files to S3 using signed URLs, use streaming parsers (busboy) or multer streams, avoid buffering entire payload in memory.

Pro tip: Use presigned upload URLs to offload upload bandwidth and reduce server load.

32. How to integrate with TypeORM and manage migrations?
Answer: Use @nestjs/typeorm, define entities, and use TypeORM CLI or typeorm package to generate and run migrations in CI/CD.

Pro tip: Keep migrations in source control and run them as part of deployment pipeline.

33. How to implement multi-tenant architecture?
Answer: Options: schema-per-tenant, db-per-tenant, or shared schema with tenant_id column. Use middleware to resolve tenant and set DB context or connection for request.

Pro tip: Start with shared schema + tenant_id for simplicity; move to separate DB if tenancy grows.

34. How to implement CQRS in NestJS?
Answer: Use @nestjs/cqrs package, separate command handlers and query handlers, dispatch via CommandBus and QueryBus.

Pro tip: Use CQRS for complex domains; otherwise it adds overhead.

35. How to version database migrations and rollbacks?
Answer: Use migration tooling (TypeORM, knex, Flyway), tag migrations with timestamps, test rollbacks locally, and run migrations in CI/CD with proper backups.

Pro tip: Dry-run migrations in staging and have backup/restore plans.

36. How to implement observability (logging, metrics, tracing)?
Answer:

Logging: use winston/pino with Nest Logger.

Metrics: Prometheus client with metrics endpoint.

Tracing: OpenTelemetry integration and propagate trace context.

Pro tip: Add correlation IDs to logs for traceability.

37. How to integrate feature flags and config management?
Answer: Use @nestjs/config for environment-based config and integrate feature flags via services (e.g., LaunchDarkly) injected as providers.

Pro tip: Keep secrets in vaults (AWS Secrets Manager, HashiCorp Vault).

38. How to secure microservice communications?
Answer: Use mTLS, token-based authentication, mutual TLS for brokers, and network-level security (VPCs, private subnets).

Pro tip: Use least privilege and rotate service tokens.

39. How to implement background jobs and scheduling?
Answer: Use @nestjs/schedule for cron jobs or bull/bullmq with Redis for background job queues.

Pro tip: Use job retries, backoff, and idempotency.

40. How to implement file versioning and CDN integration?
Answer: Upload files to object storage (S3), use content-hash based file names for immutable versions, serve via CDN with proper cache-control headers.

Pro tip: Invalidate CDN caches on important updates.

41. How to implement health checks and readiness probes?
Answer: Use @nestjs/terminus to expose health endpoints that check DB, Redis, and external dependencies. Configure Kubernetes readiness/liveness probes.

Pro tip: Keep health checks lightweight and fast.

42. How to handle migrations in zero-downtime deployments?
Answer: Use backwards-compatible schema changes (add columns, avoid destructive operations), apply migrations before deploy, use feature toggles, and run blue-green/rolling deploys.

Pro tip: Split migrations into small incremental steps.

43. How to implement localization (i18n)?
Answer: Use nestjs-i18n or custom middleware to detect locale and translate messages. Store translations as JSON/PO files.

Pro tip: Keep translations in a central repo and validate with CI.

44. Best practices for error handling and exception filters?
Answer: Use built-in HttpException, custom exception filters for structured errors, and map internal errors to user-facing codes. Log exceptions centrally.

Pro tip: Return consistent error shapes (code, message, details) and avoid leaking internals.

45. How to optimize performance and reduce cold start time?
Answer:

Minimize heavy initialization logic in main.ts.

Lazy-load modules.

Use compiled JS bundles (e.g., pkg, ncc, or container images) and warm-up endpoints.

Use connection pools and caching.

Pro tip: Profile startup and identify the slowest initialization items (DB, remote calls).