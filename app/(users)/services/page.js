const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: '🌐'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: '☁️'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Expert advice on technology strategy and implementation.',
    icon: '💡'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(service => (
            <div 
              key={service.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Custom Solutions?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss how we can help with your specific requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
