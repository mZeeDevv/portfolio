import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      color: 'text-tech-frontend',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      skills: [
        {
          name: 'React',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.37 1.95c-1.47-.84-1.63-3.05-1.01-5.63C.98 14.93-1.85 13.69-1.85 12s1.83-2.93 4.37-3.68C2.14 5.74 2.3 3.53 3.77 2.69c1.46-.84 3.45.12 5.37 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26z"/>
            </svg>
          )
        },
        {
          name: 'Next.js',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.050-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.708 4.428 20.623.904 16.444.232 15.839.126 15.074.002 14.87 0c-.09.008-.77.008-1.297.008v.002z"/>
            </svg>
          )
        },
        {
          name: 'Tailwind',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
          )
        },
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
            </svg>
          )
        },
        {
          name: 'HTML/CSS',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
            </svg>
          )
        }
      ]
    },
    backend: {
      name: 'Backend',
      color: 'text-tech-backend',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      skills: [
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.28c0 .46-.47.8-.91.8-.23 0-.47-.08-.67-.2L5.76 16.4c-.13-.07-.21-.21-.21-.36V7.96c0-.15.08-.29.21-.36l7.44-4.3c.13-.07.29-.07.42 0l7.44 4.3c.13.07.21.21.21.36v8.08c0 .15-.08.29-.21.36l-7.44 4.3c-.13.07-.29-.07-.42 0L10.6 19c-.13-.07-.28-.07-.42 0-.27.16-.32.19-.72.19-.55 0-.87-.32-.87-.89 0-.37.24-.58.64-.71l2.91-1.24c.24-.1.4-.33.4-.58v-.5c0-.32-.26-.58-.58-.58s-.58.26-.58.58v.23l-2.39 1.02c-.56.24-.9.78-.9 1.37 0 .83.68 1.51 1.51 1.51.35 0 .68-.12.94-.32l2.31-1.32c.48-.28.78-.8.78-1.36V7.96c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2z"/>
            </svg>
          )
        },
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
            </svg>
          )
        },
        {
          name: 'Express.js',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-6.454 3.078-14.3-2.339-8.085-6.617z"/>
            </svg>
          )
        },
        {
          name: 'Django',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
            </svg>
          )
        }
      ]
    },
    database: {
      name: 'Database',
      color: 'text-tech-database',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      skills: [
        {
          name: 'MongoDB',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 5.356-3.333 5.669-9.847.068-.897-.133-1.456-.377-1.528z"/>
            </svg>
          )
        },
        {
          name: 'MySQL',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M0 12.5v-.813L1.25 11h5.5l1.25.688v.812L6.75 13H1.25L0 12.5zM0 8.5v-.813L1.25 7h5.5l1.25.688v.812L6.75 9H1.25L0 8.5zM0 16.5v-.813L1.25 15h5.5l1.25.688v.812L6.75 17H1.25L0 16.5zM10 12.5v-.813L11.25 11h5.5l1.25.688v.812L16.75 13h-5.5L10 12.5zM10 8.5v-.813L11.25 7h5.5l1.25.688v.812L16.75 9h-5.5L10 8.5zM10 16.5v-.813L11.25 15h5.5l1.25.688v.812L16.75 17h-5.5L10 16.5zM20 12.5v-.813L21.25 11H24v2h-2.75L20 12.5zM20 8.5v-.813L21.25 7H24v2h-2.75L20 8.5zM20 16.5v-.813L21.25 15H24v2h-2.75L20 16.5z"/>
            </svg>
          )
        },
        {
          name: 'Firebase',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.818-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
            </svg>
          )
        },
        {
          name: 'Qdrant',
          icon: (
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zM8 8h8v8H8V8zm2 2v4h4v-4h-4z"/>
            </svg>
          )
        }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-primary-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-16 h-16 bg-portfolio-primary-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-portfolio-secondary-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-portfolio-primary-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-portfolio-neutral-800 mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-portfolio-secondary-500 max-w-3xl mx-auto mb-8">
            A dynamic ecosystem of technologies I've mastered to build innovative solutions
          </p>
          
          {/* Animated Connecting Lines */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-portfolio-primary-400"></div>
            <div className="w-3 h-3 bg-portfolio-primary-600 rounded-full animate-pulse"></div>
            <div className="h-0.5 w-32 bg-gradient-to-r from-portfolio-primary-400 to-portfolio-secondary-400"></div>
            <div className="w-3 h-3 bg-portfolio-secondary-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-portfolio-secondary-400 to-transparent"></div>
          </div>
        </div>

        {/* Skills Grid Layout */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
            <div key={categoryKey} className="text-center">
              {/* Category Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-semibold ${category.color} mb-2`}>
                  {category.name}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-portfolio-primary-400 to-portfolio-secondary-400 mx-auto rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={`${categoryKey}-${skillIndex}`}
                    className="group transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
                    style={{
                      animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                    }}
                    onMouseEnter={() => setHoveredSkill(`${categoryKey}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-portfolio transition-all duration-300 border-2 ${category.borderColor} ${hoveredSkill === `${categoryKey}-${skillIndex}` ? 'ring-4 ring-portfolio-primary-200 shadow-xl' : ''}`}>
                      <div className="text-center">
                        <div className={`mb-3 flex justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-portfolio-neutral-800 text-sm group-hover:text-portfolio-primary-600 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className={`flex items-center gap-3 px-6 py-3 ${category.bgColor} rounded-full border ${category.borderColor}`}>
              <div className={`w-4 h-4 ${category.color.replace('text-', 'bg-')} rounded-full`}></div>
              <span className="font-medium text-portfolio-neutral-700">{category.name}</span>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Skills;
