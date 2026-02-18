import React, { useState } from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Phone } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openWhatsApp = (product) => {
    const message = `Hello, I am interested in ${product.name}.`;
    const url = `https://wa.me/919840420600?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="section container">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Products</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
          Explore our wide range of pharmaceuticals, surgicals, and hospital supplies. Click on any product to view details.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => setSelectedProduct(product)}
            style={{ 
              border: '1px solid var(--border-color)', 
              borderRadius: '0.75rem', 
              overflow: 'hidden',
              backgroundColor: 'var(--white)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ position: 'relative', height: '150px', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }} 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/1e293b?text=No+Image'; }}
              />
            </div>
            <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                display: 'inline-block', 
                color: 'var(--primary)', 
                fontSize: '0.7rem', 
                fontWeight: 600, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.25rem'
              }}>
                {product.category}
              </span>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem', lineHeight: '1.4', flex: 1 }}>{product.name}</h3>
              <div style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: '700' }}>
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Product Details Modal */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem',
          backdropFilter: 'blur(5px)'
        }} onClick={() => setSelectedProduct(null)}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }} onClick={e => e.stopPropagation()}>
            
            <button 
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                color: 'var(--text-dark)'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                color: 'var(--primary)', 
                fontWeight: 600, 
                fontSize: '0.875rem',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {selectedProduct.category}
              </span>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2 }}>{selectedProduct.name}</h2>
              
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                {selectedProduct.price}
              </div>

              {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Available Sizes:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProduct.sizes.map(size => (
                      <span key={size} style={{ 
                        border: '1px solid var(--border-color)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '0.25rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-light)'
                      }}>
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', lineHeight: 1.6 }}>
                High-quality {selectedProduct.category.toLowerCase()} designed for optimal performance and durability. 
                Perfect for hospital, clinic, or personal use.
              </p>

              <div style={{ display: 'grid', gap: '1rem', marginTop: 'auto' }}>
                <button 
                  onClick={() => openWhatsApp(selectedProduct)}
                  className="btn"
                  style={{ 
                    backgroundColor: '#25D366', 
                    color: 'white', 
                    border: 'none',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    width: '100%'
                  }}
                >
                  <MessageCircle size={20} />
                  Buy via WhatsApp
                </button>
                
                <Link 
                  to="/contact" 
                  className="btn btn-outline"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    textAlign: 'center'
                  }}
                >
                  <Phone size={18} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Looking for a specific product not listed here?</p>
        <Link to="/contact" className="btn btn-primary">Contact Us for Full Catalog</Link>
      </div>
    </div>
  );
};

export default Products;
