import React from 'react';
import { ExternalLink, Github, Star, GitBranch, Sparkles, Code2 } from 'lucide-react';
import { CirclesPattern, GridPattern } from './Patterns';

const projects = [
  {
    title: "EcoTrack",
    description: "Track supplier compliance to enviromentally friendly practices",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.21.27.png",
    link: "https://ecotrackyoursuppliers.netlify.app/",
    status: "Production",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Job Queue Microservice",
    description: "Users can register and login through auth service by user role (ADMIN or USER) through api gateway,  User can send any request to relevant service through api gateway with its bearer token ",
    image: "",
    link: "https://github.com/isaactony/job-queue-system",
    status: "Production",
    tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Sendent",
    description: "Knowledgebase Platform for Sendent Plugin for Outlook, Teams ",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.57.22.png",
    link: "https://help.sendent.com/sendent-app-for-nextcloud-outlook-ms-teams",
    status: "Production",
    tech: ["React", "TypeScript", "Tailwind"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "TeamSync",
    description: "Build stronger remote teams through engaging virtual experiences. Connect, collaborate, and celebrate together, no matter where you are.",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.33.42.png",
    link: "https://silly-eclair-ee8523.netlify.app/",
    status: "Production",
    tech: ["Next.js", "WebRTC", "Socket.io"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Portfolio",
    description: "My Personal Portfolio Website",
    image: "https://portfolio-images-for-tonyloi.s3.eu-central-1.amazonaws.com/Screenshot+2024-11-04+at+13.00.16.png",
    link: "https://isaactonyloiportfolio.netlify.app/",
    status: "Production",
    tech: ["React", "Tailwind", "Framer Motion"],
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Upwork",
    description: "An Upwork platform clone using Typescript, React and Tailwind CSS",
    image: "https://private-user-images.githubusercontent.com/59682377/380039102-15b5b110-fec1-4b83-901f-74b19427ee95.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzAwMTg1ODMsIm5iZiI6MTczMDAxODI4MywicGF0aCI6Ii81OTY4MjM3Ny8zODAwMzkxMDItMTViNWIxMTAtZmVjMS00YjgzLTkwMWYtNzRiMTk0MjdlZTk1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDI3VDA4MzgwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzZmYwYzJhMWNmYzA3NTNhMjcyY2E3ODE0MzE5NmIxNzVlMTk3ZWRjMDkzZGMyZjc1OTUyYTcwNWE3Mjk3NzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RF6j3gw9qy0sTDPMqKPr4T5vwmSPnFE1gJY-9zMoIUo",
    link: "https://snazzy-hummingbird-1b200b.netlify.app/",
    status: "Production",
    tech: ["TypeScript", "React", "Tailwind"],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Data Pipeline Framework",
    description: "Scalable ETL pipeline processing 10TB+ daily data",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Production",
    tech: ["Python", "Apache Spark", "Kafka"],
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "Technical Documentation Portal",
    description: "Comprehensive system documentation and API reference",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Live",
    tech: ["Next.js", "MDX", "Tailwind"],
    color: "from-sky-500 to-blue-500"
  },
  {
    title: "Microservices Platform",
    description: "Cloud-native backend system handling 1M+ requests/day",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com",
    status: "Production",
    tech: ["Go", "gRPC", "Kubernetes"],
    color: "from-red-500 to-pink-500"
  }
];

export default function Projects() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-violet-50 relative overflow-hidden">
      <CirclesPattern />
      <GridPattern />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="inline-block p-3 bg-violet-100 rounded-xl mb-4 animate-bounce-subtle">
            <Code2 className="w-8 h-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my expertise in
            backend development, system architecture, and technical innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                         transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} 
                              opacity-0 group-hover:opacity-5 transition-all duration-500`} />
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 
                           group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/90 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 
                                 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                                ${project.status === 'Production' 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-amber-100 text-amber-600'}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm">24</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <GitBranch className="w-4 h-4 mr-1" />
                      <span className="text-sm">5</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {project.link.includes('github') ? (
                      <a href={project.link} 
                         className="p-2 text-gray-600 hover:text-violet-600 transition-colors"
                         target="_blank" 
                         rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    ) : (
                      <a href={project.link}
                         className="p-2 text-gray-600 hover:text-violet-600 transition-colors"
                         target="_blank"
                         rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#contact" 
             className="inline-flex items-center space-x-2 text-violet-600 
                      hover:text-violet-700 font-medium group">
            <Sparkles className="w-5 h-5" />
            <span>Interested in collaborating?</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}