import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mendantra",
      description: "Your AI powered doctor, a full stack application that leverages the power of AI to provide personalized health insights and recommendations.",
      technologies: ["Python", "Vite", "Tailwind CSS", "JavaScript", "React", "Gemini", "FastAPI", "RAG"],
      category: "Full Stack",
      status: "In Progress",
      github: "#",
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: true,
      showPreview: false
    },
    {
      id: 2,
      title: "JetSeeker",
      description: "A full stack project for booking flights, hotels, and car rentals with real-time availability and user authentication.",
      technologies: ["React", "Firebase", "Booking.com API", "Node.js", "Express.js", "Tailwind CSS", "Chart.js"],
      category: "Full Stack",
      status: "Completed",
      github: "#",
      live: null,
      image: "/api/placeholder/400/250",
      showCode: true,
      showPreview: false
    },
    {
      id: 3,
      title: "Blood Beacon ",
      description: "A full stack project for blood donation, connecting donors with recipients in need, featuring real-time notifications and user profiles.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: true,
      showPreview: true
    },
      {
      id: 4,
      title: "Realtor Clone",
      description: "A full stack project for real estate listings, allowing users to search, filter, and view properties with detailed information and images.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: true,
      showPreview: false
    },
    {
      id: 5,
      title: "ProCare Nepal",
      description: "A full stack project for healthcare services in Nepal, providing a platform for patients to book appointments and access medical information.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: false,
      showPreview: true
    },
    {
      id: 6,
      title: "ProCare Nepal Software",
      description: "A WebApp for each hospital in Nepal to manage their patients, doctors, and appointments. It provides a user-friendly interface for both patients and healthcare providers.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "Full Stack",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: false,
      showPreview: true
    },
     {
      id: 7,
      title: "Code Testify",
      description: "A project for Software providers to show their service and for users to find the best software for their needs. It includes a user-friendly interface and advanced search functionality.",
      technologies: ["React", "Tailwind CSS"],
      category: "Frontend",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: false,
      showPreview: true
    },  {
      id: 8,
      title: "Community Website",
      description: "A full stack project for community to show their on-going events, register users and allow users to post their events. It includes a user-friendly interface and advanced search functionality.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Express.js", "Node.js", ],
      category: "Full Stack",
      status: "Completed",
      github: null,
      live: "#",
      image: "/api/placeholder/400/250",
      showCode: true,
      showPreview: false
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700',
      'In Progress': 'bg-yellow-100 text-yellow-700',
      'Planning': 'bg-blue-100 text-blue-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Web Development': 'bg-portfolio-primary-100 text-portfolio-primary-700',
      'Full Stack': 'bg-portfolio-secondary-100 text-portfolio-secondary-700',
      'Mobile App': 'bg-purple-100 text-purple-700',
      'API': 'bg-orange-100 text-orange-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-secondary-50 via-white to-portfolio-primary-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto">
            A showcase of my development work, from web applications to full-stack solutions. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-portfolio-primary-100 to-portfolio-secondary-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-portfolio-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    {project.showCode && (
                      <a
                        href={project.github || "#"}
                        className={`w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors ${
                          !project.github ? 'cursor-not-allowed opacity-75' : ''
                        }`}
                        {...(!project.github && { onClick: (e) => e.preventDefault() })}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.showPreview && (
                      <a
                        href={project.live || "#"}
                        className={`w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors ${
                          !project.live || project.live === "#" ? 'cursor-not-allowed opacity-75' : ''
                        }`}
                        {...((!project.live || project.live === "#") && { onClick: (e) => e.preventDefault() })}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-portfolio-neutral-800 mb-3 group-hover:text-portfolio-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-secondary-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-portfolio-neutral-100 text-portfolio-secondary-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.showCode && (
                    <a
                      href={project.github || "#"}
                      className={`px-4 py-2 bg-portfolio-neutral-100 hover:bg-portfolio-neutral-200 text-portfolio-neutral-700 text-sm font-medium rounded-lg transition-colors text-center ${
                        project.showPreview ? 'flex-1' : 'w-full'
                      } ${!project.github || project.github === "#" ? 'cursor-not-allowed opacity-75' : ''}`}
                      {...((!project.github || project.github === "#") && { onClick: (e) => e.preventDefault() })}
                    >
                      View Code
                    </a>
                  )}
                  {project.showPreview && (
                    <a
                      href={project.live || "#"}
                      className={`px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white text-sm font-medium rounded-lg transition-colors text-center ${
                        project.showCode ? 'flex-1' : 'w-full'
                      } ${!project.live || project.live === "#" ? 'cursor-not-allowed opacity-75' : ''}`}
                      {...((!project.live || project.live === "#") && { onClick: (e) => e.preventDefault() })}
                    >
                      Preview
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-portfolio-primary-50 to-portfolio-secondary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-portfolio-neutral-800 mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-portfolio-secondary-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-transparent border-2 border-portfolio-primary-600 text-portfolio-primary-600 hover:bg-portfolio-primary-50 font-medium rounded-lg transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
