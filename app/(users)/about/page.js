

const values = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new ideas.'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency.'
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Welcome to our company! We are passionate about creating innovative solutions
            that make a difference in people's lives. Since our founding, we have been
            committed to excellence and continuous improvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to deliver exceptional value to our customers through
            cutting-edge technology and outstanding service. We believe in building
            lasting relationships and exceeding expectations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions? Feel free to reach out to us at{' '}
            <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800">
              contact@example.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
