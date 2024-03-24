import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
