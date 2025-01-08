



import { Link } from 'react-router-dom';

const data = {
  logo: '/assets/img/footer_logo.svg', // Logo path remains the same
  links: [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About Us' },
    { href: '/contact', text: 'Contact Us' },
    { href: '/faq', text: 'FAQs' },
  ],
  copyrightText: 'Copyright © 2024 Surveysphere, All Rights Reserved.',
};

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#002261', // Footer background color remains the same
      color: '#fff',
      padding: '40px 0',
      fontFamily: '"Helvetica", sans-serif',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
      }}>

        {/* Footer Logo Section */}
        <div style={{
          marginBottom: '20px',
        }}>
          <h4 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2ea6f7',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}>
            SURVEYSPHERE
          </h4>
        </div>

        {/* Links Section */}
        <div style={{
          marginBottom: '30px',
        }}>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
          }}>
            {data.links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '16px',
                  transition: 'color 0.3s ease',
                }} onMouseEnter={(e) => e.target.style.color = '#2ea6f7'} onMouseLeave={(e) => e.target.style.color = '#fff'}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright Section */}
        <div>
          <p style={{
            fontSize: '14px',
            color: '#fff',
          }}>
            {data.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
