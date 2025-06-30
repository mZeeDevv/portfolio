import React from 'react';
import arsalan from '../media/arsalan.jpeg';
import hannan from '../media/hannan.jpeg';
import usman from '../media/usman.jpeg';

export default function Testimonials() {
  const testimonialsssss = [
    {
      id: 1,
      name: "Hannan Khan",
      role: "Technical Community Manager",
      company: "International Connector",
      image: hannan,
      content: "I’ve had the pleasure of seeing Hamza grow to be a one of the most promising voices in the Pakistani tech community. His knowledge of web technologies and his active participation in community building space are admirable to say the least. I’m eager to see what he is able to achieve next!"
    },
    {
      id: 2,
      name: "Arsalan Khattak",
      role: "Devrel",
      company: "Bryntum",
      image: arsalan,
      content: "I have been mentoring Hamza since his college days. Hamza's passion for web technology and public speaking is truly remarkable. The way he delivered as a speaker at an event last year was a proud moment for us as well. It made me reflect on how he started from a single game language, PAWN, to using technologies like JavaScript, Firebase, and others.I believe Hamza's journey reflects not just his growth but also the evolution of technology in the past years. As he navigates the ever-changing landscape, I am excited to continue guiding him and witnessing the innovative paths he takes in his future endeavors."
    },
    {
      id: 3,
      name: "Usman Aslam",
      role: "Ecosystem Builder",
      company: "Notion, Slack & Miro",
      image: usman,
      content: "When it comes Hamza, he shows a unique blend for developing new products while creating developer centric communities. i have seen Hamza lead numerous communities for major entities like Slack, Microsoft Learn, and Google Developers. Apart from that Hamza shows a remarkable aptitude for developer technologies and has a knack for impactful open source contributions. His work from basic web apps to cross functional solutions show that Hamza is an upcoming multidimensional resource."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-primary-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-portfolio-neutral-800 mb-6">
            Community Feedback
          </h2>
          <p className="text-xl text-portfolio-secondary-600 max-w-3xl mx-auto mb-8">
            Here's what fellow developers and community members have to say about 
            working together and learning from each other.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonialsssss.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-portfolio-soft hover:shadow-portfolio-medium transition-all duration-500 p-6 group cursor-pointer animate-fade-in-up transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${testimonial.id * 0.2}s` }}
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-portfolio-primary-100 group-hover:ring-portfolio-primary-200 transition-all duration-300 shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6 text-center">
                <div className="relative">
                  <svg className="w-8 h-8 text-portfolio-primary-200 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                  <p className="text-portfolio-neutral-700 leading-relaxed text-sm italic group-hover:text-portfolio-neutral-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="border-t pt-4 text-center">
                <h4 className="font-semibold text-portfolio-neutral-800 text-sm group-hover:text-portfolio-primary-600 transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-portfolio-secondary-600 text-xs mt-1">
                  {testimonial.role}
                </p>
                <p className="text-portfolio-primary-600 text-xs font-medium mt-1">
                  {testimonial.company}
                </p>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-portfolio-primary-400 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.1s'}}>
                <div className="w-2 h-2 bg-portfolio-secondary-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-portfolio-primary-50 to-portfolio-secondary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-portfolio-neutral-800 mb-4">
              Want to Connect?
            </h3>
            <p className="text-portfolio-secondary-600 mb-6">
              Whether you're looking to learn, collaborate, or just connect with fellow developers, 
              I'm always open to new opportunities and conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#content"
                className="px-8 py-3 bg-transparent border-2 border-portfolio-primary-600 text-portfolio-primary-600 hover:bg-portfolio-primary-50 font-medium rounded-lg transition-all"
              >
                Read My Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}