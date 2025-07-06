import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import samp from '../../media/samp.jpeg'; 


const FromGamerToFullStackDeveloper = () => {
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
            From a Gamer to Full Stack Developer
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>November 2, 2023</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>6 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Personal Journey', 'Career', 'Gaming', 'Programming', 'Story'].map((tag) => (
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
          <p className="text-sm text-portfolio-neutral-600 mb-6">
            <em>Published on: November 2, 2023</em><br />
            <em>Author: Hamza Khattak</em><br />
            <em>Tags: Personal Journey, Career, Gaming, Programming, Story</em>
          </p>

          <hr />

          <p className="lead text-xl font-medium mb-8">Gaming was once my entire world. I spent 12 to 13 hours daily playing San Andreas Multiplayer (SAMP) with my friends, completely immersed in a virtual reality that seemed more appealing than the real one. Little did I know that getting banned would become the unexpected catalyst for my programming journey and future career in web development.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">The Gaming Addiction: My Life in SAMP</h2>

          <div className="my-8 flex flex-col items-center">
            <img 
              src={samp} 
              alt="San Andreas Multiplayer (SAMP) gameplay screenshot" 
              className="rounded-lg shadow-lg max-w-full h-auto mb-3 border border-portfolio-neutral-200"
            />
            <p className="text-sm text-portfolio-neutral-600 italic text-center">The virtual world that consumed 12+ hours of my day and unexpectedly launched my programming career</p>
          </div>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Living in a Virtual World</h3>

          <p>SAMP (San Andreas Multiplayer) wasn't just a game for me—it was a lifestyle. My days revolved around coordinating with friends, planning heists, participating in virtual gang wars, and building our reputation on the server. The social dynamics, strategic thinking, and community engagement were addictive. Real-world responsibilities often took a backseat to our virtual adventures.</p>

          <p>The game taught me several valuable skills without me realizing it:</p>

          <ul>
            <li><strong>Team coordination</strong> - Planning and executing complex operations with teammates</li>
            <li><strong>Leadership</strong> - Managing our crew during tense situations</li>
            <li><strong>Problem-solving</strong> - Finding creative solutions to overcome challenges</li>
            <li><strong>Communication</strong> - Clear and effective communication during high-pressure moments</li>
          </ul>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">The Turning Point: From Ban to Breakthrough</h3>

          <p>The turning point in my gaming career came unexpectedly. After months of playing legitimately, I succumbed to the temptation of using cheats during one frustrating session. It was my first and last time—the anti-cheat system detected the unauthorized modifications, and my account was permanently banned.</p>

          <p>Initially devastated, I found myself with an abundance of free time and a lingering connection to the SAMP community. Rather than creating a new account, my curiosity led me in a different direction. I became interested in how these multiplayer servers actually worked behind the scenes.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">First Steps into Programming: The Unexpected Journey</h2>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Discovering PAWN: My First Programming Language</h3>

          <p>My research led me to PAWN, the scripting language used to develop SAMP servers. With no prior programming experience but armed with determination and countless YouTube tutorials, I embarked on learning this niche language. The idea of creating my own server where I could set the rules was incredibly appealing.</p>

          <p>I spent weeks learning the basics of PAWN syntax, server configuration, and game mechanics. Each small success—from setting up a basic server to implementing custom commands—gave me a sense of accomplishment that rivaled any in-game achievement.</p>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Building My Own SAMP Server: Trials and Tribulations</h3>

          <p>After a month of intensive learning, I launched my own SAMP server. It was a proud moment seeing my creation go live, but the excitement was short-lived. Running a successful server came with challenges I hadn't anticipated:</p>

          <ul>
            <li>Player acquisition was extremely difficult in a saturated market</li>
            <li>Server maintenance required constant attention</li>
            <li>The lack of players made the virtual world feel empty and lifeless</li>
            <li>Competing against established servers with large communities seemed impossible</li>
            <li>The technical limitations of PAWN became increasingly frustrating</li>
          </ul>

          <p>Despite these challenges, the experience sparked something new in me—a genuine interest in programming that extended beyond gaming. I began to wonder what else I could create with code.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">The CSS Revelation: When Web Development Captured My Imagination</h2>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">A YouTube Algorithm Miracle: My First Encounter with CSS</h3>

          <p>While still tinkering with my sparsely populated SAMP server, I was scrolling through YouTube when something caught my eye—a video showcasing impressive CSS animations. The creator was transforming simple HTML elements into dynamic, engaging interfaces with just a few lines of code. It was like magic.</p>

          <p>Intrigued, I clicked on the video and found myself captivated by the creative possibilities. The immediate visual feedback loop of CSS was satisfying in a way that reminded me of gaming—input, action, result—but with the added benefit of creating something original.</p>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">From Viewer to Creator: My First Web Projects</h3>

          <p>I quickly dove into HTML and CSS tutorials. Unlike PAWN, which was limited to a specific gaming environment, these web technologies offered universal applications. I started small:</p>

          <ul>
            <li><strong>Creating animated buttons</strong> that responded to hover effects</li>
            <li><strong>Building simple landing pages</strong> with smooth scroll animations</li>
            <li><strong>Experimenting with keyframe animations</strong> to create more complex movements</li>
            <li><strong>Implementing particle effects</strong> and background animations</li>
          </ul>

          <p>Each new CSS trick I learned opened doors to more complex techniques. The web development community was vast, supportive, and full of resources—a stark contrast to the niche PAWN community I had previously inhabited.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">Expanding My Horizons: The Full Stack Journey</h2>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">From CSS to JavaScript: Building Interactive Experiences</h3>

          <p>As my CSS skills improved, I began to see its limitations. For truly interactive experiences, I needed to learn JavaScript. The transition felt natural—many programming concepts I had picked up from PAWN transferred over, but JavaScript offered much more flexibility and power.</p>

          <p>My projects evolved from simple animations to interactive web applications:</p>

          <ul>
            <li>A <strong>portfolio website</strong> with interactive elements</li>
            <li>Small <strong>web games</strong> using canvas and DOM manipulation</li>
            <li>Interactive <strong>data visualizations</strong></li>
            <li>A <strong>task management application</strong> with local storage</li>
          </ul>

          <p>The hours I once dedicated to SAMP were now spent coding, but this time with tangible results and growing skills that could translate to real-world opportunities.</p>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Beyond the Frontend: Mastering Backend Technologies</h3>

          <p>My curiosity didn't stop at frontend development. I wanted to understand how everything worked together. This led me to explore backend technologies:</p>

          <ul>
            <li>Learning Node.js to create server-side applications</li>
            <li>Experimenting with databases like MongoDB and MySQL</li>
            <li>Understanding APIs and how to integrate them</li>
            <li>Deploying applications to the cloud</li>
          </ul>

          <p>The problem-solving mindset I had developed through gaming served me well. Debugging code felt similar to figuring out strategies in SAMP—identifying the issue, testing solutions, and iterating until successful.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">Breaking Into The Industry: From Hobbyist to Professional</h2>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">From Hobby to Career: My First Professional Opportunities</h3>

          <p>As my portfolio of projects grew, so did my confidence. I began freelancing, taking on small web development projects for local businesses. The positive feedback and real-world impact of my work were infinitely more satisfying than the virtual accomplishments of my gaming days.</p>

          <p>My first professional role came through a connection I made in a web development forum. A startup was looking for someone with both frontend and backend skills—exactly the full stack knowledge I had been building. Despite my unconventional background, my portfolio spoke for itself.</p>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Where I Am Today: Leading Development Teams</h3>

          <p>Today, I work as a senior full stack developer leading a team building web applications. The strategic thinking, team coordination, and problem-solving skills I developed through SAMP have proven invaluable in my professional life.</p>

          <p>I still game occasionally, but now as a way to unwind rather than as my primary focus. The ban that once felt like a tragedy turned out to be the best thing that could have happened to me.</p>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">Lessons Learned: Gaming Skills in a Professional Context</h2>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">What Gaming Taught Me About Development: Unexpected Parallels</h3>

          <p>My unusual career path taught me several valuable lessons:</p>

          <ol>
            <li><strong>Setbacks can be opportunities</strong> - Getting banned led me to discover programming</li>
            <li><strong>Transferable skills are everywhere</strong> - Gaming developed problem-solving, teamwork, and persistence that translated to development</li>
            <li><strong>Follow your curiosity</strong> - A random YouTube video about CSS animations changed my career trajectory</li>
            <li><strong>Community matters</strong> - Both gaming and development thrive on strong communities sharing knowledge</li>
          </ol>

          <h3 className="text-xl font-semibold text-portfolio-neutral-800 mt-8 mb-4">Advice for Other Gamers: Bridging Two Worlds</h3>

          <p>If you're a gamer interested in development, here's my advice:</p>

          <ul>
            <li><strong>Use your gaming background as an asset</strong> - The skills you've developed are valuable</li>
            <li><strong>Start with projects that interest you</strong> - Your passion will fuel the learning process</li>
            <li><strong>Embrace the learning curve</strong> - Programming, like gaming, takes time to master</li>
            <li><strong>Find your community</strong> - Connect with other developers who share your interests</li>
            <li><strong>Be patient with yourself</strong> - Skills develop over time, just like in games</li>
          </ul>

          <h2 className="text-2xl font-bold text-portfolio-primary-700 mt-10 mb-6">Conclusion: Gaming to Coding - An Unexpected Path</h2>

          <p>My journey from spending 12 to 13 hours a day in SAMP to spending those same hours developing web applications shows how passion can evolve in unexpected ways. What began with a devastating ban led to discovering PAWN, which opened the door to web development through a chance encounter with CSS animations.</p>

          <div className="bg-portfolio-primary-50 border-l-4 border-portfolio-primary-500 p-4 my-6 rounded-r">
            <p className="italic">If there's one thing I've learned, it's that no experience is wasted. Those thousands of hours gaming weren't just idle entertainment—they were unknowingly preparing me for a fulfilling career in technology. Sometimes, our greatest setbacks lead to our most significant opportunities.</p>
          </div>

          <hr className="my-8" />

          <p className="text-portfolio-primary-700 font-medium">Are you a gamer interested in development? I'd love to hear your story or answer your questions about making the transition.</p>
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
                to="/blog/mastering-react-hooks"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/adding-firebase-to-javascript-project"
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

export default FromGamerToFullStackDeveloper;
