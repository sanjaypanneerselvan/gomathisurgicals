import React from 'react';
import { ShieldCheck, Truck, Percent, Users } from 'lucide-react';

const features = [
  { icon: <ShieldCheck size={40} />, title: "Genuine Products", desc: "100% authentic medicines and certified surgical equipment." },
  { icon: <Percent size={40} />, title: "Competitive Pricing", desc: "Wholesale rates for hospitals, clinics, and pharmacies." },
  { icon: <Truck size={40} />, title: "On-time Delivery", desc: "Fast and reliable shipping network ensuring strict deadlines." },
  { icon: <Users size={40} />, title: "Trusted Partner", desc: "Preferred choice for top healthcare professionals and institutions." },
];

const WhyChooseUs = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Why Choose Us</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
            We are dedicated to providing the best quality healthcare supplies with a focus on trust, affordability, and service.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              backgroundColor: 'var(--white)', 
              padding: '2rem', 
              borderRadius: '0.75rem', 
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            className="feature-card"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ color: 'var(--secondary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
