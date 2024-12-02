import React from 'react';
import { Award, CheckCircle, Medal, Sparkles, Star, Trophy, BookOpen, Target, Cpu } from 'lucide-react';
import { HexagonPattern } from './Patterns';

const certifications = [
  {
    provider: "Meta",
    icon: <Cpu className="w-6 h-6" />,
    certs: [
      {
        name: "Backend Developer",
        date: "2023",
        skills: ["Django", "APIs", "Database Design", "Security"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/META-BACKEND",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "Database Engineer",
        date: "2023",
        skills: ["Database Management", "SQL", "Data Modeling", "Optimization"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/META-DATABASE",
        icon: <BookOpen className="w-5 h-5" />
      }
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    provider: "IBM",
    icon: <Trophy className="w-6 h-6" />,
    certs: [
      {
        name: "Data Engineering",
        date: "2023",
        skills: ["ETL", "Data Warehousing", "Big Data", "Apache Spark"],
        link: "https://www.coursera.org/account/accomplishments/professional-cert/IBM-DATA-ENGINEERING",
        icon: <Star className="w-5 h-5" />
      }
    ],
    color: "from-sky-500 to-cyan-500"
  },
  {
    provider: "AWS",
    icon: <Award className="w-6 h-6" />,
    certs: [
      {
        name: "Cloud Practitioner",
        date: "2023",
        skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
        link: "https://www.credly.com/badges/aws-cloud-practitioner",
        icon: <Sparkles className="w-5 h-5" />
      }
    ],
    color: "from-orange-500 to-amber-500"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
      <HexagonPattern />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Professional Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning is key to staying current in tech. Here are some of my recent certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="group relative">
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 
                           rounded-xl transition-all duration-500`}
              />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 
                            transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex-1">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${cert.color} 
                                   text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>

                    <div className="flex items-center space-x-3 mb-2">
                      <Medal className={`w-6 h-6 ${cert.color.split(' ')[1].replace('to-', 'text-')}`} />
                      <h3 className="text-2xl font-bold">{cert.provider}</h3>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{cert.certs.length} Certification{cert.certs.length > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {cert.certs.map((certification, idx) => (
                    <div key={idx} className="border-t border-gray-100 pt-6 first:border-0 first:pt-0">
                      <div className="flex items-start justify-between mb-4 group/cert">
                        <div>
                          <h4 className="font-semibold text-lg">{certification.name}</h4>
                          <p className="text-gray-600 text-sm">{certification.date}</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {certification.skills.map((skill, skillIdx) => (
                          <span 
                            key={skillIdx}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full 
                                     hover:bg-violet-50 hover:text-violet-600 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-violet-600 hover:text-violet-700 font-medium inline-flex items-center group/link"
                      >
                        View Certificate
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium group">
            <span>Want to discuss certifications?</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}