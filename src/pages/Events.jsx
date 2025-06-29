import React, { useState, useEffect } from 'react';
import gdg from '../media/gdg.png'
import mlh from '../media/mlh.jpg'
import mls from '../media/mls.png'
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
      name: "React Conference 2024",
      date: "2024-03-15",
      location: "San Francisco, CA",
      type: "Conference",
      shortDescription: "Leading React conference with industry experts sharing the latest in React development.",
      fullDescription: "Join us at React Conference 2024, the premier gathering for React developers and enthusiasts. This three-day event features keynote presentations from React core team members, hands-on workshops, and networking opportunities with fellow developers. Learn about the latest React features, best practices, and the future roadmap of React development. Topics include React 18 features, Server Components, Concurrent Rendering, and advanced patterns for building scalable applications.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      name: "JavaScript Summit",
      date: "2024-04-22",
      location: "New York, NY",
      type: "Summit",
      shortDescription: "Premier JavaScript event covering modern frameworks, tools, and best practices.",
      fullDescription: "JavaScript Summit brings together the brightest minds in JavaScript development for an intensive day of learning and networking. Explore cutting-edge topics including modern JavaScript frameworks, performance optimization, security best practices, and the future of web development. The summit features expert speakers from leading tech companies, interactive workshops, and panel discussions on emerging technologies like WebAssembly, Progressive Web Apps, and serverless architecture.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      name: "AI & ML Developer Workshop",
      date: "2024-05-10",
      location: "Austin, TX",
      type: "Workshop",
      shortDescription: "Hands-on workshop exploring AI and Machine Learning integration in web applications.",
      fullDescription: "Dive deep into the world of Artificial Intelligence and Machine Learning with this comprehensive workshop designed for web developers. Learn how to integrate AI/ML capabilities into your applications using popular frameworks and APIs. Topics include natural language processing, computer vision, recommendation systems, and ethical AI development. Participants will work on real-world projects and gain practical experience with TensorFlow.js, OpenAI APIs, and other cutting-edge tools.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      name: "Full Stack Development Bootcamp",
      date: "2024-06-05",
      location: "Seattle, WA",
      type: "Bootcamp",
      shortDescription: "Intensive bootcamp covering full-stack development with modern technologies.",
      fullDescription: "Transform your development skills with our intensive Full Stack Development Bootcamp. This comprehensive program covers both frontend and backend technologies, including React, Node.js, databases, cloud deployment, and DevOps practices. Students will build multiple real-world projects, learn industry best practices, and gain hands-on experience with modern development workflows. The bootcamp includes mentorship sessions, code reviews, and career guidance to help participants advance their development careers.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      name: "Open Source Contribution Day",
      date: "2024-07-18",
      location: "Online",
      type: "Hackathon",
      shortDescription: "Global event focused on contributing to open source projects and building community.",
      fullDescription: "Join developers worldwide for Open Source Contribution Day, a virtual event dedicated to giving back to the open source community. Whether you're a beginner looking to make your first contribution or an experienced developer wanting to mentor others, this event offers something for everyone. Participants will work on popular open source projects, learn about project maintenance, documentation, and community building. The event features guided sessions for first-time contributors and advanced workshops for seasoned developers.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      name: "Web3 & Blockchain Summit",
      date: "2024-08-12",
      location: "Miami, FL",
      type: "Summit",
      shortDescription: "Exploring the future of web development with blockchain and decentralized technologies.",
      fullDescription: "Step into the future of web development at the Web3 & Blockchain Summit. This cutting-edge event explores how blockchain technology is revolutionizing web applications through decentralized protocols, smart contracts, and digital assets. Learn about building DApps, integrating cryptocurrency payments, NFT marketplaces, and decentralized storage solutions. The summit features presentations from blockchain pioneers, live coding sessions, and discussions about the challenges and opportunities in the Web3 ecosystem.",
      image: "/api/placeholder/400/250"
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
      'Hackathon': 'bg-red-100 text-red-800'
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
            Upcoming Events
          </h2>
          <p className="text-lg text-portfolio-secondary-500 max-w-2xl mx-auto">
            Tech events, conferences, and workshops that I'm attending or speaking at
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-portfolio-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
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
                <svg className="w-24 h-24 text-portfolio-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
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

              <div className="mt-8 flex gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-portfolio-primary-600 text-white rounded-lg hover:bg-portfolio-primary-700 transition-colors duration-300 font-semibold"
                >
                  Register Interest
                </button>
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
