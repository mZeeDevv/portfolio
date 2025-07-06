import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const JavaScriptPerformanceOptimization = () => {
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
            JavaScript Performance Optimization: Tips and Tricks
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>January 10, 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>6 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['JavaScript', 'Performance', 'Optimization', 'Web Development', 'Browser Performance'].map((tag) => (
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
          <h1>JavaScript Performance Optimization: Tips and Tricks</h1>

          <p><em>Published on: January 10, 2025</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: JavaScript, Performance, Optimization, Web Development, Browser Performance</em></p>

          <hr />

          <p>JavaScript performance can make or break user experience. Even minor optimizations can lead to significant improvements in load times, responsiveness, and overall user satisfaction. Let's explore practical techniques to optimize JavaScript performance.</p>

          <h2>Understanding Performance Bottlenecks</h2>

          <h3>Common Performance Issues</h3>

          <ol>
            <li><strong>DOM Manipulation</strong> - Excessive or inefficient DOM updates</li>
            <li><strong>Memory Leaks</strong> - Objects not being garbage collected</li>
            <li><strong>Event Listeners</strong> - Too many or poorly managed listeners</li>
            <li><strong>Large Bundle Sizes</strong> - Loading unnecessary code</li>
            <li><strong>Synchronous Operations</strong> - Blocking the main thread</li>
          </ol>

          <h2>Optimizing DOM Manipulation</h2>

          <h3>Batch DOM Updates</h3>

          <p>Instead of multiple DOM updates that trigger reflows and repaints, batch your updates for better performance.</p>

          <h3>Use Virtual Scrolling for Large Lists</h3>

          <p>Virtual scrolling only renders visible items, dramatically improving performance for large datasets.</p>

          <h2>Memory Management</h2>

          <h3>Preventing Memory Leaks</h3>

          <p>Properly manage component cleanup and remove event listeners to prevent memory leaks in your applications.</p>

          <h2>Performance Monitoring</h2>

          <h3>Using Performance API</h3>

          <p>The Performance API provides detailed timing information about your application's performance.</p>

          <h2>Conclusion</h2>

          <p>JavaScript performance optimization is an ongoing process. Start with measuring, identify bottlenecks, and apply targeted optimizations. Remember that premature optimization can be counterproductive - focus on the most impactful improvements first.</p>

          <hr />

          <p><em>Want to learn more about web performance? Check out my other articles on modern web development techniques.</em></p>
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
                to="/blog/building-scalable-apis-nodejs"
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

export default JavaScriptPerformanceOptimization;
