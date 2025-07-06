import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  // Blog posts data - Long-form articles
  const blogPosts = [
    {
      id: 'javascript-performance-optimization',
      title: 'JavaScript Performance Optimization: Tips and Tricks',
      excerpt: 'JavaScript performance can make or break user experience. Learn practical techniques to optimize JavaScript performance, from DOM manipulation to memory management.',
      publishedDate: 'January 10, 2025',
      readTime: '6 minute read',
      tags: ['JavaScript', 'Performance', 'Optimization', 'Web Development', 'Browser Performance'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'building-scalable-apis-nodejs',
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Building scalable APIs is crucial for modern web applications. Learn best practices for building robust APIs with Node.js and Express that can handle growth.',
      publishedDate: 'January 5, 2025',
      readTime: '10 minute read',
      tags: ['Node.js', 'Express', 'API Development', 'Scalability', 'Backend Development', 'JavaScript'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'modern-css-techniques',
      title: 'Modern CSS Techniques Every Developer Should Know',
      excerpt: 'CSS has evolved tremendously over the past few years. Explore powerful modern CSS features that can replace complex JavaScript solutions.',
      publishedDate: 'December 28, 2024',
      readTime: '7 minute read',
      tags: ['CSS', 'Web Development', 'Frontend', 'Modern CSS', 'Layout', 'Responsive Design'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'exporting-grid-data-to-excel-bryntum',
      title: 'Exporting Grid Data to Excel file | Bryntum',
      excerpt: 'Ever thought of exporting your grid data to an Excel file with just one click? Learn how Bryntum allows you to export the grid data to an Excel file effortlessly.',
      publishedDate: 'January 20, 2025',
      readTime: '5 minute read',
      tags: ['Bryntum', 'JavaScript', 'Excel', 'Data Export', 'Grid'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'mastering-react-hooks',
      title: 'Mastering React Hooks: A Comprehensive Guide',
      excerpt: 'React Hooks revolutionized the way we write React components. Learn essential hooks, custom hooks, and best practices for modern React development.',
      publishedDate: 'December 15, 2024',
      readTime: '8 minute read',
      tags: ['React', 'JavaScript', 'Hooks', 'Frontend Development', 'Web Development'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'from-gamer-to-full-stack-developer',
      title: 'From a Gamer to Full Stack Developer',
      excerpt: 'Read how a full time gamer became a Full Stack Developer. What was the motivation behind it and how he achieved it - a personal journey story.',
      publishedDate: 'November 2, 2023',
      readTime: '6 minute read',
      tags: ['Personal Journey', 'Career', 'Gaming', 'Programming', 'Story'],
      category: 'Career',
      image: '/api/placeholder/400/250',
      type: 'blog'
    },
    {
      id: 'adding-firebase-to-javascript-project',
      title: 'Adding Firebase to JavaScript Project',
      excerpt: 'Firebase is Google\'s comprehensive platform for building web and mobile applications. Learn how to integrate Firebase into a JavaScript project from scratch.',
      publishedDate: 'December 9, 2023',
      readTime: '8 minute read',
      tags: ['Firebase', 'JavaScript', 'Web Development', 'Tutorial'],
      category: 'Tutorial',
      image: '/api/placeholder/400/250',
      type: 'blog'
    }
  ];

  // Instagram content data - social media posts
  const instagramContent = [
    {
      id: 'es16-features',
      title: 'ES16 Features',
      description: 'The ECMAScripts 2023 features are mind-blowing 😶‍🌫️. ECMA is best known for its work on the standardization of programming languages, including JavaScript. The most notable standard developed by ECMA....',
      image: '/api/placeholder/400/400',
      date: '26 Dec 2023',
      link: 'https://www.instagram.com/p/C1T7io_t71I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      tags: ['JavaScript', 'ES16', 'ECMAScript', 'Features'],
      category: 'JavaScript',
      type: 'instagram'
    },
    {
      id: 'higher-order-functions',
      title: 'Higher Order Functions',
      description: 'In JavaScript, a higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. Higher-order functions enable you to abstract over actions....',
      image: '/api/placeholder/400/400',
      date: '25 Dec 2023',
      link: 'https://www.instagram.com/p/C1QkAzZICng/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      tags: ['JavaScript', 'Functions', 'Programming', 'Concepts'],
      category: 'JavaScript',
      type: 'instagram'
    },
    {
      id: 'creating-table-in-console',
      title: 'Creating Table in Console',
      description: 'If you want to create a table-like structure in the console using plain JavaScript, you can use a combination of console.log statements to print rows and columns. This can be achieved with two diff....',
      image: '/api/placeholder/400/400',
      date: '11 Jan 2024',
      link: 'https://www.instagram.com/p/C1942t-tydN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      tags: ['JavaScript', 'Console', 'Debug', 'Tips'],
      category: 'Tips',
      type: 'instagram'
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      'Tutorial': 'bg-portfolio-primary-100 text-portfolio-primary-700',
      'Career': 'bg-portfolio-secondary-100 text-portfolio-secondary-700',
      'JavaScript': 'bg-portfolio-accent-100 text-portfolio-accent-700',
      'Tips': 'bg-green-100 text-green-700'
    };
    return colors[type] || 'bg-portfolio-neutral-100 text-portfolio-neutral-700';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
            Blogs & Content
          </h1>
          <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto mb-8">
            In-depth articles, tutorials, and quick tips shared through engaging content. 
            Follow along for learning and development insights.
          </p>
          
          {/* Animated Connecting Lines */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-portfolio-primary-400"></div>
            <div className="w-4 h-4 bg-portfolio-primary-600 rounded-full animate-pulse"></div>
            <div className="h-0.5 w-40 bg-gradient-to-r from-portfolio-primary-400 to-portfolio-secondary-400"></div>
            <div className="w-4 h-4 bg-portfolio-secondary-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-0.5 w-20 bg-gradient-to-r from-portfolio-secondary-400 to-transparent"></div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold font-heading text-portfolio-neutral-800">
              Blog Posts
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-portfolio-primary-400 to-transparent"></div>
            <div className="w-3 h-3 bg-portfolio-primary-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-portfolio-neutral-200 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-portfolio-neutral-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-portfolio-neutral-400 text-xs">#{index + 1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-portfolio-neutral-500">
                    <span>{post.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-portfolio-neutral-800 mb-3 line-clamp-2 hover:text-portfolio-primary-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-portfolio-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-portfolio-neutral-100 text-portfolio-neutral-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-portfolio-neutral-400 text-xs">+{post.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Read More */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-portfolio-primary-600 hover:text-portfolio-primary-700 font-medium text-sm transition-colors"
                  >
                    Continue reading →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold font-heading text-portfolio-neutral-800">
              Social Content
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-portfolio-accent-400 to-transparent"></div>
            <div className="w-3 h-3 bg-portfolio-accent-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramContent.map((content, index) => (
              <div key={content.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-portfolio-neutral-200 overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-portfolio-neutral-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(content.category)}`}>
                      {content.category}
                    </span>
                    <div className="flex items-center gap-1 text-portfolio-accent-600 text-xs">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </div>
                  </div>
                  <div className="text-sm text-portfolio-neutral-500">
                    {content.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-portfolio-neutral-800 mb-3 line-clamp-2 hover:text-portfolio-accent-600 transition-colors">
                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                      {content.title}
                    </a>
                  </h3>

                  <p className="text-portfolio-neutral-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {content.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-portfolio-neutral-100 text-portfolio-neutral-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                    {content.tags.length > 3 && (
                      <span className="text-portfolio-neutral-400 text-xs">+{content.tags.length - 3}</span>
                    )}
                  </div>

                  {/* View Link */}
                  <a
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-accent-600 hover:text-portfolio-accent-700 font-medium text-sm transition-colors"
                  >
                    View on Instagram →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
