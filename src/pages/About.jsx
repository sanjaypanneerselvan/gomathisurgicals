import React from 'react';
import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div>
      <div className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
        <div className="container text-center">
          <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>About Gomathi Pharma</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--text-light)' }}>
            Serving the healthcare industry with integrity and excellence.
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Who We Are</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
               Gomathi Pharma & Surgicals is a premier wholesale distributor based at Coimbatore. We specialize in providing high-quality Surgical Products, Oxygen Concentrators, Dental Instruments, and Hospital Furniture to healthcare institutions.
            </p>
            <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
              Under the leadership of M. Thirumalai Raja, we have established ourselves as a reliable partner for hospitals, clinics, and dental care centers. Our commitment to genuine products and timely service ensures that healthcare providers can focus on what matters most — patient care.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--light-gray)', height: '300px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             {/* Placeholder for About Image */}
             <span style={{ fontSize: '4rem' }}>🏥</span>
          </div>
        </div>

        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
              <Target size={32} />
              <h3>Our Mission</h3>
            </div>
            <p style={{ color: 'var(--text-light)' }}>
              To ensure the availability of life-saving medicines and high-quality surgical equipment to healthcare providers with speed, reliability, and precision.
            </p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '1rem' }}>
             <div className="flex items-center gap-3" style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>
              <Eye size={32} />
              <h3>Our Vision</h3>
            </div>
            <p style={{ color: 'var(--text-light)' }}>
              To become the most preferred and trusted partner in the pharmaceutical and surgical supply chain ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
