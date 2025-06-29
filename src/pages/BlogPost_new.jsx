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

Building scalable APIs is crucial for modern web applications. This guide covers best practices, architectural patterns, and optimization techniques for creating robust Node.js APIs using Express.

## Project Structure

### Organizing Your Code

A well-structured project is the foundation of a scalable API:

- **Controllers** - Handle request/response logic
- **Services** - Business logic and data processing
- **Models** - Data structure definitions
- **Middleware** - Cross-cutting concerns
- **Routes** - API endpoint definitions
- **Utils** - Helper functions and utilities

## Error Handling

### Centralized Error Management

Implement a centralized error handling system to manage errors consistently across your API.

## Security Best Practices

### Authentication and Authorization

Implement robust authentication and authorization mechanisms:

1. **JWT Tokens** - For stateless authentication
2. **Rate Limiting** - Prevent abuse and DOS attacks
3. **Input Validation** - Sanitize and validate all inputs
4. **HTTPS** - Always use encrypted connections

## Performance Optimization

### Caching Strategies

Implement caching at multiple levels:

- **Memory Caching** - For frequently accessed data
- **Redis** - For distributed caching
- **HTTP Caching** - Browser and CDN caching

### Database Optimization

- **Connection Pooling** - Manage database connections efficiently
- **Query Optimization** - Write efficient database queries
- **Indexing** - Proper database indexing strategy

## Monitoring and Logging

### Application Monitoring

Implement comprehensive monitoring and logging:

- **Performance Metrics** - Track response times and throughput
- **Error Tracking** - Monitor and alert on errors
- **Health Checks** - Endpoint health monitoring

## Deployment and Scaling

### Containerization

Use Docker for consistent deployment environments across development, staging, and production.

### Load Balancing

Implement load balancing to distribute traffic across multiple server instances.

## Conclusion

Building scalable APIs requires careful planning, proper architecture, and continuous optimization. Focus on clean code, proper error handling, security, and performance monitoring from the start.

---

*Ready to dive deeper into backend development? Explore my other articles on database optimization and microservices architecture.*`
    },
    'modern-css-techniques': {
      title: 'Modern CSS Techniques for Better Web Design',
      publishedDate: 'January 5, 2025',
      author: 'Hamza Khattak',
      readTime: '7 minute read',
      tags: ['CSS', 'Web Design', 'Frontend', 'Styling', 'Modern Web'],
      category: 'Tutorial',
      content: `# Modern CSS Techniques for Better Web Design

*Published on: January 5, 2025*  
*Author: Hamza Khattak*  
*Tags: CSS, Web Design, Frontend, Styling, Modern Web*

---

CSS has evolved tremendously in recent years. Modern CSS provides powerful features that enable developers to create stunning, responsive, and maintainable web designs. Let's explore the latest techniques that every frontend developer should know.

## CSS Grid and Flexbox

### CSS Grid for Complex Layouts

CSS Grid is perfect for creating complex, two-dimensional layouts with precise control over rows and columns.

### Flexbox for Component Layout

Flexbox excels at one-dimensional layouts and is ideal for component-level design patterns.

## CSS Custom Properties (Variables)

### Dynamic Theming

CSS custom properties enable dynamic theming and make your stylesheets more maintainable.

## Container Queries

### Responsive Components

Container queries allow components to respond to their container's size rather than the viewport size.

## CSS Logical Properties

### International-Friendly CSS

Logical properties provide better support for international layouts and right-to-left languages.

## Advanced Selectors

### Modern Pseudo-Classes

New pseudo-classes like :is(), :where(), and :has() provide more flexible and powerful selection capabilities.

## CSS Functions

### Mathematical Functions

Functions like clamp(), min(), and max() enable responsive design without media queries.

## CSS Animations and Transitions

### Performance-Optimized Animations

Create smooth, performant animations using CSS transforms and the will-change property.

## CSS Architecture

### Modern CSS Methodologies

Explore modern approaches to organizing and structuring your CSS for better maintainability.

## Browser Support and Fallbacks

### Progressive Enhancement

Implement modern CSS features with appropriate fallbacks for older browsers.

## Conclusion

Modern CSS techniques offer unprecedented power and flexibility for web design. By mastering these techniques, you can create more efficient, maintainable, and visually appealing websites.

---

*Interested in more frontend development tips? Check out my articles on JavaScript performance and React best practices.*`
    },
    'react-hooks-best-practices': {
      title: 'React Hooks: Best Practices and Common Pitfalls',
      publishedDate: 'January 3, 2025',
      author: 'Hamza Khattak',
      readTime: '9 minute read',
      tags: ['React', 'Hooks', 'JavaScript', 'Frontend', 'Best Practices'],
      category: 'Tutorial',
      content: `# React Hooks: Best Practices and Common Pitfalls

*Published on: January 3, 2025*  
*Author: Hamza Khattak*  
*Tags: React, Hooks, JavaScript, Frontend, Best Practices*

---

React Hooks revolutionized how we write React applications. However, with great power comes great responsibility. This guide covers best practices, common pitfalls, and advanced techniques for using React Hooks effectively.

## Understanding React Hooks

### What Are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

### Rules of Hooks

1. Only call Hooks at the top level
2. Only call Hooks from React functions
3. Use ESLint plugin for enforcement

## useState Best Practices

### State Structure

Keep state flat and normalized when possible.

### Functional Updates

Use functional updates when the new state depends on the previous state.

## useEffect Mastery

### Dependency Arrays

Understanding and properly managing dependency arrays is crucial for avoiding bugs.

### Cleanup Functions

Always clean up subscriptions, timers, and event listeners in useEffect cleanup functions.

## Custom Hooks

### Creating Reusable Logic

Custom hooks allow you to extract and reuse stateful logic between components.

### Testing Custom Hooks

Learn how to effectively test custom hooks using React Testing Library.

## Performance Optimization

### useMemo and useCallback

Use these hooks judiciously to optimize performance without over-optimizing.

### React.memo

Combine React.memo with useMemo and useCallback for optimal component re-rendering.

## Advanced Patterns

### useReducer for Complex State

When useState becomes unwieldy, useReducer provides a more structured approach.

### Context with Hooks

Combine useContext with useReducer for state management solutions.

## Common Pitfalls

### Stale Closures

Understanding and avoiding stale closure issues in useEffect and event handlers.

### Infinite Loops

How to identify and fix infinite re-rendering loops.

## Testing React Hooks

### Testing Strategies

Best practices for testing components that use hooks.

### Mocking Hooks

When and how to mock hooks in your tests.

## Conclusion

React Hooks are powerful tools that can greatly improve your React development experience. By following these best practices and avoiding common pitfalls, you'll write more maintainable and performant React applications.

---

*Want to master React development? Explore my other React tutorials and advanced patterns.*`
    },
    'typescript-advanced-patterns': {
      title: 'Advanced TypeScript Patterns for Large-Scale Applications',
      publishedDate: 'December 28, 2024',
      author: 'Hamza Khattak',
      readTime: '10 minute read',
      tags: ['TypeScript', 'Advanced Patterns', 'Type Safety', 'Large Scale', 'Architecture'],
      category: 'Tutorial',
      content: `# Advanced TypeScript Patterns for Large-Scale Applications

*Published on: December 28, 2024*  
*Author: Hamza Khattak*  
*Tags: TypeScript, Advanced Patterns, Type Safety, Large Scale, Architecture*

---

As applications grow in complexity, TypeScript's advanced type system becomes invaluable. This guide explores sophisticated patterns and techniques for building type-safe, maintainable large-scale applications.

## Generic Constraints and Conditional Types

### Building Flexible APIs

Use generic constraints to create flexible yet type-safe APIs that adapt to different data structures.

### Conditional Types for Type Transformation

Conditional types enable complex type transformations based on input types.

## Mapped Types and Template Literals

### Dynamic Type Generation

Create types dynamically based on object properties and string patterns.

### Key Mapping

Transform object keys while maintaining type safety.

## Utility Types Mastery

### Built-in Utilities

Master TypeScript's built-in utility types: Partial, Required, Pick, Omit, and more.

### Custom Utility Types

Create your own utility types for domain-specific transformations.

## Advanced Module Patterns

### Declaration Merging

Use declaration merging to extend types and interfaces across modules.

### Ambient Declarations

Create type definitions for external libraries and runtime environments.

## Type Guards and Discriminated Unions

### Runtime Type Safety

Implement type guards to ensure runtime type safety in complex applications.

### Exhaustive Pattern Matching

Use discriminated unions for exhaustive pattern matching.

## Performance Considerations

### Compilation Performance

Optimize TypeScript compilation for large codebases.

### Type Complexity Management

Manage type complexity to maintain reasonable compilation times.

## Architectural Patterns

### Domain-Driven Design with TypeScript

Implement DDD concepts using TypeScript's type system.

### Event-Driven Architecture

Type-safe event systems using TypeScript.

## Testing TypeScript Code

### Type Testing

Test your types using TypeScript's type system itself.

### Unit Testing Strategies

Best practices for testing TypeScript applications.

## Migration Strategies

### Gradual Migration

Strategies for migrating large JavaScript codebases to TypeScript.

### Interoperability

Maintaining interoperability during migration phases.

## Conclusion

Advanced TypeScript patterns enable you to build robust, maintainable applications with strong type safety. These techniques become increasingly valuable as your applications scale in complexity.

---

*Ready to level up your TypeScript skills? Check out my other articles on modern development practices.*`
    },
    'from-gamer-to-full-stack-developer': {
      title: 'A Journey - From a Gamer to Full Stack Developer',
      publishedDate: 'November 2, 2023',
      author: 'Hamza Khattak',
      readTime: '6 minute read',
      tags: ['Personal Journey', 'Career', 'Gaming', 'Programming', 'Story'],
      category: 'Career',
      content: `# A Journey - From a Gamer to Full Stack Developer

*Published on: November 2, 2023*  
*Author: Hamza Khattak*  
*Tags: Personal Journey, Career, Gaming, Programming, Story*

---

Every developer has a unique journey. Mine started not with a computer science degree or a coding bootcamp, but with a passion for gaming that eventually evolved into a love for creating digital experiences. Here's my story of transformation from a dedicated gamer to a full-stack developer.

## The Gaming Foundation

### Where It All Began

My relationship with technology began through gaming. Like many others, I was initially drawn to the escapism and challenge that video games provided. But what started as entertainment gradually became something more profound - a fascination with how digital worlds were constructed.

### The Spark of Curiosity

Playing games like Minecraft, where creativity meets logic, opened my eyes to the possibility of creation rather than just consumption. I began modding games, customizing servers, and slowly but surely, writing my first lines of code.

## The Transition Phase

### From Playing to Creating

The transition wasn't immediate. It was a gradual shift from being a consumer of digital content to wanting to create it. I started with simple HTML pages, moved to CSS styling, and eventually discovered JavaScript.

### Learning in Public

One of the best decisions I made was to learn in public. Sharing my progress, failures, and small wins on social media created accountability and connected me with a community of learners and mentors.

## Building Skills

### The Self-Taught Path

I chose the self-taught route, utilizing online resources, tutorials, and documentation. Platforms like freeCodeCamp, MDN, and YouTube became my virtual classrooms.

### Project-Based Learning

Instead of just following tutorials, I focused on building projects. Each project taught me something new and helped solidify concepts through practical application.

## Challenges and Setbacks

### Imposter Syndrome

The transition from gaming to development wasn't without challenges. Imposter syndrome was real - questioning whether I belonged in the tech industry without a traditional computer science background.

### The Learning Curve

The learning curve was steep. There were moments of frustration when code wouldn't work, concepts seemed too complex, and progress felt slow.

## Breakthrough Moments

### First Deployed Application

The moment I deployed my first full application to the web was transformative. Seeing something I created accessible to others worldwide was incredibly empowering.

### Landing the First Role

Getting my first developer role validated the path I had chosen. It proved that passion, dedication, and consistent learning could compete with traditional educational backgrounds.

## Current State

### Full-Stack Development

Today, I work as a full-stack developer, comfortable with both frontend and backend technologies. My stack includes React, Node.js, databases, and cloud services.

### Continuous Learning

The learning never stops in tech. I continue to explore new technologies, contribute to open source, and share my knowledge with others making similar transitions.

## Advice for Aspiring Developers

### Start Where You Are

You don't need perfect conditions to start learning. Use whatever resources you have available and begin with small, manageable projects.

### Build a Portfolio

Create projects that showcase your skills. A strong portfolio often speaks louder than a degree in the tech industry.

### Connect with the Community

Engage with the developer community through social media, local meetups, and online forums. The relationships you build can be invaluable.

### Embrace the Journey

Every developer's path is different. Embrace your unique background - it can be a strength rather than a weakness.

## Conclusion

The journey from gamer to full-stack developer taught me that passion and persistence can overcome traditional barriers. The skills I developed through gaming - logical thinking, problem-solving, and attention to detail - translated well into programming.

If you're considering a career change into tech, remember that your background, whatever it may be, brings unique perspectives that the industry needs. The path might not be traditional, but it can be just as rewarding.

---

*Are you making a similar transition? I'd love to hear about your journey. Connect with me on social media or reach out through my contact page.*`
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !blogContent) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {error || 'Article not found'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
              {blogContent.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {blogContent.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {blogContent.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <span>{blogContent.author}</span>
            <span className="mx-2">•</span>
            <span>{blogContent.publishedDate}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {blogContent.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{
                __html: blogContent.content
                  .replace(/\n/g, '<br>')
                  .replace(/#{1}\s/g, '<h1 class="text-3xl font-bold mt-8 mb-4">')
                  .replace(/#{2}\s/g, '<h2 class="text-2xl font-bold mt-6 mb-3">')
                  .replace(/#{3}\s/g, '<h3 class="text-xl font-bold mt-4 mb-2">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">$1</code>')
                  .replace(/---/g, '<hr class="my-8 border-gray-300 dark:border-gray-600">')
              }}
            />
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Enjoyed this article? Share it with others!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
