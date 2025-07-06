import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <h1>From a Gamer to Full Stack Developer</h1>

          <p><em>Published on: November 2, 2023</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: Personal Journey, Career, Gaming, Programming, Story</em></p>

          <hr />

          <p>I used to spend 10-12 hours a day in front of my computer, but not writing code—playing games. My journey from hardcore gamer to professional web developer wasn't planned, but looking back, the progression feels strangely natural. Here's my story of how gaming unexpectedly led me to a fulfilling career in web development.</p>

          <h2>The Gaming Years</h2>

          <h3>Immersed in Virtual Worlds</h3>

          <p>As a teenager, I was completely immersed in gaming. From MMORPGs like World of Warcraft to competitive games like Counter-Strike, I spent countless hours perfecting my skills. Gaming wasn't just a hobby—it was my identity.</p>

          <p>My day typically started with gaming and ended with gaming. School and other responsibilities often took a backseat. While this wasn't the healthiest lifestyle, it did instill in me several qualities that would later prove valuable:</p>

          <ul>
            <li><strong>Persistence</strong> - Repeatedly attempting difficult raids or boss battles</li>
            <li><strong>Problem-solving</strong> - Figuring out optimal strategies and builds</li>
            <li><strong>Community engagement</strong> - Coordinating with guild members across time zones</li>
            <li><strong>Technical aptitude</strong> - Troubleshooting hardware issues and optimizing game performance</li>
          </ul>

          <h3>The Turning Point</h3>

          <p>The transition began when our guild website needed an overhaul. No one wanted to take on the task, so I reluctantly volunteered, despite having zero web development experience. Armed with determination and Google, I started learning HTML and CSS.</p>

          <p>What began as a chore quickly turned into fascination. The immediate feedback loop of writing code and seeing visual results reminded me of the satisfaction from gaming achievements, but with something tangible to show for my efforts.</p>

          <h2>The Learning Journey</h2>

          <h3>First Steps in Programming</h3>

          <p>My first website was a disaster by any objective standard—table layouts, inline styles, and flashing text that would make any designer cringe. But it worked, and the positive response from my guild members was encouraging.</p>

          <p>This small success sparked my curiosity. I began experimenting with JavaScript to add interactive elements to our guild website. Each new feature I implemented gave me the same dopamine hit as leveling up in a game.</p>

          <h3>From Casual Interest to Serious Pursuit</h3>

          <p>Within months, coding began competing with gaming for my attention. I started with small projects:</p>

          <ul>
            <li>A damage calculator for our guild</li>
            <li>A character build planner</li>
            <li>A raid schedule coordinator</li>
          </ul>

          <p>These projects taught me the fundamentals of programming logic, data structures, and user experience design. More importantly, they showed me how coding could be creative, challenging, and rewarding.</p>

          <h2>The Career Transition</h2>

          <h3>Making the Leap</h3>

          <p>The real turning point came when I created a popular addon for World of Warcraft that gained thousands of users. The feedback was overwhelming, and for the first time, I realized my coding skills could have real impact.</p>

          <p>I started dedicating more time to learning:</p>

          <ul>
            <li>Taking online courses in JavaScript and PHP</li>
            <li>Contributing to open-source projects</li>
            <li>Building increasingly complex web applications</li>
          </ul>

          <p>As my skills grew, my gaming hours naturally decreased. The thrill of solving complex coding problems and building useful applications began to replace the satisfaction I once got from gaming achievements.</p>

          <h3>First Professional Steps</h3>

          <p>My first job in web development was for a small local business that needed an e-commerce site. The pay was minimal, but the experience was invaluable. I approached the project with the same dedication I once gave to mastering a new game.</p>

          <p>What followed was a series of freelance projects, each more challenging than the last. Within two years, I had built a portfolio impressive enough to land a full-time position as a junior developer at a tech company.</p>

          <h2>The Full Stack Journey</h2>

          <h3>Expanding My Horizons</h3>

          <p>As my career progressed, I discovered that my gaming background had uniquely prepared me for the demands of full-stack development:</p>

          <ul>
            <li>The ability to focus for long periods came from marathon gaming sessions</li>
            <li>Strategic thinking from complex multiplayer games translated to system architecture</li>
            <li>Team coordination skills from raids applied to development teams</li>
            <li>Adapting to constantly changing game metas prepared me for the ever-evolving tech landscape</li>
          </ul>

          <p>I expanded my skills beyond frontend development to include:</p>

          <ul>
            <li>Backend technologies (Node.js, Python, SQL)</li>
            <li>DevOps and deployment strategies</li>
            <li>Performance optimization</li>
            <li>UX/UI design principles</li>
          </ul>

          <h3>Where I Am Today</h3>

          <p>Today, I work as a senior full-stack developer leading a team building complex web applications. The hours I spend coding now equal those I once spent gaming, but with greater purpose and satisfaction.</p>

          <p>Interestingly, I still game occasionally—but now as a way to relax rather than as a lifestyle. Gaming has become a healthy hobby rather than an obsession.</p>

          <h2>Lessons Learned</h2>

          <h3>What Gaming Taught Me About Development</h3>

          <p>My unusual career path taught me several valuable lessons:</p>

          <ol>
            <li><strong>Transferable skills exist in unexpected places</strong> - Gaming developed my problem-solving abilities, persistence, and ability to learn complex systems</li>
            <li><strong>Passion can shift and evolve</strong> - The same intensity I brought to gaming found a more productive outlet in coding</li>
            <li><strong>Community matters</strong> - Both gaming and development thrive on strong communities sharing knowledge</li>
            <li><strong>Balance is essential</strong> - The all-consuming nature of my gaming years taught me the importance of maintaining better balance as a developer</li>
          </ol>

          <h3>Advice for Other Gamers</h3>

          <p>If you're a gamer interested in development, here's my advice:</p>

          <ul>
            <li><strong>Start with game-adjacent projects</strong> - Create tools, websites, or mods for games you love</li>
            <li><strong>Recognize your transferable skills</strong> - Your gaming experience has likely taught you valuable lessons</li>
            <li><strong>Find a community</strong> - Connect with other developers who share your interests</li>
            <li><strong>Apply your gaming discipline</strong> - Channel the focus you give to games into learning to code</li>
          </ul>

          <h2>Conclusion</h2>

          <p>My journey from spending 12 hours a day gaming to spending those same hours developing web applications wasn't planned, but it feels like where I was always meant to be. The skills, discipline, and problem-solving mindset I developed through gaming created the foundation for my success as a developer.</p>

          <p>If there's one thing I've learned, it's that no experience is wasted. Those thousands of hours gaming weren't just idle entertainment—they were unknowingly preparing me for a fulfilling career in technology.</p>

          <hr />

          <p><em>Are you a gamer interested in development? I'd love to hear your story or answer your questions about making the transition.</em></p>
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
