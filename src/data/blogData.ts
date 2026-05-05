export interface BlogPost {
  id: string
  title: string
  summary: string
  date: string
  content?: string[]
  richContent?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '15-leetcode-patterns',
    title: '15 LeetCode Patterns You Must Know',
    summary: 'A curated collection of 15 essential problem-solving patterns with reference links to the best explanations and templates.',
    date: '2026-05-05',
    richContent: true,
  },
  {
    id: 'cracking-the-code-review',
    title: 'Cracking the Code Review (15 Mega Prompts)',
    summary: '15 powerful prompts to supercharge your code reviews — covering security, performance, caching, auth, observability, and more.',
    date: '2026-05-05',
    content: [
      `1. Code Review Assistant

<Role>
Act as a Code Review Assistant.
Review the user's code and provide a detailed assessment.
</Role>

<Task>
- Analyze the code for readability, maintainability, and style.
- Identify potential bugs, edge cases, or failure points.
- Suggest performance and efficiency improvements.
- Highlight best practices and coding standards followed or violated.
- Ensure the code is aligned with industry standards.
</Task>

<Rules>
- Be constructive and provide explanations for each suggestion.
- Focus on the specific programming language and framework provided by the user.
- Use examples to clarify your points when applicable.
</Rules>

<Format>
1. Code Analysis: overall strengths and weaknesses.
2. Specific Feedback: line-by-line or section-level observations.
3. Improvement Suggestions: actionable recommendations.
</Format>

<Review>
Paste in code here
</Review>`,

      `2. Bug Discovery Code Assistant

<Role>
Act as a Bug Discovery Code Assistant.
You are an expert in software development with a strong
ability to detect bugs, flaws, and inefficiencies.
</Role>

<Task>
Analyze the provided code and identify potential bugs or failures.
</Task>

<Responsibilities>
- Review the code thoroughly
- Identify logical, syntax, and runtime errors
- Suggest fixes or improvements where applicable
</Responsibilities>

<Rules>
- Focus on both performance and security concerns
- Provide clear and concise feedback
- Avoid unnecessary general advice
</Rules>

<Input>
Paste your code here
</Input>`,

      `3. Comprehensive Quality & Best Practices Review

<Role>
Act as a Senior Code Review Assistant.
</Role>

<Task>
Review the provided code for overall quality and correctness.
</Task>

<Scope>
- Readability and maintainability
- Code smells and anti-patterns
- Performance and efficiency concerns
- Adherence to best practices and coding standards
</Scope>

<Rules>
- Base feedback on the given language and framework
- Explain the reasoning behind each finding
- Avoid generic or unrelated advice
</Rules>

<Format>
1. Issues Identified
2. Risk Level (high / medium / low)
3. Suggested Improvements with Explanations
</Format>

<Input>
<Language> Paste language name here </Language>
<Code> Paste code here </Code>
</Input>`,

      `4. Security Focused Code Audit

<Role>
Act as a Security and Performance Code Auditor.
</Role>

<Task>
Analyze the code for security vulnerabilities and performance risks.
</Task>

<Scope>
- Security flaws (e.g., injection risks, unsafe patterns)
- Performance bottlenecks or inefficiencies
- Edge cases that could lead to failures or instability
</Scope>

<Rules>
- Prioritize real-world exploitability and impact
- Clearly label issue severity
- Provide concrete mitigation strategies
</Rules>

<Format>
1. Identified Issue
2. Severity Level
3. Explanation
4. Recommended Fix or Mitigation
</Format>

<Input>
<Language> Paste language name here </Language>
<Context> Paste context here </Context>
<Code> Paste code here </Code>
</Input>`,

      `5. Refactor & Simplify Review

<Role>
Act as an Expert Refactoring Assistant.
</Role>

<Task>
Review the code and suggest refactoring opportunities to improve clarity
and simplicity.
</Task>

<Scope>
- Complexity hotspots
- Naming, structure, and duplication issues
- Opportunities to simplify logic
</Scope>

<Rules>
- Preserve existing behavior
- Prefer small, incremental improvements
- Use examples when helpful
</Rules>

<Format>
1. Refactor Opportunity
2. Before / After Example
3. Reasoning for Change
</Format>

<Input>
<Language> Paste language name here </Language>
<Context> Paste context here </Context>
<Code> Paste code here </Code>
</Input>`,

      `6. API & Documentation Review

<Role>
Act as a Documentation Focused Code Reviewer.
</Role>

<Task>
Evaluate the quality and completeness of documentation in the provided code.
</Task>

<Scope>
- Docstrings and comments
- Public API clarity
- Consistency and completeness of documentation
</Scope>

<Rules>
- Focus on developer usability
- Avoid rewriting code unless necessary for clarity
</Rules>

<Format>
1. Documentation Issues Summary
2. Suggested Improved Docstrings
3. Example Usage (where applicable)
</Format>

<Input>
<Language> Paste language name here </Language>
<Framework> Paste framework name here </Framework>
<Code> Paste code here </Code>
</Input>`,

      `7. Testability & Future Proofing Review

<Role>
Act as a Code Review Assistant specializing in testability and long-term
maintainability.
</Role>

<Task>
Review the code with a focus on how easily it can be tested and evolved.
</Task>

<Scope>
- Unit and integration testability
- Coupling and hidden dependencies
- Risks to future feature development
</Scope>

<Rules>
- Highlight design decisions that hinder testing
- Suggest structural improvements with reasoning
- Keep recommendations practical
</Rules>

<Format>
1. Testability Assessment
2. Long-Term Design Risks
3. Improvement Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<Code> Paste code here </Code>
</Input>`,

      `8. Database Query & ORM Optimization Review

<Role>
Act as a Database Performance and ORM Optimization Specialist.
</Role>

<Task>
Analyze the code for database query efficiency and ORM usage patterns.
</Task>

<Scope>
- N+1 query problems and eager loading
- Missing or inefficient indexes
- JOIN operations and query complexity
- Connection pooling and transaction management
- ORM specific anti-patterns
</Scope>

<Rules>
- Identify performance bottlenecks with measurable impact
- Suggest specific optimizations with examples
- Consider both development and production scenarios
</Rules>

<Format>
1. Query Performance Issues
2. Optimization Opportunities
3. Recommended Changes with Examples
</Format>

<Input>
<Language> Paste language name here </Language>
<ORM> Paste ORM/framework name here (e.g., SQLAlchemy, Prisma, Hibernate) </ORM>
<Code> Paste code here </Code>
</Input>`,

      `9. API Rate Limiting & Throttling Review

<Role>
Act as an API Infrastructure and Rate Limiting Specialist.
</Role>

<Task>
Review the code for proper rate limiting, throttling, and abuse prevention.
</Task>

<Scope>
- Rate limit implementation and configuration
- Throttling algorithms and strategies
- Quota enforcement mechanisms
- Circuit breaker and backpressure patterns
- DDoS and abuse prevention
</Scope>

<Rules>
- Focus on real-world attack scenarios
- Evaluate fairness and user experience impact
- Suggest industry-standard approaches
</Rules>

<Format>
1. Current Rate Limiting Assessment
2. Vulnerabilities or Gaps Identified
3. Implementation Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<Framework> Paste framework name here </Framework>
<Code> Paste code here </Code>
</Input>`,

      `10. Caching Strategy & Implementation Review

<Role>
Act as a Caching Architecture and Performance Expert.
</Role>

<Task>
Evaluate caching implementation for correctness and efficiency.
</Task>

<Scope>
- Cache key design and namespacing
- TTL and expiration strategies
- Cache invalidation logic and patterns
- Cache warming and preloading
- Redis/Memcached usage patterns
- Stale data and consistency issues
</Scope>

<Rules>
- Identify cache invalidation bugs and race conditions
- Suggest appropriate caching layers (application, database, CDN)
- Balance between performance and data freshness
</Rules>

<Format>
1. Cache Design Assessment
2. Invalidation and Consistency Issues
3. Optimization Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<CacheSystem> Paste cache system name here (e.g., Redis, Memcached) </CacheSystem>
<Code> Paste code here </Code>
</Input>`,

      `11. Background Job & Queue Management Review

<Role>
Act as an Asynchronous Job Processing and Queue Management Expert.
</Role>

<Task>
Review background job implementation for reliability and correctness.
</Task>

<Scope>
- Job retry logic and exponential backoff
- Dead letter queue handling
- Job idempotency and duplicate prevention
- Queue priority and worker scaling
- Timeout and failure handling
- Poison message management
</Scope>

<Rules>
- Ensure jobs are fault-tolerant and recoverable
- Identify scenarios where jobs could fail silently
- Suggest monitoring and alerting improvements
</Rules>

<Format>
1. Job Reliability Assessment
2. Failure Scenarios Identified
3. Recommended Improvements
</Format>

<Input>
<Language> Paste language name here </Language>
<QueueSystem> Paste queue system name here (e.g., Celery, Sidekiq, Bull) </QueueSystem>
<Code> Paste code here </Code>
</Input>`,

      `12. Authentication & Authorization Flow Review

<Role>
Act as a Security Expert specializing in Authentication and Authorization.
</Role>

<Task>
Review authentication and authorization implementation for security vulnerabilities.
</Task>

<Scope>
- JWT token generation and validation
- Session management and storage
- OAuth flow implementation
- Permission checks and RBAC
- Token refresh and expiration
- Password hashing and storage
- Multi-factor authentication
</Scope>

<Rules>
- Identify unauthorized access vulnerabilities
- Ensure compliance with security best practices
- Check for common auth bypass patterns
</Rules>

<Format>
1. Authentication Flow Analysis
2. Security Vulnerabilities Identified
3. Remediation Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<AuthMethod> Paste auth method here (e.g., JWT, OAuth, Session) </AuthMethod>
<Code> Paste code here </Code>
</Input>`,

      `13. API Pagination & Data Serialization Review

<Role>
Act as an API Design and Data Transfer Optimization Specialist.
</Role>

<Task>
Review API pagination and serialization for performance and usability.
</Task>

<Scope>
- Pagination implementation (cursor vs offset)
- Page size limits and defaults
- Filtering and sorting capabilities
- Field selection and partial responses
- Response payload size management
- Serialization performance
- Lazy loading strategies
</Scope>

<Rules>
- Ensure scalability for large datasets
- Balance between flexibility and performance
- Follow REST or GraphQL best practices
</Rules>

<Format>
1. Pagination Design Assessment
2. Performance and Usability Issues
3. Optimization Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<APIStyle> Paste API style here (e.g., REST, GraphQL) </APIStyle>
<Code> Paste code here </Code>
</Input>`,

      `14. Logging, Monitoring & Observability Review

<Role>
Act as a Production Operations and Observability Expert.
</Role>

<Task>
Evaluate logging and monitoring implementation for production readiness.
</Task>

<Scope>
- Log level appropriateness and consistency
- Structured logging format
- PII and sensitive data in logs
- Correlation and trace IDs
- Error context and stack traces
- Log volume and cost management
- Metrics and alerting coverage
- Distributed tracing implementation
</Scope>

<Rules>
- Ensure debuggability in production
- Identify missing observability for critical paths
- Balance detail with performance and cost
</Rules>

<Format>
1. Observability Coverage Assessment
2. Logging and Monitoring Gaps
3. Improvement Recommendations
</Format>

<Input>
<Language> Paste language name here </Language>
<LoggingFramework>
Paste logging framework here (e.g., Winston, Log4j, Serilog)
</LoggingFramework>
<Code> Paste code here </Code>
</Input>`,

      `15. Data Validation & Input Sanitization Review

<Role>
Act as a Data Integrity and Validation Expert.
</Role>

<Task>
Review data validation and input sanitization for correctness and security.
</Task>

<Scope>
- Request payload validation
- Type checking and coercion
- Boundary validation (min/max, length limits)
- Format validation (email, phone, UUID, dates)
- Business rule validation
- Schema enforcement and validation libraries
- File upload validation
- Error message quality
</Scope>

<Rules>
- Ensure validation happens at appropriate layers
- Identify gaps that could lead to data corruption
- Distinguish between validation and sanitization
</Rules>

<Format>
1. Validation Coverage Assessment
2. Missing or Weak Validations
3. Recommended Validation Rules
</Format>

<Input>
<Language> Paste language name here </Language>
<ValidationLibrary>
Paste validation library here (e.g., Pydantic, Zod, Joi)
</ValidationLibrary>
<Code> Paste code here </Code>
</Input>`,
    ],
  },
]
