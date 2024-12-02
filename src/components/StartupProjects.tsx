import React, { useState } from 'react';
import { ExternalLink, Github, Star, GitBranch, ArrowRight } from 'lucide-react';
import { CirclesPattern } from './Patterns';

const projects = [
  {
    title: "DataFlow Hub",
    description: "Enterprise data pipeline orchestration platform with real-time monitoring and analytics",
    link: "https://dataflow.dev",
    github: "https://github.com/dataflow",
    status: "Active",
    stars: "2.4k",
    forks: "342",
    tags: ["Python", "Apache Airflow", "React", "Redis"],
    color: "from-blue-500 to-cyan-500",
    metrics: {
      processing: "10TB+ daily",
      users: "500+",
      uptime: "99.99%"
    }
  },
  {
    title: "TechDocs AI",
    description: "AI-powered technical documentation generator that automatically creates and maintains system documentation",
    link: "https://techdocs.ai",
    github: "https://github.com/techdocs",
    status: "Beta",
    stars: "1.8k",
    forks: "156",
    tags: ["OpenAI", "Node.js", "Next.js", "MongoDB"],
    color: "from-violet-500 to-purple-500",
    metrics: {
      docs: "10k+ generated",
      accuracy: "98%",
      languages: "12+"
    }
  },
  {
    title: "ScaleDB",
    description: "Distributed database system optimized for big data workloads with automatic sharding",
    link: "https://scaledb.io",
    github: "https://github.com/scaledb",
    status: "Development",
    stars: "986",
    forks: "89",
    tags: ["Rust", "gRPC", "RAFT", "RocksDB"],
    color: "from-emerald-500 to-green-500",
    metrics: {
      throughput: "1M+ QPS",
      nodes: "100+",
      latency: "<10ms"
    }
  },
  {
    title: "MetricsAI",
    description: "Machine learning platform for automated anomaly detection in system metrics",
    link: "https://metricsai.dev",
    github: "https://github.com/metricsai",
    status: "Alpha",
    stars: "756",
    forks: "67",
    tags: ["Python", "TensorFlow", "FastAPI", "ClickHouse"],
    color: "from-orange-500 to-red-500",
    metrics: {
      accuracy: "99.9%",
      alerts: "50k+/day",
      models: "25+"
    }
  },
  {
    title: "DockerFlow",
    description: "Container orchestration platform with built-in service mesh and observability",
    link: "https://dockerflow.io",
    github: "https://github.com/dockerflow",
    status: "Planning",
    stars: "432",
    forks: "45",
    tags: ["Go", "Docker", "Kubernetes", "Istio"],
    color: "from-pink-500 to-rose-500",
    metrics: {
      containers: "10k+",
      deployments: "1k+/day",
      clusters: "50+"
    }
  },
  {
    title: "StreamLake",
    description: "Real-time data lake solution with automatic schema evolution and data quality checks",
    link: "https://streamlake.tech",
    github: "https://github.com/streamlake",
    status: "Prototype",
    stars: "289",
    forks: "34",
    tags: ["Scala", "Apache Spark", "Delta Lake", "dbt"],
    color: "from-yellow-500 to-amber-500",
    metrics: {
      storage: "5PB+",
      schemas: "1000+",
      streams: "100+"
    }
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    Active: "bg-green-100 text-green-800 border-green-200",
    Beta: "bg-blue-100 text-blue-800 border-blue-200",
    Development: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Alpha: "bg-purple-100 text-purple-800 border-purple-200",
    Planning: "bg-gray-100 text-gray-800 border-gray-200",
    Prototype: "bg-orange-100 text-orange-800 border-orange-200"
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full font-medium border ${colors[status as keyof typeof colors]}`}>
      {status}
    </span>
  );
};

export default function StartupProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="relative pb-32">
      <div className="bg-violet-600 h-[400px] w-full absolute top-0 left-0">
        <CirclesPattern />
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white pt-24 pb-16">
          <h2 className="text-4xl font-bold mb-6">My Startup Projects</h2>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto">
            I'm passionate about building innovative solutions. Here are some of my own ventures
            that combine my expertise in backend development, documentation, and data systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-gray-600 mb-6 h-24">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md transition-colors duration-200 hover:bg-violet-100 hover:text-violet-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {hoveredProject === project.title && (
                  <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-semibold text-violet-600">{value}</div>
                        <div className="text-xs text-gray-500">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 group">
                      <Star className="w-4 h-4 mr-1 group-hover:text-yellow-500 transition-colors" />
                      <span className="text-sm group-hover:text-gray-900 transition-colors">{project.stars}</span>
                    </div>
                    <div className="flex items-center text-gray-600 group">
                      <GitBranch className="w-4 h-4 mr-1 group-hover:text-violet-500 transition-colors" />
                      <span className="text-sm group-hover:text-gray-900 transition-colors">{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-violet-600 transition-colors p-2 rounded-full hover:bg-violet-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      className="text-gray-600 hover:text-violet-600 transition-colors p-2 rounded-full hover:bg-violet-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-violet-600 hover:text-violet-700 font-medium group"
          >
            <span>Interested in collaborating?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}