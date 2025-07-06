import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ModernCssTechniques = () => {
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
            Modern CSS Techniques Every Developer Should Know
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>December 28, 2024</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>7 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['CSS', 'Web Development', 'Frontend', 'Modern CSS', 'Layout', 'Responsive Design'].map((tag) => (
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
          <h1>Modern CSS Techniques Every Developer Should Know</h1>

          <p><em>Published on: December 28, 2024</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: CSS, Web Development, Frontend, Modern CSS, Layout, Responsive Design</em></p>

          <hr />

          <p>CSS has evolved tremendously over the past few years. New features and techniques have made many complex JavaScript solutions obsolete, enabling more performant and maintainable code. This guide explores powerful modern CSS features that every frontend developer should know.</p>

          <h2>CSS Grid Layout</h2>

          <p>CSS Grid has revolutionized how we create layouts. It provides a two-dimensional grid-based layout system that makes complex designs simpler and more intuitive.</p>

          <h3>Basic Grid Setup</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}`}
              </code>
            </pre>
          </div>

          <h3>Advanced Grid Techniques</h3>

          <p>Use named grid areas for expressive layouts:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}`}
              </code>
            </pre>
          </div>

          <h2>CSS Custom Properties (Variables)</h2>

          <p>CSS variables allow you to define reusable values that can be changed dynamically.</p>

          <h3>Global Variables</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`:root {
  --primary-color: #3a86ff;
  --secondary-color: #8338ec;
  --text-color: #2b2d42;
}

.button {
  background-color: var(--primary-color);
  color: white;
}`}
              </code>
            </pre>
          </div>

          <h3>Dynamic Theme Switching</h3>

          <p>CSS variables make implementing dark mode much simpler:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`:root {
  --bg-color: white;
  --text-color: black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: white;
  }
}`}
              </code>
            </pre>
          </div>

          <h2>CSS Animations and Transitions</h2>

          <p>Modern CSS provides powerful animation capabilities without JavaScript.</p>

          <h3>Keyframe Animations</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 0.5s ease-in-out;
}`}
              </code>
            </pre>
          </div>

          <h3>Smooth Transitions</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.button {
  transition: transform 0.3s, background-color 0.3s;
}

.button:hover {
  transform: translateY(-2px);
  background-color: var(--secondary-color);
}`}
              </code>
            </pre>
          </div>

          <h2>Flexbox for Component Layout</h2>

          <p>While Grid excels at page layouts, Flexbox is perfect for component-level layouts.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.card {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
              </code>
            </pre>
          </div>

          <h2>CSS Scroll Snap</h2>

          <p>Create smooth, app-like scrolling experiences with CSS Scroll Snap.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.slider {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  display: flex;
}

.slide {
  scroll-snap-align: start;
  flex: 0 0 100%;
}`}
              </code>
            </pre>
          </div>

          <h2>Modern CSS Selectors</h2>

          <p>CSS selectors have become more powerful, allowing for more precise targeting.</p>

          <h3>:is() and :where() Pseudo-Classes</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`/* Simplified specificity */
:where(header, main, footer) h2 {
  color: var(--heading-color);
}

/* Groups with preserved specificity */
:is(header, main, footer) h2:hover {
  color: var(--accent-color);
}`}
              </code>
            </pre>
          </div>

          <h3>:has() Relational Pseudo-Class</h3>

          <p>The new parent selector revolutionizes CSS capabilities:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`/* Style cards differently if they contain an image */
.card:has(img) {
  padding-top: 0;
}`}
              </code>
            </pre>
          </div>

          <h2>CSS Container Queries</h2>

          <p>Container queries allow you to style elements based on their container's size, not just the viewport.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`}
              </code>
            </pre>
          </div>

          <h2>Aspect Ratio Control</h2>

          <p>The aspect-ratio property makes it simple to maintain proportional dimensions:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}`}
              </code>
            </pre>
          </div>

          <h2>CSS Custom Properties with JS Integration</h2>

          <p>Combine CSS variables with JavaScript for dynamic interfaces:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Change theme based on user preference
document.documentElement.style.setProperty('--primary-color', userPreference);`}
              </code>
            </pre>
          </div>

          <h2>Logical Properties</h2>

          <p>Use logical properties for better internationalization support:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`.card {
  margin-block: 1rem;
  padding-inline: 1.5rem;
}`}
              </code>
            </pre>
          </div>

          <h2>Conclusion</h2>

          <p>Modern CSS is more powerful than ever. By embracing these techniques, you can create more maintainable, performant, and adaptive interfaces with less JavaScript and complexity.</p>

          <p>Remember that browser support varies for newer features, so always check compatibility and consider fallbacks for critical functionality.</p>

          <hr />

          <p><em>Want to dive deeper into modern CSS? Check out my other articles on CSS architecture and optimization.</em></p>
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
                to="/blog/exporting-grid-data-to-excel-bryntum"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/mastering-react-hooks"
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

export default ModernCssTechniques;
