import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [blogContent, setBlogContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock blog post data - in a real app, this would be fetched from an API or CMS
  const blogPosts = {
    'javascript-performance-optimization': {
      title: 'JavaScript Performance Optimization: Tips and Tricks',
      publishedDate: 'January 10, 2025',
      author: 'Hamza Khattak',
      readTime: '6 minute read',
      tags: ['JavaScript', 'Performance', 'Optimization', 'Web Development', 'Browser Performance'],
      category: 'Tutorial',
      content: `# JavaScript Performance Optimization: Tips and Tricks

*Published on: January 10, 2025*  
*Author: Hamza Khattak*  
*Tags: JavaScript, Performance, Optimization, Web Development, Browser Performance*

---

JavaScript performance can make or break user experience. Even minor optimizations can lead to significant improvements in load times, responsiveness, and overall user satisfaction. Let's explore practical techniques to optimize JavaScript performance.

## Understanding Performance Bottlenecks

### Common Performance Issues

1. **DOM Manipulation** - Excessive or inefficient DOM updates
2. **Memory Leaks** - Objects not being garbage collected
3. **Event Listeners** - Too many or poorly managed listeners
4. **Large Bundle Sizes** - Loading unnecessary code
5. **Synchronous Operations** - Blocking the main thread

## Optimizing DOM Manipulation

### Batch DOM Updates

Instead of multiple DOM updates that trigger reflows and repaints, batch your updates for better performance.

### Use Virtual Scrolling for Large Lists

Virtual scrolling only renders visible items, dramatically improving performance for large datasets.

## Memory Management

### Preventing Memory Leaks

Properly manage component cleanup and remove event listeners to prevent memory leaks in your applications.

## Performance Monitoring

### Using Performance API

The Performance API provides detailed timing information about your application's performance.

## Conclusion

JavaScript performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply targeted optimizations. Remember that premature optimization can be counterproductive - focus on the most impactful improvements first.

---

*Want to learn more about web performance? Check out my other articles on modern web development techniques.*`
    },
    'building-scalable-apis-nodejs': {
      title: 'Building Scalable APIs with Node.js and Express',
      publishedDate: 'January 8, 2025',
      author: 'Hamza Khattak',
      readTime: '8 minute read',
      tags: ['Node.js', 'Express', 'API', 'Backend', 'Scalability'],
      category: 'Tutorial',
      content: `# Building Scalable APIs with Node.js and Express

*Published on: January 8, 2025*  
*Author: Hamza Khattak*  
*Tags: Node.js, Express, API, Backend, Scalability*

---

Building scalable APIs is crucial for modern web applications. As your application grows, you need an architecture that can handle increased traffic, maintain performance, and remain maintainable. In this comprehensive guide, we'll explore best practices for building robust APIs with Node.js and Express.

## Setting Up the Foundation

### Project Structure

A well-organized project structure is the foundation of a scalable API:

- **Controllers** - Handle request/response logic
- **Services** - Business logic and data processing
- **Models** - Data structure definitions
- **Middleware** - Cross-cutting concerns
- **Routes** - API endpoint definitions
- **Utils** - Helper functions and utilities

### Environment Configuration

Always use environment variables for configuration to keep sensitive data secure and make your application configurable across different environments.

## Implementing Proper Error Handling

### Global Error Handler

Create a centralized error handling middleware to manage errors consistently across your API. This ensures all errors are handled uniformly and provides meaningful responses to clients.

### Custom Error Classes

Implement custom error classes to handle different types of errors appropriately, making your error handling more structured and maintainable.

## Database Integration and Optimization

### Connection Pooling

Use connection pooling for better database performance. This helps manage database connections efficiently and improves overall application performance.

### Query Optimization

Write efficient database queries and implement proper indexing strategies to ensure your API can handle large datasets effectively.

## Implementing Caching Strategies

### Redis Integration

Implement Redis for distributed caching to improve response times and reduce database load. Cache frequently accessed data to significantly boost performance.

### Cache Middleware

Create middleware to handle caching logic automatically, making it easy to apply caching to different routes as needed.

## Rate Limiting and Security

### Rate Limiting

Implement rate limiting to prevent abuse and DOS attacks. Different endpoints may need different limits based on their criticality and resource usage.

### Security Middleware

Use security middleware to protect against common vulnerabilities:

- **CORS** - Configure proper cross-origin resource sharing
- **Helmet** - Set security headers
- **Input Validation** - Sanitize and validate all inputs
- **Authentication** - Implement robust authentication mechanisms

## API Versioning Strategy

Plan for API evolution by implementing a versioning strategy from the start. This allows you to introduce breaking changes without affecting existing clients.

## Monitoring and Logging

### Structured Logging

Implement structured logging to track application behavior, errors, and performance metrics. This is crucial for debugging and monitoring in production.

### Request Logging

Log all API requests with relevant metadata to help with debugging and performance analysis.

## Testing Strategy

### Unit Tests

Write comprehensive unit tests for your services and utilities to ensure individual components work correctly.

### Integration Tests

Implement integration tests to verify that different parts of your API work together correctly.

## Deployment Considerations

### Docker Configuration

Use Docker for consistent deployment environments across development, staging, and production.

### Health Check Endpoint

Implement health check endpoints to monitor the status of your API and its dependencies.

## Performance Optimization Tips

1. **Use Async/Await** properly to avoid blocking operations
2. **Implement Pagination** for large data sets
3. **Optimize Database Queries** with proper indexing
4. **Use Compression** for response data
5. **Implement Caching** at multiple levels
6. **Monitor Performance** continuously

## Conclusion

Building scalable APIs requires careful planning, proper architecture, and continuous optimization. Focus on clean code, proper error handling, security, and performance monitoring from the start.

Key takeaways:
- Structure your code properly with clear separation of concerns
- Implement comprehensive error handling and logging
- Use caching strategically to improve performance
- Secure your API with proper authentication and rate limiting
- Monitor and test your API thoroughly
- Plan for deployment with health checks and containerization

By following these patterns, you'll build APIs that can handle growth and maintain performance as your application scales.

---

*Ready to dive deeper into backend development? Explore my other articles on database optimization and microservices architecture.*`
    },
    'exporting-grid-data-to-excel-bryntum': {
      title: 'Exporting Grid Data to Excel file | Bryntum',
      publishedDate: 'January 20, 2025',
      author: 'Hamza Khattak',
      readTime: '5 minute read',
      tags: ['Bryntum', 'JavaScript', 'Excel', 'Data Export', 'Grid'],
      category: 'Tutorial',
      content: `# Exporting Grid Data to Excel file | Bryntum

*Published on: January 20, 2025*  
*Author: Hamza Khattak*  
*Tags: Bryntum, JavaScript, Excel, Data Export, Grid*

---

Bryntum Grid is a powerful JavaScript component for displaying and managing tabular data. One common requirement is exporting grid data to Excel format for further analysis or reporting. This guide demonstrates how to implement Excel export functionality in Bryntum Grid.

## Overview

Bryntum Grid provides built-in support for exporting data to Excel format (.xlsx). The export feature is part of the GridExcelExporter class and can be easily integrated into your application.

## Basic Setup

### Installing Dependencies

First, ensure you have the Bryntum Grid package installed with Excel export support.

### Grid Configuration

Configure your Bryntum Grid with the Excel export feature enabled.

## Implementation Steps

### 1. Import Required Modules

Import the necessary Bryntum modules including the Grid and ExcelExporter.

### 2. Configure the Grid

Set up your grid with columns, data, and export configuration.

### 3. Add Export Button

Create a button or menu item that triggers the Excel export functionality.

### 4. Implement Export Function

Write the function that handles the export process.

## Customization Options

### Export Settings

You can customize various aspects of the Excel export:

- **Filename** - Specify the exported file name
- **Sheet Name** - Set the Excel worksheet name
- **Date Format** - Control how dates are formatted
- **Number Format** - Configure number formatting
- **Column Width** - Adjust column widths in the exported file

### Styling and Formatting

The exported Excel file can include:

- **Cell Styling** - Colors, fonts, and borders
- **Header Formatting** - Custom header styles
- **Data Formatting** - Conditional formatting based on data values

## Advanced Features

### Multi-Sheet Export

Export data to multiple sheets within a single Excel file.

### Custom Data Processing

Transform or filter data before export using custom processing functions.

### Progress Monitoring

Show export progress for large datasets.

## Error Handling

### Common Issues

Handle common export scenarios:

- **Large Datasets** - Manage memory and performance for large exports
- **Browser Compatibility** - Ensure cross-browser support
- **File Size Limits** - Handle file size restrictions

### Best Practices

- **Data Validation** - Validate data before export
- **User Feedback** - Provide clear feedback during export process
- **Error Messages** - Display meaningful error messages

## Performance Considerations

### Optimization Tips

- **Chunked Processing** - Process large datasets in chunks
- **Memory Management** - Avoid memory leaks during export
- **Async Operations** - Use asynchronous processing for better UX

## Real-World Example

Here's a complete example showing how to implement Excel export in a typical business application.

## Browser Support

The Excel export feature works in modern browsers that support:

- File API
- Web Workers (for large datasets)
- Download functionality

## Troubleshooting

### Common Problems and Solutions

1. **Export button not working** - Check event handlers and dependencies
2. **Formatting issues** - Verify column configurations and data types
3. **Performance problems** - Consider data optimization and chunking

## Conclusion

Bryntum Grid's Excel export feature provides a robust solution for data export requirements. With proper configuration and customization, you can create professional Excel reports directly from your web application.

The key to successful implementation is understanding your data requirements, customizing the export settings appropriately, and handling edge cases gracefully.

---

*Working with Bryntum components? Check out my other tutorials on advanced Bryntum Grid features and integration patterns.*`
    },
    'adding-firebase-to-javascript-project': {
      title: 'Adding Firebase to JavaScript Project',
      publishedDate: 'December 9, 2023',
      author: 'Hamza Khattak',
      readTime: '8 minute read',
      tags: ['Firebase', 'JavaScript', 'Web Development', 'Tutorial'],
      category: 'Tutorial',
      content: `# Adding Firebase to JavaScript Project

*Published on: December 9, 2023*  
*Author: Hamza Khattak*  
*Tags: Firebase, JavaScript, Web Development, Tutorial*

---

Firebase is Google's comprehensive platform for building web and mobile applications. It provides backend services like authentication, real-time databases, hosting, and more. This guide walks you through integrating Firebase into a JavaScript project from scratch.

## What is Firebase?

### Firebase Services Overview

Firebase offers a suite of services that can accelerate your development:

- **Authentication** - User management and authentication
- **Firestore** - NoSQL document database
- **Realtime Database** - Real-time synchronized database
- **Storage** - File storage and serving
- **Hosting** - Web hosting with CDN
- **Functions** - Serverless backend functions
- **Analytics** - App usage analytics

## Setting Up Firebase

### 1. Create Firebase Project

Start by creating a new Firebase project in the Firebase Console.

### 2. Project Configuration

Configure your project settings, including authentication methods and database rules.

### 3. Get Configuration Object

Obtain your Firebase configuration object from the project settings.

## Installation and Setup

### Install Firebase SDK

You can add Firebase to your project using npm or by including it via CDN.

### Initialize Firebase

Initialize Firebase in your application with your configuration.

## Authentication Implementation

### Setting Up Authentication

Enable authentication methods in the Firebase Console.

### User Registration

Implement user registration functionality.

### User Login

Create login functionality for existing users.

### Authentication State Management

Monitor authentication state changes in your application.

## Firestore Database

### Database Structure

Plan your Firestore database structure with collections and documents.

### Writing Data

Learn how to add and update data in Firestore.

### Reading Data

Implement data retrieval from Firestore.

### Real-time Listeners

Set up real-time listeners for live data updates.

## Firebase Storage

### File Upload

Implement file upload functionality to Firebase Storage.

### File Download

Create file download and display features.

### Security Rules

Configure security rules for Storage access.

## Security Rules

### Firestore Security Rules

Write security rules to protect your Firestore data.

### Authentication-based Rules

Create rules based on user authentication status.

## Best Practices

### Error Handling

Implement comprehensive error handling for Firebase operations.

### Performance Optimization

Optimize Firebase queries and data usage.

### Offline Support

Understand Firebase's offline capabilities.

## Deployment

### Firebase Hosting

Deploy your application using Firebase Hosting.

### Custom Domain

Configure custom domains for your hosted application.

## Monitoring and Analytics

### Firebase Analytics

Implement analytics to track user behavior.

### Performance Monitoring

Monitor your application's performance.

## Common Patterns

### CRUD Operations

Implement Create, Read, Update, Delete operations with Firebase.

### Data Pagination

Handle large datasets with pagination.

### Batch Operations

Perform multiple operations efficiently.

## Troubleshooting

### Common Issues

Address frequently encountered problems:

- **CORS Issues** - Configure CORS settings properly
- **Permission Denied** - Check security rules
- **Quota Limits** - Understand Firebase limits

## Conclusion

Firebase provides a powerful backend-as-a-service solution that can significantly speed up your JavaScript application development. With proper setup and implementation, you can focus on building features rather than managing backend infrastructure.

Start with the basics - authentication and a simple database - then gradually expand to use more Firebase services as your application grows.

---

*Ready to build more complex applications? Explore my other tutorials on advanced JavaScript patterns and full-stack development.*`
    }
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        
        // Check if the blog post exists in our data
        if (blogPosts[id]) {
          setBlogContent(blogPosts[id]);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-primary-600 mx-auto"></div>
          <p className="mt-4 text-portfolio-secondary-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blogContent) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-portfolio-neutral-800 mb-4">
            {error || 'Article not found'}
          </h2>
          <p className="text-portfolio-secondary-600 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-portfolio-primary-600 hover:text-portfolio-primary-700 mb-8 transition-colors font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-portfolio-primary-100 text-portfolio-primary-700 text-sm font-medium rounded-full">
              {blogContent.category}
            </span>
            <span className="text-portfolio-secondary-600 text-sm">
              {blogContent.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-portfolio-neutral-800 mb-4 leading-tight">
            {blogContent.title}
          </h1>
          
          <div className="flex items-center text-portfolio-secondary-600 mb-6">
            <span>{blogContent.author}</span>
            <span className="mx-2">•</span>
            <span>{blogContent.publishedDate}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {blogContent.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-portfolio-neutral-100 text-portfolio-secondary-600 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-portfolio-soft p-8 lg:p-12">
          <div className="prose prose-base max-w-none">
            <div 
              className="text-portfolio-neutral-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blogContent.content
                  .replace(/\n/g, '<br>')
                  .replace(/#{1}\s/g, '<h1 class="text-2xl font-bold mt-6 mb-4 text-portfolio-neutral-800">')
                  .replace(/#{2}\s/g, '<h2 class="text-xl font-bold mt-5 mb-3 text-portfolio-neutral-800">')
                  .replace(/#{3}\s/g, '<h3 class="text-lg font-bold mt-4 mb-2 text-portfolio-neutral-800">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-portfolio-neutral-800 font-semibold">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="text-portfolio-neutral-700 italic">$1</em>')
                  .replace(/`(.*?)`/g, '<code class="bg-portfolio-neutral-100 text-portfolio-primary-600 px-2 py-1 rounded text-sm font-mono">$1</code>')
                  .replace(/---/g, '<hr class="my-6 border-portfolio-neutral-200">')
              }}
            />
          </div>
        </article>

        {/* Author Section */}
        <div className="mt-12 bg-gradient-to-r from-portfolio-primary-50 to-portfolio-secondary-50 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-portfolio-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">HK</span>
            </div>
            <div>
              <h3 className="font-bold text-portfolio-neutral-800">Hamza Khattak</h3>
              <p className="text-portfolio-secondary-600 text-sm">
                Full-Stack Web Developer & Content Creator
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="px-6 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 text-center"
          >
            More Articles
          </Link>
          <Link
            to="/"
            className="px-6 py-3 bg-transparent border-2 border-portfolio-primary-600 text-portfolio-primary-600 hover:bg-portfolio-primary-50 font-medium rounded-lg transition-all text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
