import React, { useState, useEffect } from 'react';
import gdg from '../media/gdg.png'
import mlh from '../media/mlh.jpg'
import mls from '../media/mls.png'
import Event1 from '../media/Event1.jpg'
import Event2 from '../media/Event2.jpg'
import Event3 from '../media/Event3.jpg'
import Event4 from '../media/Event4.jpg'
import Event5 from '../media/Event5.jpg'
const Events = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events = [
    {
      id: 1,
      name: "Build with AI",
      date: "2025-04-22", // Using proper date format
      location: "National Incubation Center, Rawalpindi",
      type: "Conference",
      shortDescription: "Speaking at Google-sponsored event about Google Solution Challenges and AI innovations.",
      fullDescription: "Participated as a speaker at the Build with AI conference sponsored by Google. Presented on Google Solution Challenges, showcasing real-world applications of AI technology and discussing innovative approaches to solving complex problems. The event brought together AI enthusiasts, developers, and industry professionals to explore the latest trends and advancements in artificial intelligence.",
      image: Event1,
    },
    {
      id: 2,
      name: "Code o' Clock",
      date: "2024-10-28", // Using proper date format
      location: "National University of Science and Technology, Islamabad",
      type: "Workshop",
      shortDescription: "Conducted workshop on programming fundamentals, helping students learn the basics of programming languages.",
      fullDescription: "Led an interactive workshop at NUST focused on programming fundamentals. The session was designed to help students grasp the core concepts of programming languages and build a strong foundation for their coding journey. Topics covered included variables, control structures, functions, and basic algorithms. Participants engaged in hands-on coding exercises and received personalized guidance throughout the workshop.",
      image: Event2,
    },
    {
      id: 3,
      name: "Explore AI",
      date: "2025-02-18", // Using proper date format
      location: "International Islamic University, Islamabad",
      type: "Workshop",
      shortDescription: "Workshop on Microsoft Copilot, exploring AI-assisted development and productivity enhancements.",
      fullDescription: "Conducted a comprehensive workshop on Microsoft Copilot, demonstrating how AI can enhance development workflows and boost productivity. The session covered practical applications, best practices, and advanced techniques for leveraging AI in software development. Following the event, I was contacted by the Microsoft team for feedback on the workshop and to discuss potential improvements to their AI tools. This led to an ongoing dialogue with the Microsoft team about AI-assisted development.",
      image: Event3,
    },
    {
      id: 4,
      name: "CodeBuzz",
      date: "2025-05-23", // Using proper date format
      location: "International Islamic University, Islamabad",
      type: "Hackathon",
      shortDescription: "Programming competition focused on Microsoft Copilot integration and innovative software solutions.",
      fullDescription: "Participated in the CodeBuzz hackathon, a high-energy programming competition centered around Microsoft Copilot. The event challenged participants to create innovative software solutions by leveraging AI assistance. Teams worked intensively to develop applications that showcased the potential of AI-human collaboration in solving real-world problems. The hackathon featured multiple rounds of coding challenges, mentorship sessions, and final project presentations to a panel of industry judges.",
      image: Event4,
    },
    {
      id: 5,
      name: "Azure Fundamentals",
      date: "2024-12-11", // Using proper date format
      location: "International Islamic University, Islamabad",
      type: "Workshop",
      shortDescription: "Workshop on hosting static web applications with Azure, covering cloud deployment fundamentals.",
      fullDescription: "Conducted a hands-on workshop focused on Azure Fundamentals, specifically targeting static web application hosting. Participants learned how to deploy and manage web applications using Azure's cloud infrastructure. The workshop covered essential topics including resource groups, App Service plans, deployment methods, custom domains, and performance optimization. Attendees gained practical experience by deploying their own applications during the session and received guidance on best practices for cloud architecture.",
      image: Event5,
    },
    {
      id: 6,
      name: "HackAware",
      date: "2025-01-15", // Approximate date
      location: "Online (Virtual Event)",
      type: "Webinar",
      shortDescription: "Virtual session joined by 90+ attendees to learn about hackathons and my experience with MLH.",
      fullDescription: "Hosted a virtual session with over 90 participants eager to learn about hackathons and my experience with Major League Hacking (MLH). Shared insights on hackathon preparation, team formation, project ideation, and effective execution within tight timeframes. Discussed my personal journey with MLH, highlighting key learnings, challenges faced, and success strategies. The webinar included a Q&A session where participants received personalized advice for their hackathon journeys.",
      image: "https://dummyimage.com/400x250/4F46E5/ffffff&text=HackAware"
    },
    {
      id: 7,
      name: "The JavaScript Hour",
      date: "2025-03-10", // Approximate date
      location: "Online (Microsoft Teams)",
      type: "Webinar",
      shortDescription: "JavaScript session on Microsoft Teams with 100+ participants focusing on modern JS development.",
      fullDescription: "Hosted 'The JavaScript Hour' webinar on Microsoft Teams, attracting over 100 participants interested in modern JavaScript development. The session covered ES6+ features, async programming patterns, performance optimization techniques, and framework comparison. Live coding demonstrations illustrated practical applications of advanced JavaScript concepts. The interactive format encouraged audience participation through polls, code challenges, and a lively Q&A segment where participants shared their own experiences and received expert guidance.",
      image: "https://dummyimage.com/400x250/F59E0B/ffffff&text=JavaScript+Hour"
    },
    {
      id: 8,
      name: "Getting Started as Web Developer with VS Code",
      date: "2025-06-05", // Approximate date
      location: "Online (Virtual Event)",
      type: "Webinar",
      shortDescription: "Virtual session joined by 60+ participants learning about web development with VS Code.",
      fullDescription: "Conducted an online workshop attended by over 60 participants eager to jumpstart their web development journey with Visual Studio Code. The session covered VS Code setup, essential extensions, productivity shortcuts, debugging tools, and integration with version control systems. Demonstrated how to create a complete web project from scratch, highlighting VS Code's features that streamline the development workflow. Participants received a resource pack including a curated list of extensions, keyboard shortcut cheat sheets, and starter project templates.",
      image: "https://dummyimage.com/400x250/0EA5E9/ffffff&text=VS+Code+Workshop"
    }
  ];
  

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'Conference': 'bg-blue-100 text-blue-800',
      'Summit': 'bg-purple-100 text-purple-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Bootcamp': 'bg-orange-100 text-orange-800',
      'Hackathon': 'bg-red-100 text-red-800',
      'Webinar': 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const communities = [
    {
      name: "Google Developer Groups on Campus - IIUI",
      description: "Leading developer community focused on modern Google technologies and innovation",
      image: gdg,
      color: "from-blue-500 to-indigo-600",
      positions: [
        {
          role: "Community Manager",
          tenure: "2024 - 2025",
          type: "current"
        },
        {
          role: "Techincal Lead",
          tenure: "2023 - 2024",
          type: "previous"
        }
      ]
    },
    {
      name: "Mircosoft Learn Student Ambassadors, Islamabad",
      description: "City-wise Largest Microsoft Chapter in Pakistan, empowering students with Microsoft technologies",
      image: mls,
      color: "from-cyan-500 to-blue-600",
      positions: [
        {
          role: "Community Manager",
          tenure: "2025 - Present",
          type: "current"
        },
        {
          role: "Operations Team Member",
          tenure: "2024 - 2025",
          type: "previous"
        }
      ]
    },
    {
      name: "Major League Hacking (MLH)",
      description: "Contributing to open source projects and mentoring new contributors",
      image: mlh, 
      color: "from-green-500 to-emerald-600",
      positions: [
        {
          role: "Student Mentor",
          tenure: "2021 - 2022",
          type: "previous"
        },
        {
          role: "Community Member",
          tenure: "2020 - 2021",
          type: "previous"
        }
      ]
    },
    
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-primary-50 min-h-screen">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-20 h-20 bg-portfolio-primary-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-portfolio-secondary-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-portfolio-primary-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-display font-bold text-portfolio-neutral-800 mb-6">
            Events & Communities
          </h1>
          <p className="text-xl text-portfolio-secondary-500 max-w-3xl mx-auto mb-8">
            Discover the communities I'm part of and upcoming tech events, conferences, and workshops
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

        {/* Communities Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-portfolio-neutral-800 mb-4">
              Communities I'm Part Of
            </h2>
            <p className="text-lg text-portfolio-secondary-500 max-w-2xl mx-auto">
              Active member and contributor in various tech communities, fostering collaboration and knowledge sharing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-portfolio transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Community Header with Gradient */}
                <div className={`h-20 bg-gradient-to-r ${community.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white bg-opacity-10"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      {/* Community Image */}
                      <img 
                        src={community.image} 
                        alt={community.name}
                        className="w-12 h-12 object-contain rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Community Content */}
                <div className="p-6 pt-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-portfolio-neutral-800 mb-2 group-hover:text-portfolio-primary-600 transition-colors duration-300">
                      {community.name}
                    </h3>
                    <p className="text-sm text-portfolio-neutral-600 leading-relaxed mb-4">
                      {community.description}
                    </p>
                  </div>

                  {/* Positions - LinkedIn Style */}
                  <div className="space-y-3">
                    {community.positions.map((position, posIndex) => (
                      <div key={posIndex} className="flex items-start gap-3">
                        {/* Position Line Indicator */}
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-3 h-3 rounded-full ${position.type === 'current' ? 'bg-green-500' : 'bg-portfolio-neutral-300'}`}></div>
                          {posIndex < community.positions.length - 1 && (
                            <div className="w-0.5 h-8 bg-portfolio-neutral-200 mt-1"></div>
                          )}
                        </div>
                        
                        {/* Position Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-semibold text-portfolio-primary-600 group-hover:text-portfolio-primary-700 transition-colors duration-300">
                              {position.role}
                            </h4>
                            {position.type === 'current' && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-portfolio-secondary-500 font-medium">
                            {position.tenure}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total Experience Indicator */}
                  <div className="mt-4 pt-4 border-t border-portfolio-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-portfolio-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-portfolio-primary-600 font-medium">
                        {community.positions.length > 1 ? 'Multi-role Member' : 'Active Member'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-portfolio-neutral-800 mb-4">
            Featured Events
          </h2>
          <p className="text-lg text-portfolio-secondary-500 max-w-2xl mx-auto">
            Tech events, conferences, and workshops that I've spoken at or participated in
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-portfolio transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => openModal(event)}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden rounded-t-xl h-48 bg-gradient-to-br from-portfolio-primary-200 to-portfolio-secondary-200">
                {event.image ? (
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-portfolio-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                )}
                {/* Event Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-portfolio-secondary-500 mb-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{event.location}</span>
                </div>

                <h3 className="text-xl font-bold text-portfolio-neutral-800 mb-2 group-hover:text-portfolio-primary-600 transition-colors duration-300">
                  {event.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-portfolio-primary-600 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v-6h2v-6zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  <span className="font-semibold">{formatDate(event.date)}</span>
                </div>

                <p className="text-portfolio-neutral-600 text-sm mb-4 line-clamp-3">
                  {event.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <button className="text-portfolio-primary-600 font-semibold text-sm hover:text-portfolio-primary-800 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <div className="h-64 bg-gradient-to-br from-portfolio-primary-200 to-portfolio-secondary-200 rounded-t-xl flex items-center justify-center">
                {selectedEvent.image ? (
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                ) : (
                  <svg className="w-24 h-24 text-portfolio-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                )}
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <svg className="w-6 h-6 text-portfolio-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getEventTypeColor(selectedEvent.type)}`}>
                  {selectedEvent.type}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-portfolio-neutral-800 mb-4">
                {selectedEvent.name}
              </h2>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2 text-portfolio-primary-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v-6h2v-6zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  <span className="font-semibold">{formatDate(selectedEvent.date)}</span>
                </div>

                <div className="flex items-center gap-2 text-portfolio-secondary-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-portfolio-neutral-800 mb-3">About This Event</h3>
                <p className="text-portfolio-neutral-600 leading-relaxed">
                  {selectedEvent.fullDescription}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-portfolio-neutral-300 text-portfolio-neutral-700 rounded-lg hover:border-portfolio-primary-600 hover:text-portfolio-primary-600 transition-colors duration-300 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
