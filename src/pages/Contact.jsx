import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section container">
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
          Get in touch with us for orders, inquiries, or partnerships.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

        {/* Contact Info */}
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Get In Touch</h2>

          <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="flex gap-4">
              <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: '0.5rem', color: 'var(--primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Address</h4>
                <p style={{ color: 'var(--text-light)' }}>
                  526, First Floor of Aazhi Dental Care,<br />
                  Opp. to NSR Bakery, Marudhamalai Main Road,<br />
                  P.N. Pudur, Coimbatore - 641 041
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: '0.5rem', color: 'var(--primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Phone Number</h4>
                <p style={{ color: 'var(--text-light)' }}>+91 98422 50600</p>
                <p style={{ color: 'var(--text-light)' }}>+91 98404 20600</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: '0.5rem', color: 'var(--primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                <p style={{ color: 'var(--text-light)' }}>gomathisurgicals@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: '0.5rem', color: 'var(--primary)' }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Working Hours</h4>
                <p style={{ color: 'var(--text-light)' }}>Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p style={{ color: 'var(--text-light)' }}>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: 'var(--light-gray)', padding: '2.5rem', borderRadius: '1rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
          <form style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Your Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Your Email</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
              <input type="text" placeholder="Inquiry about..." style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
              <textarea rows="4" placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontFamily: 'inherit' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>

      </div>

      {/* Map Integration */}
      <div style={{ marginTop: '4rem', height: '450px', borderRadius: '1rem', overflow: 'hidden' }}>
        <iframe
          src="https://maps.google.com/maps?q=Aazhi%20Dental%20Care%2C%20Coimbatore&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gomathi Surgicals Location"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
