import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MasteringReactHooks = () => {
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
            Mastering React Hooks: A Comprehensive Guide
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>December 15, 2024</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>8 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['React', 'JavaScript', 'Hooks', 'Frontend Development', 'Web Development'].map((tag) => (
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
          <h1>Mastering React Hooks: A Comprehensive Guide</h1>

          <p><em>Published on: December 15, 2024</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: React, JavaScript, Hooks, Frontend Development, Web Development</em></p>

          <hr />

          <p>React Hooks revolutionized how we write React components, enabling function components to use state and lifecycle features previously available only in class components. This comprehensive guide will help you master React Hooks for more elegant, reusable, and maintainable code.</p>

          <h2>Understanding the Hooks Paradigm</h2>

          <p>Hooks solve several problems in React development:</p>

          <ul>
            <li>They eliminate the confusion of "this" in classes</li>
            <li>They make stateful logic reusable between components</li>
            <li>They allow splitting components based on concern rather than lifecycle methods</li>
          </ul>

          <h2>Core Hooks</h2>

          <h3>useState</h3>

          <p>The useState hook lets you add state to function components.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>useEffect</h3>

          <p>The useEffect hook unifies side effects that were previously spread across componentDidMount, componentDidUpdate, and componentWillUnmount.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    }
    
    fetchData();
    
    // Cleanup function
    return () => {
      // Cancel requests or clean up resources
    };
  }, []); // Empty dependency array means this runs once on mount
  
  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}`}
              </code>
            </pre>
          </div>

          <h3>useContext</h3>

          <p>The useContext hook simplifies working with React's context API.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn-\${theme}\`}>
      Themed Button
    </button>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>useReducer</h3>

          <p>The useReducer hook is an alternative to useState for complex state logic.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h2>Additional Hooks</h2>

          <h3>useCallback</h3>

          <p>The useCallback hook returns a memoized callback to optimize child component renders.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // This function only changes when count changes
  const handleClick = useCallback(() => {
    console.log(\`Button clicked, count: \${count}\`);
  }, [count]);
  
  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>useMemo</h3>

          <p>The useMemo hook memoizes expensive calculations to avoid redundant computation.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ list }) {
  const [filter, setFilter] = useState('');
  
  // This calculation only runs when list or filter changes
  const filteredList = useMemo(() => {
    console.log('Filtering list...');
    return list.filter(item => item.includes(filter));
  }, [list, filter]);
  
  return (
    <div>
      <input 
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>useRef</h3>

          <p>The useRef hook creates a mutable reference that persists across renders.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Focus the input on mount
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} />;
}`}
              </code>
            </pre>
          </div>

          <h2>Custom Hooks</h2>

          <p>One of the most powerful features of hooks is the ability to create custom hooks to encapsulate and reuse stateful logic.</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { useState, useEffect } from 'react';

// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
}

// Usage in component
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      Window dimensions: {width} x {height}
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h2>Hooks Best Practices</h2>

          <ol>
            <li><strong>Always use hooks at the top level</strong> - Don't call hooks inside loops, conditions, or nested functions</li>
            <li><strong>Only call hooks from React function components</strong> - Don't call hooks from regular JavaScript functions</li>
            <li><strong>Name custom hooks with "use" prefix</strong> - This convention helps identify hooks at a glance</li>
            <li><strong>Keep dependency arrays accurate</strong> - Missing dependencies can lead to stale closures</li>
            <li><strong>Extract complex logic into custom hooks</strong> - Keep components clean by abstracting stateful logic</li>
            <li><strong>Prefer multiple simple useState calls over complex state objects</strong> - Makes updates clearer</li>
            <li><strong>Use useReducer for complex state logic</strong> - When state transitions depend on previous state</li>
          </ol>

          <h2>Common Patterns with Hooks</h2>

          <h3>Data Fetching</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    
    fetchData();
    
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  return { data, loading, error };
}`}
              </code>
            </pre>
          </div>

          <h3>Form Handling</h3>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const reset = () => {
    setValues(initialValues);
  };
  
  return { values, handleChange, reset };
}`}
              </code>
            </pre>
          </div>

          <h2>Conclusion</h2>

          <p>React Hooks represent a paradigm shift in how we build React components. They enable cleaner, more modular code with better separation of concerns. By mastering hooks, you'll write more maintainable and reusable React components.</p>

          <p>Key takeaways:</p>
          <ul>
            <li>Use hooks to replace class component features in function components</li>
            <li>Extract reusable logic into custom hooks</li>
            <li>Follow the rules of hooks for reliable code</li>
            <li>Combine multiple hooks to build complex features</li>
            <li>Refactor class components to hooks gradually</li>
          </ul>

          <hr />

          <p><em>Ready to take your React skills to the next level? Check out my other articles on React patterns and advanced techniques.</em></p>
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
                to="/blog/modern-css-techniques"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/from-gamer-to-full-stack-developer"
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

export default MasteringReactHooks;
