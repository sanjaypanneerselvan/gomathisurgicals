import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--text-dark)', color: 'var(--white)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Company Info */}
          <div>
            <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Gomathi Pharma & Surgicals</h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
              Wholesale Distributors of Surgical Products, Oxygen Concentrators, Dental Instruments & Hospital Furniture.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--white)' }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'var(--white)' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--white)' }}><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Quick Links</h4>
            <ul className="flex" style={{ flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/" style={{ color: '#94a3b8' }} className="hover:text-white">Home</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8' }} className="hover:text-white">About Us</Link></li>
              <li><Link to="/products" style={{ color: '#94a3b8' }} className="hover:text-white">Products</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Our Products</h4>
            <ul className="flex" style={{ flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: '#94a3b8' }}>Pharmaceuticals</li>
              <li style={{ color: '#94a3b8' }}>Surgical Instruments</li>
              <li style={{ color: '#94a3b8' }}>Medical Equipment</li>
              <li style={{ color: '#94a3b8' }}>Disposables</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Contact Us</h4>
             <ul className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
               <li className="flex gap-3 items-start" style={{ color: '#94a3b8' }}>
                 <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                 <span>526, 1st Floor, Aazhi Dental Care, Opp. NSR Bakery, Marudhamalai Main Rd, P.N. Pudur, Coimbatore - 641 041</span>
               </li>
               <li className="flex gap-3 items-center" style={{ color: '#94a3b8' }}>
                 <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                 <span>+91 98422 50600, +91 98404 20600</span>
               </li>
               <li className="flex gap-3 items-center" style={{ color: '#94a3b8' }}>
                 <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                 <span>gomathisurgicals@gmail.com</span>
               </li>
             </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#64748B' }}>
          <p>&copy; {new Date().getFullYear()} Gomathi Pharma & Surgicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
