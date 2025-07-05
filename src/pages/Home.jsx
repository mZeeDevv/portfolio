import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';
import Profile from '../../public/profile.png'
import Testimonials from '../components/Testimonials'
import hike from '../media/hike.jpg';
import samp from '../media/samp.jpeg';
export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Content data for the content section
  const contentItems = [
    {
      id: 1,
      title: "Exporting Grid Data to Excel file | Bryntum",
      type: "Tutorial",
      date: "2025-01-20",
      description: "Ever thought of exporting your grid data to an Excel file with just one click? Learn how Bryntum allows you to export the grid data to an Excel file effortlessly.",
      tags: ["Bryntum", "JavaScript", "Excel", "Data Export", "Grid"],
      readTime: "5 minute read",
      featured: true,
      slug: "exporting-grid-data-to-excel-bryntum"
    },
    {
      id: 2,
      title: "From a Gamer to Full Stack Developer",
      type: "Story",
      date: "2023-11-02",
      description: "Read how a full time gamer became a Full Stack Developer. What was the motivation behind it and how he achieved it - a personal journey story.",
      tags: ["Personal Journey", "Career", "Gaming", "Programming", "Story"],
      readTime: "6 minute read",
      featured: true,
      slug: "from-gamer-to-full-stack-developer"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      'Blog Post': 'bg-portfolio-primary-100 text-portfolio-primary-700',
      'Tutorial': 'bg-portfolio-accent-100 text-portfolio-accent-700',
      'Article': 'bg-portfolio-secondary-100 text-portfolio-secondary-700',
      'Guide': 'bg-green-100 text-green-700',
      'Story': 'bg-purple-100 text-purple-700'
    };
    return colors[type] || 'bg-portfolio-neutral-100 text-portfolio-neutral-700';
  };

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="min-h-screen">
      {/* Hero/Introduction Section */}
      <section id="home" className="py-24 bg-gradient-to-br from-portfolio-primary-50 via-white to-portfolio-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-portfolio-primary-100 text-portfolio-primary-800 mb-4">
                  👋 Hey there!
                </span>
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-portfolio-neutral-800 mb-4">
                  I'm <span className="text-portfolio-primary-600">Hamza Khattak</span>
                </h1>
                <p className="text-xl text-portfolio-secondary-500 mb-8 leading-relaxed">
                  Full-Stack Web Developer & Content Creator
                </p>
                
                {/* Highlights/Roles */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-800 text-sm">Full Stack</h3>
                        <p className="text-blue-600 text-xs">Developer</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-green-800 text-sm">Community</h3>
                        <p className="text-green-600 text-xs">Specialist</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-purple-800 text-sm">Content</h3>
                        <p className="text-purple-600 text-xs">Creator</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200 transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800 text-sm">Public</h3>
                        <p className="text-orange-600 text-xs">Speaker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-portfolio-neutral-600 leading-relaxed mb-6">
                  As a <span className="font-semibold text-portfolio-primary-600">full-stack web developer</span> with a strong passion for JavaScript and its frameworks, I've worked on both national and international projects across different countries. My expertise in web technologies allows me to build responsive, interactive, and user-friendly applications that solve real-world problems.
                </p>
                
                <p className="text-portfolio-neutral-600 leading-relaxed mb-6">
                  Beyond coding, I'm deeply involved in tech communities. I'm currently leading the city-wise largest Microsoft chapter called <span className="font-semibold text-portfolio-primary-600">Microsoft Learn Student Ambassadors - Islamabad</span>. I started as a Tech Team Lead for <span className="font-semibold text-portfolio-primary-600">Google Developer Student Club - IIUI</span> and was later promoted to <span className="font-semibold text-portfolio-primary-600">Community Lead by Google</span> for the 2024-25 tenure.
                </p>
                
                <p className="text-portfolio-neutral-600 leading-relaxed mb-6">
                  I enjoy sharing knowledge and building connections within the tech community, helping others grow and discover their potential in the exciting world of technology.
                  When I'm not coding or leading communities, you might find me playing with cats, I absolutely love them!
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-transparent border-2 border-portfolio-primary-600 text-portfolio-primary-600 hover:bg-portfolio-primary-50 font-medium rounded-lg transition-all text-center"
                >
                  Get In Touch
                </a>
              </div>

              {/* Story Link */}
              <div className="bg-gradient-to-r from-portfolio-primary-50 to-portfolio-secondary-50 rounded-xl p-6 border-l-4 border-portfolio-primary-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-portfolio-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👉</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-neutral-800 mb-2">My Technical Journey</h3>
                    <p className="text-portfolio-secondary-600 mb-3">
                      Read how I started my technical journey from a game
                    </p>
                    <a
                      href="#content"
                      className="inline-flex items-center text-portfolio-primary-600 font-medium hover:text-portfolio-primary-700 transition-colors"
                    >
                      Read My Story
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-portfolio">
                  <div className="aspect-square bg-gradient-to-br from-portfolio-primary-100 to-portfolio-secondary-100 flex items-center justify-center">
                    {/* Placeholder for your image */}
                   
                    <img 
                      src={Profile} 
                      alt="Hamza Khattak" 
                      className="w-full h-full object-cover"
                    />
                   
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-primary-600 rounded-full opacity-10"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-secondary-600 rounded-full opacity-10"></div>
                
                {/* Achievement Badges */}
               

                <div className="absolute -bottom-6 left-6 right-6 flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/mzeedev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="https://github.com/mZeeDevv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/mzeedev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    aria-label="Instagram Profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Content & Writing Section */}
      <section id="content" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
              Content & Writing
            </h2>
            <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto mb-8">
              Sharing insights, tutorials, and thoughts on software development, technology trends, 
              and best practices in the tech industry.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Featured Content */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-8">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredContent.map((item) => (
                <article 
                  key={item.id}
                  className="bg-white rounded-xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden group cursor-pointer animate-fade-in-up"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <span className="text-portfolio-secondary-500 text-sm">
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold font-heading text-portfolio-neutral-800 mb-3 group-hover:text-portfolio-primary-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-portfolio-secondary-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-portfolio-neutral-100 text-portfolio-secondary-600 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-portfolio-secondary-500 text-sm">
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <Link
                        to={`/blog/${item.slug}`}
                        className="text-portfolio-primary-600 hover:text-portfolio-primary-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* View More Content Button */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View Full Content Collection
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* What I Love to Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-secondary-50 via-white to-portfolio-primary-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
              What I Love to Do When I'm Not Coding
            </h2>
            <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto">
              Life is about balance. When I step away from the keyboard, these are the activities that recharge my creativity and keep me inspired.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Exploring Nature */}
            <div className="group bg-white rounded-2xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                {/* Actual hike image */}
                <img 
                  src={hike} 
                  alt="Hiking and exploring nature" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating nature icons */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 2.5L16 4" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse backdrop-blur-sm" style={{animationDelay: '1s'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl">Exploring</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-4 group-hover:text-green-600 transition-colors">
                  Exploring Nature
                </h3>
                <p className="text-portfolio-secondary-600 mb-6 leading-relaxed">
                  There's something magical about being surrounded by green trees, fresh air, and the sounds of nature. 
                  I love hiking through forests, discovering hidden trails, and finding peaceful spots where I can disconnect 
                  from technology and reconnect with the natural world.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">🌲 Hiking</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">🏞️ Nature Photography</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">🌿 Trail Walking</span>
                </div>
                
                <div className="flex items-center text-green-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  "Nature is the best debugger"
                </div>
              </div>
            </div>

            {/* Playing SAMP */}
            <div className="group bg-white rounded-2xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                {/* SAMP image */}
                <img 
                  src={samp} 
                  alt="Playing SA-MP - San Andreas Multiplayer" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gaming controller icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Car icon */}
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.859 0-7 3.141-7 7v1h1 1 14z"/>
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl">Gaming</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-4 group-hover:text-blue-600 transition-colors">
                  Playing SA-MP
                </h3>
                <p className="text-portfolio-secondary-600 mb-6 leading-relaxed">
                  San Andreas Multiplayer holds a special place in my heart! I love the open-world freedom, 
                  the community aspect, and the endless possibilities for creativity. Whether it's role-playing, 
                  racing, or just cruising around Los Santos with friends, SAMP provides the perfect escape 
                  and nostalgic gaming experience.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">🏎️ Racing</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">🏘️ Role-playing</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">👥 Community</span>
                </div>
                
                <div className="flex items-center text-blue-600 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9V10z" />
                  </svg>
                  "Gaming is my creative playground"
                </div>
              </div>
            </div>
          </div>

          {/* Fun Quote Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-portfolio-primary-50 to-portfolio-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-4">
                "The best ideas come when you're not trying to have them"
              </h3>
              <p className="text-portfolio-secondary-600 mb-6">
                These activities help me maintain a healthy work-life balance and often spark the most creative solutions 
                to programming challenges. Sometimes the best debugging happens when you're not looking at code at all!
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center text-green-600">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 2.5L16 4" />
                  </svg>
                  <span className="font-medium">Fresh Air</span>
                </div>
                <div className="w-2 h-2 bg-portfolio-primary-400 rounded-full"></div>
                <div className="flex items-center text-blue-600">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.859 0-7 3.141-7 7v1h1 1 14z"/>
                  </svg>
                  <span className="font-medium">Fun Times</span>
                </div>
                <div className="w-2 h-2 bg-portfolio-secondary-400 rounded-full"></div>
                <div className="flex items-center text-portfolio-primary-600">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <span className="font-medium">Inspiration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cat Love Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-2xl p-8 max-w-4xl mx-auto border-l-4 border-amber-400">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-2">😺</span>
                <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800">
                  I Love Cats!
                </h3>
              </div>
              <p className="text-portfolio-secondary-600">
                When I'm not coding or engaging with tech communities, you'll find me spending time with feline friends. 
                Their curious nature, playful spirit, and independent personality always bring joy to my day!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
