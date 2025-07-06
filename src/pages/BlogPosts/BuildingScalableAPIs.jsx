import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BuildingScalableAPIs = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-portfolio-primary-600 hover:text-portfolio-primary-800 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-neutral-900 mb-4">
            Building Scalable APIs with Node.js and Express
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>January 8, 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>8 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Node.js', 'Express', 'API', 'Backend', 'Scalability'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-portfolio-primary-100 text-portfolio-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-portfolio-neutral-800">
          <h1>Building Scalable APIs with Node.js and Express</h1>

          <p><em>Published on: January 8, 2025</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: Node.js, Express, API, Backend, Scalability</em></p>

          <hr />

          <p>Building scalable APIs is crucial for modern web applications. As your application grows, you need an architecture that can handle increased traffic, maintain performance, and remain maintainable. In this comprehensive guide, we'll explore best practices for building robust APIs with Node.js and Express.</p>

          <h2>Setting Up the Foundation</h2>

          <h3>Project Structure</h3>

          <p>A well-organized project structure is the foundation of a scalable API:</p>

          <ul>
            <li><strong>Controllers</strong> - Handle request/response logic</li>
            <li><strong>Services</strong> - Business logic and data processing</li>
            <li><strong>Models</strong> - Data structure definitions</li>
            <li><strong>Middleware</strong> - Cross-cutting concerns</li>
            <li><strong>Routes</strong> - API endpoint definitions</li>
            <li><strong>Utils</strong> - Helper functions and utilities</li>
          </ul>

          <h3>Environment Configuration</h3>

          <p>Always use environment variables for configuration to keep sensitive data secure and make your application configurable across different environments.</p>

          <h2>Implementing Proper Error Handling</h2>

          <h3>Global Error Handler</h3>

          <p>Create a centralized error handling middleware to manage errors consistently across your API. This ensures all errors are handled uniformly and provides meaningful responses to clients.</p>

          <h3>Custom Error Classes</h3>

          <p>Implement custom error classes to handle different types of errors appropriately, making your error handling more structured and maintainable.</p>

          <h2>Database Integration and Optimization</h2>

          <h3>Connection Pooling</h3>

          <p>Use connection pooling for better database performance. This helps manage database connections efficiently and improves overall application performance.</p>

          <h3>Query Optimization</h3>

          <p>Write efficient database queries and implement proper indexing strategies to ensure your API can handle large datasets effectively.</p>

          <h2>Implementing Caching Strategies</h2>

          <h3>Redis Integration</h3>

          <p>Implement Redis for distributed caching to improve response times and reduce database load. Cache frequently accessed data to significantly boost performance.</p>

          <h3>Cache Middleware</h3>

          <p>Create middleware to handle caching logic automatically, making it easy to apply caching to different routes as needed.</p>

          <h2>Rate Limiting and Security</h2>

          <h3>Rate Limiting</h3>

          <p>Implement rate limiting to prevent abuse and DOS attacks. Different endpoints may need different limits based on their criticality and resource usage.</p>

          <h3>Security Middleware</h3>

          <p>Use security middleware to protect against common vulnerabilities:</p>

          <ul>
            <li><strong>CORS</strong> - Configure proper cross-origin resource sharing</li>
            <li><strong>Helmet</strong> - Set security headers</li>
            <li><strong>Input Validation</strong> - Sanitize and validate all inputs</li>
            <li><strong>Authentication</strong> - Implement robust authentication mechanisms</li>
          </ul>

          <h2>API Versioning Strategy</h2>

          <p>Plan for API evolution by implementing a versioning strategy from the start. This allows you to introduce breaking changes without affecting existing clients.</p>

          <h2>Monitoring and Logging</h2>

          <h3>Structured Logging</h3>

          <p>Implement structured logging to track application behavior, errors, and performance metrics. This is crucial for debugging and monitoring in production.</p>

          <h3>Request Logging</h3>

          <p>Log all API requests with relevant metadata to help with debugging and performance analysis.</p>

          <h2>Testing Strategy</h2>

          <h3>Unit Tests</h3>

          <p>Write comprehensive unit tests for your services and utilities to ensure individual components work correctly.</p>

          <h3>Integration Tests</h3>

          <p>Implement integration tests to verify that different parts of your API work together correctly.</p>

          <h2>Deployment Considerations</h2>

          <h3>Docker Configuration</h3>

          <p>Use Docker for consistent deployment environments across development, staging, and production.</p>

          <h3>Health Check Endpoint</h3>

          <p>Implement health check endpoints to monitor the status of your API and its dependencies.</p>

          <h2>Performance Optimization Tips</h2>

          <ol>
            <li><strong>Use Async/Await</strong> properly to avoid blocking operations</li>
            <li><strong>Implement Pagination</strong> for large data sets</li>
            <li><strong>Optimize Database Queries</strong> with proper indexing</li>
            <li><strong>Use Compression</strong> for response data</li>
            <li><strong>Implement Caching</strong> at multiple levels</li>
            <li><strong>Monitor Performance</strong> continuously</li>
          </ol>

          <h2>Conclusion</h2>

          <p>Building scalable APIs requires careful planning, proper architecture, and continuous optimization. Focus on clean code, proper error handling, security, and performance monitoring from the start.</p>

          <p>Key takeaways:</p>
          <ul>
            <li>Structure your code properly with clear separation of concerns</li>
            <li>Implement comprehensive error handling and logging</li>
            <li>Use caching strategically to improve performance</li>
            <li>Secure your API with proper authentication and rate limiting</li>
            <li>Monitor and test your API thoroughly</li>
            <li>Plan for deployment with health checks and containerization</li>
          </ul>

          <p>By following these patterns, you'll build APIs that can handle growth and maintain performance as your application scales.</p>

          <hr />

          <p><em>Ready to dive deeper into backend development? Explore my other articles on database optimization and microservices architecture.</em></p>
        </div>

        {/* Share and Navigate */}
        <div className="mt-16 pt-8 border-t border-portfolio-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-portfolio-neutral-900 font-semibold mb-2">Share this article</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share via Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                to="/blog/javascript-performance-optimization"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/exporting-grid-data-to-excel-bryntum"
                className="px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Next Article →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingScalableAPIs;
