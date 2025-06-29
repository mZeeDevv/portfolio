import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A complete e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/hamzakhattak/ecommerce-platform",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "AI-Powered Task Manager",
      category: "ai",
      description: "Smart task management application that uses machine learning to prioritize tasks, suggest optimal scheduling, and provide productivity insights.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Python", "FastAPI", "TensorFlow", "PostgreSQL", "Redis"],
      liveUrl: "https://example-taskmanager.com",
      githubUrl: "https://github.com/hamzakhattak/ai-task-manager",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      category: "fullstack",
      description: "Modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption. Built with WebSocket technology.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Cloudinary"],
      liveUrl: "https://example-chat.com",
      githubUrl: "https://github.com/hamzakhattak/realtime-chat",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Vector Search Engine",
      category: "ai",
      description: "Semantic search engine using vector embeddings for document retrieval. Supports multiple file types and provides intelligent search results.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Qdrant", "FastAPI", "OpenAI", "Docker", "React"],
      liveUrl: null,
      githubUrl: "https://github.com/hamzakhattak/vector-search",
      featured: true,
      status: "completed"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      description: "Personal portfolio website showcasing projects, skills, and experience. Built with modern React and Tailwind CSS with smooth animations.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
      liveUrl: "https://hamzakhattak.dev",
      githubUrl: "https://github.com/hamzakhattak/portfolio",
      featured: false,
      status: "completed"
    },
    {
      id: 6,
      title: "Weather Analytics Dashboard",
      category: "fullstack",
      description: "Comprehensive weather analytics platform with historical data, forecasting, and interactive visualizations. Integrates multiple weather APIs.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Weather APIs"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/hamzakhattak/weather-analytics",
      featured: false,
      status: "completed"
    },
    {
      id: 7,
      title: "Blockchain Voting System",
      category: "blockchain",
      description: "Secure and transparent voting system built on blockchain technology. Ensures vote integrity and provides real-time results tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      liveUrl: null,
      githubUrl: "https://github.com/hamzakhattak/blockchain-voting",
      featured: false,
      status: "in-progress"
    },
    {
      id: 8,
      title: "DevOps Automation Suite",
      category: "devops",
      description: "Comprehensive DevOps toolchain for automated deployment, monitoring, and infrastructure management using modern cloud technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Ansible"],
      liveUrl: null,
      githubUrl: "https://github.com/hamzakhattak/devops-suite",
      featured: false,
      status: "in-progress"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'blockchain', name: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length },
    { id: 'devops', name: 'DevOps', count: projects.filter(p => p.category === 'devops').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status) => {
    return status === 'completed' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-yellow-100 text-yellow-700';
  };

  const getStatusText = (status) => {
    return status === 'completed' ? 'Completed' : 'In Progress';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            AI/ML integration, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-portfolio-neutral-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary-400 to-portfolio-accent-500 flex items-center justify-center">
                    <span className="text-white font-medium">Project Preview</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-portfolio-neutral-800 mb-3 group-hover:text-portfolio-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-portfolio-secondary-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-portfolio-neutral-100 text-portfolio-secondary-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-portfolio-neutral-300 hover:border-portfolio-neutral-400 text-portfolio-neutral-700 hover:text-portfolio-neutral-800 text-sm font-medium rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-portfolio-primary-600 text-white shadow-md'
                    : 'bg-white text-portfolio-secondary-600 hover:bg-portfolio-primary-50 hover:text-portfolio-primary-600 border border-portfolio-neutral-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-video bg-portfolio-neutral-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary-400 to-portfolio-accent-500 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Project Preview</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold font-heading text-portfolio-neutral-800 mb-2 group-hover:text-portfolio-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-secondary-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-portfolio-neutral-100 text-portfolio-secondary-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-portfolio-secondary-500 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white text-xs font-medium rounded-lg transition-colors"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 py-2 border border-portfolio-neutral-300 hover:border-portfolio-neutral-400 text-portfolio-neutral-700 hover:text-portfolio-neutral-800 text-xs font-medium rounded-lg transition-colors"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-portfolio-primary-50 to-portfolio-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-4">
              Have a project in mind?
            </h3>
            <p className="text-portfolio-secondary-600 mb-6 max-w-2xl mx-auto">
              I'm always interested in collaborating on exciting projects and bringing innovative ideas to life. 
              Let's discuss how we can work together.
            </p>
            <button className="px-8 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
