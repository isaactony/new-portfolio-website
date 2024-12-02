import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowUp, MapPin, Phone, Calendar } from 'lucide-react';
import { WavesPattern } from './Patterns';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative">
      <WavesPattern />
      
      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-gray-400 mb-8">
              Subscribe to my newsletter for tech insights, project updates, and development tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-200"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-violet-600 rounded-full hover:bg-violet-700 transition-colors font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Isaac<span className="text-violet-500">.</span>
            </h3>
            <p className="text-gray-400">
              Backend Developer, Technical Writer & Big Data Expert crafting efficient solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-violet-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-violet-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-violet-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:isaactonyloi@gmail.com" className="text-gray-400 hover:text-violet-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-violet-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-violet-500 transition-colors">Projects</a></li>
              <li><a href="#companies" className="text-gray-400 hover:text-violet-500 transition-colors">Companies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Backend Development</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Technical Writing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Big Data Solutions</a></li>
              <li><a href="#startup-projects" className="text-gray-400 hover:text-violet-500 transition-colors">Startup Projects</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-violet-500" />
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-violet-500" />
                <a href="mailto:isaactonyloi@gmail.com" className="hover:text-violet-500 transition-colors">
                  isaactonyloi@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-violet-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Calendar className="w-5 h-5 text-violet-500" />
                <span>Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Isaac Tonyloi. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-violet-500 transition-colors text-sm mx-4">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-violet-500 transition-colors text-sm mx-4">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-violet-500 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}