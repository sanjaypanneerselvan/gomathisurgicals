import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
      color: 'var(--white)',
      padding: '6rem 0'
    }}>
      <div className="container flex items-center justify-between" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '4rem' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '3rem', lineHeight: '1.2' }}>
            Wholesale Distributors of <span style={{ color: '#60a5fa' }}>Surgical, Dental & Hospital</span> Supplies
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px' }}>
            Your trusted source for Surgical Products, Oxygen Concentrators, Dental Instruments, and Hospital Furniture.
          </p>
          <div className="flex gap-4">
             <Link to="/products" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)' }}>
               View Products
             </Link>
             <Link to="/contact" className="btn" style={{ border: '2px solid var(--white)', color: 'var(--white)' }}>
               Contact Us <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
             </Link>
          </div>
        </div>
        
        {/* Hero Image / Illustration Placeholder */}
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '500px', 
            height: '400px', 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--white)'
          }}>
            <p className="text-center">
              <span style={{ display: 'block', fontSize: '4rem', marginBottom: '1rem' }}>🏥</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>Professional Healthcare Supply</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
