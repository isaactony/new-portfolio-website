import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, User, Send, Sparkles, MapPin, Clock } from 'lucide-react';
import { WavesPattern } from './Patterns';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:isaactonyloi@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-violet-50 via-white to-indigo-50 relative overflow-hidden">
      <WavesPattern />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-violet-100 rounded-xl mb-4 animate-bounce-subtle">
            <MessageSquare className="w-8 h-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got a question or proposal, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-500">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Your Name
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-violet-600/20 focus:border-violet-600 
                         bg-white/50 backdrop-blur-sm transition-all duration-300
                         hover:border-violet-300"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-500">
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 
                         focus:ring-2 focus:ring-violet-600/20 focus:border-violet-600 
                         bg-white/50 backdrop-blur-sm transition-all duration-300
                         hover:border-violet-300"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-500">
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Your Message
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 
                       focus:ring-2 focus:ring-violet-600/20 focus:border-violet-600 
                       bg-white/50 backdrop-blur-sm transition-all duration-300
                       hover:border-violet-300 resize-none"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 
                       bg-gradient-to-r from-violet-600 to-indigo-600 text-white 
                       rounded-full shadow-lg shadow-violet-600/20 
                       hover:shadow-xl hover:shadow-violet-600/30 
                       transform hover:-translate-y-0.5 
                       transition-all duration-200 group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              <span className="font-medium">Send Message</span>
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </button>
          </div>
        </form>
        
        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Mail className="w-6 h-6 text-violet-600 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-gray-600">isaactonyloi@gmail.com</p>
          </div>
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <MapPin className="w-6 h-6 text-violet-600 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Location</h3>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
          <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <Clock className="w-6 h-6 text-violet-600 mx-auto mb-4" />
            <h3 className="font-medium mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}