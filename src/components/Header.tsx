import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'Companies', href: '#companies' },
    { name: 'Startup Projects', href: '#startup-projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-24">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 
                     bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Isaac<span className="text-violet-600 animate-pulse">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-gray-600 hover:text-violet-600 transition-colors 
                         group px-2 py-1 ${
                  activeSection === link.href.replace('#', '') 
                    ? 'text-violet-600 font-medium' 
                    : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 
                              transform scale-x-0 group-hover:scale-x-100 
                              transition-transform origin-left ${
                  activeSection === link.href.replace('#', '') 
                    ? 'scale-x-100' 
                    : ''
                }`} />
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 
                       text-white rounded-full shadow-lg shadow-violet-600/20 
                       hover:shadow-xl hover:shadow-violet-600/30 
                       transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Say Hello
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-violet-600 
                     transition-colors rounded-lg hover:bg-violet-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 
                       bg-white/95 backdrop-blur-lg border-t border-gray-100 
                       shadow-lg animate-fade-in">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-gray-600 hover:text-violet-600 
                           transition-all duration-200 hover:pl-4 ${
                    activeSection === link.href.replace('#', '') ? 'text-violet-600 font-medium' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 
                         text-white text-center rounded-full shadow-lg 
                         hover:shadow-xl transition-all duration-200"
              >
                Say Hello
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}