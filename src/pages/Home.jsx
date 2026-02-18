import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      
      {/* Brief Products Preview */}
      <section className="section container">
        <div className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)' }}>Featured Categories</h2>
            <p style={{ color: 'var(--text-light)' }}>High-quality supplies for every need</p>
          </div>
          <Link to="/products" className="btn btn-outline">View All Products</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {['Surgical Products', 'Oxygen Concentrators', 'Dental Instruments', 'Hospital Furniture'].map((cat, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--white)', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>{cat}</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Top quality {cat.toLowerCase()} from trusted brands.</p>
              <Link to="/products" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '0.5rem' }}>Buy Now</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
