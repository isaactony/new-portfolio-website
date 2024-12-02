import React from 'react';
import { GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { GridPattern } from './Patterns';

const education = [
  {
    degree: "PhD in Computer Science",
    school: "Future University",
    period: "Future",
    location: "To be determined",
    status: "Future",
    description: "Research focus to be determined",
    color: "from-gray-400 to-gray-500",
    isFuture: true
  },
  {
    degree: "Master of Science in Computer Systems",
    school: "Jomo Kenyatta University of Agriculture and Technology",
    period: "2023 - Present",
    location: "Nairobi, Kenya",
    status: "Ongoing",
    description: "Focusing on advanced computer systems, distributed computing, and system architecture.",
    color: "from-violet-600 to-indigo-600"
  },
  {
    degree: "Bachelor of Science in Statistics and Computer Programming",
    school: "Kenyatta University",
    period: "2018 - 2022",
    location: "Nairobi, Kenya",
    status: "Completed",
    description: "Combined statistical analysis with computer programming, focusing on data-driven solutions and software development.",
    color: "from-emerald-600 to-teal-600"
  }
];

export default function Education() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <GridPattern />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-violet-100 rounded-xl mb-4">
            <GraduationCap className="w-8 h-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey in technology and data science
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative group ${edu.isFuture ? 'opacity-30 hover:opacity-50 transition-opacity' : ''}`}
            >
              {/* Connection Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200 group-hover:bg-violet-200 transition-colors" />
              )}
              
              <div className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-indigo-600 font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <p className="text-violet-600 font-medium">{edu.school}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Ongoing' 
                        ? 'bg-violet-100 text-violet-600' 
                        : edu.status === 'Future'
                          ? 'bg-gray-100 text-gray-600'
                          : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">{edu.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-6">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-violet-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}