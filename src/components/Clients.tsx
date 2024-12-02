import React from 'react';

const clients = [
  {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&h=300&fit=crop",
    description: "Developed microservices architecture"
  },
  {
    name: "DataFlow Systems",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop",
    description: "Implemented real-time data processing"
  },
  {
    name: "CloudNet Enterprise",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop",
    description: "Cloud infrastructure optimization"
  },
  {
    name: "DocuTech Solutions",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop",
    description: "Technical documentation system"
  }
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Clients I've Worked With</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
              <p className="text-gray-600">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}