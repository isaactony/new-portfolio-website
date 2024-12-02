import React from 'react';
import { Code2, Database, FileText, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 relative overflow-hidden pt-20 pb-48">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl animate-float delay-75"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-float delay-150"></div>
        </div>

        <svg
          className="absolute -bottom-1 left-0 w-full text-white"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,32L48,53.3C96,75,192,117,288,138.7C384,160,480,160,576,149.3C672,139,768,117,864,122.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="inline-block animate-float mb-8">
            <Sparkles className="w-12 h-12 text-violet-200" />
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-violet-200">Isaac</span>. <br />
            Nice to meet you.
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in">
            Since beginning my journey as a backend developer, I've worked with talented teams
            to create robust systems, clear documentation, and efficient data solutions. I'm quietly confident,
            naturally curious, and perpetually improving my skills.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative container mx-auto px-6">
        <div className="-mt-32 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white backdrop-blur-md bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-violet-100 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Backend Developer</h3>
            </div>
            <p className="text-gray-600 mb-8">
              I value clean architecture, efficient code, and scalable solutions.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  Languages I speak:
                </h4>
                <p className="text-gray-600">Python, Node.js, Java, SQL</p>
              </div>
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  Dev Tools:
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white backdrop-blur-md bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-violet-100 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Big Data Expert</h3>
            </div>
            <p className="text-gray-600 mb-8">
              I enjoy tackling complex data challenges and building efficient pipelines.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  Technologies:
                </h4>
                <p className="text-gray-600">Apache Spark, Hadoop, Kafka</p>
              </div>
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  Expertise:
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>ETL Pipeline Design</li>
                  <li>Real-time Processing</li>
                  <li>Data Warehousing</li>
                  <li>Stream Processing</li>
                  <li>Data Modeling</li>
                  <li>Analytics Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white backdrop-blur-md bg-opacity-80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-violet-100 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Technical Writer</h3>
            </div>
            <p className="text-gray-600 mb-8">
              I create clear documentation that bridges complex systems and understanding.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  What I write:
                </h4>
                <p className="text-gray-600">API Docs, Architecture Guides, Tutorials</p>
              </div>
              <div>
                <h4 className="text-violet-600 font-medium mb-3 flex items-center">
                  <span className="w-8 h-px bg-violet-200 mr-3"></span>
                  Writing Stats:
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>500+ Technical Articles</li>
                  <li>50+ System Docs</li>
                  <li>20+ White Papers</li>
                  <li>10+ Case Studies</li>
                  <li>5+ Books</li>
                  <li>1000+ Code Examples</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curved Background */}
      <div className="relative">
        <svg
          className="absolute top-0 left-0 w-full text-violet-700"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L48,53.3C96,43,192,21,288,37.3C384,53,480,107,576,112C672,117,768,75,864,64C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
