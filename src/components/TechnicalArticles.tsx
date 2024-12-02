import React from 'react';
import { BookOpen, ArrowUpRight, Calendar, Eye, ThumbsUp } from 'lucide-react';
import { HexagonPattern } from './Patterns';

const articles = [
  {
    title: "Building Scalable Data Pipelines with Apache Spark",
    description: "A comprehensive guide to designing and implementing efficient data processing pipelines using Apache Spark.",
    platform: "Medium",
    date: "Mar 15, 2024",
    views: "12.5k",
    likes: "856",
    link: "https://medium.com/@isaactonyloi/building-scalable-data-pipelines",
    tags: ["Apache Spark", "Data Engineering", "ETL", "Big Data"]
  },
  {
    title: "Microservices Architecture Best Practices",
    description: "Learn the key principles and patterns for building robust microservices-based applications.",
    platform: "Dev.to",
    date: "Feb 28, 2024",
    views: "8.2k",
    likes: "643",
    link: "https://dev.to/isaactonyloi/microservices-architecture",
    tags: ["Microservices", "System Design", "Architecture", "Backend"]
  },
  {
    title: "Advanced PostgreSQL Performance Tuning",
    description: "Deep dive into PostgreSQL optimization techniques for high-performance applications.",
    platform: "Hashnode",
    date: "Feb 10, 2024",
    views: "15.3k",
    likes: "927",
    link: "https://hashnode.com/@isaactonyloi/postgresql-tuning",
    tags: ["PostgreSQL", "Database", "Performance", "SQL"]
  }
];

export default function TechnicalArticles() {
  return (
    <section className="py-32 bg-white relative">
      <HexagonPattern />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Technical Articles</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I share my knowledge and experiences through in-depth technical articles.
            Here are some of my recent publications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center text-sm text-violet-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {article.platform}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-violet-50 text-violet-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views}
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {article.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@isaactonyloi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium group"
          >
            <span>View all articles</span>
            <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}