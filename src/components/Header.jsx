import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header" style={{ boxShadow: 'var(--shadow-md)', position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--white)' }}>


      {/* Main Navbar */}
      <div className="container flex justify-between items-center" style={{ padding: '1rem 1.5rem' }}>
        <Link to="/" className="logo flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <img src="/logo.png" alt="Gomathi Pharma & Surgicals" style={{ height: '40px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>Gomathi Pharma & Surgicals</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-dark)',
                    fontWeight: location.pathname === link.path ? 600 : 400
                  }}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://wa.me/919840420600" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none', display: 'inline-block' }}>
                Get Quote
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer' }}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: 'var(--shadow-lg)',
          borderTop: '1px solid var(--border-color)'
        }}>
          <ul className="flex" style={{ flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.5rem',
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-dark)',
                    fontWeight: 500
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://wa.me/919840420600" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
