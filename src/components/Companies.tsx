import React from 'react';
import { CirclesPattern } from './Patterns';

const companies = [
  {
    name: "McCain Foods",
    logo: "https://www.mccain.com/images/logo-mccain.png",
    darkMode: false
  },
  {
    name: "Energy Robotics",
    logo: "https://cdn.prod.website-files.com/659a7d409917def0560ba6c4/659aadf3dfa99d9cee109f57_er-logo-white.svg",
    darkMode: true
  },
  {
    name: "Solaris Offgrid",
    logo: "https://static.wixstatic.com/media/6cfc4d_21f2052dc6574e438b2a9c8ec8f80add~mv2.png/v1/fill/w_136,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Solaris_Offgrid_Blu_IsoLogo_P_2019.png",
    darkMode: false
  },
  {
    name: "ARWALL",
    logo: "https://arwall.co/cdn/shop/files/arwall_logo_2Kalpha_lightBG_1.png?v=1719410092",
    darkMode: false
  },
  {
    name: "Sendent",
    logo: "https://sendent.com/wp-content/uploads/2021/10/sendent_logo.png",
    darkMode: false
  },
  {
    name: "Technical Writer HQ",
    logo: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://technicalwriterhq.com/wp-content/uploads/2022/08/TechnicalWriterHQ-logo.jpg",
    darkMode: false
  },
  {
    name: "Digma",
    logo: "https://digma.ai/wp-content/uploads/2024/02/logo-alt-1.svg",
    darkMode: true
  },
  {
    name: "10Web",
    logo: "https://10web.io/wp-content/themes/10web-theme/images/logos/logo.svg",
    darkMode: true
  }

];

export default function Companies() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <CirclesPattern />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Companies I've Worked With</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm proud to have collaborated with these innovative companies
            on various projects and initiatives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group relative flex items-center justify-center p-8 rounded-xl
                ${company.darkMode ? 'bg-gray-900' : 'bg-white'}
                shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-xl" />
              </div>
              <img
                src={company.logo}
                alt={company.name}
                className={`max-h-12 w-auto relative z-10 transition-all duration-300
                  ${company.darkMode ? '' : 'grayscale group-hover:grayscale-0'}
                  group-hover:scale-110`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            Want to work together? {' '}
            <a href="#contact" className="text-violet-600 hover:text-violet-700 font-medium inline-flex items-center group">
              Let's talk
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}