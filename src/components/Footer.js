import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Dannie
            </Link>
          </div>
          <small class='website-rights'>Made with love by Dania</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to= {{ pathname: "https://www.facebook.com/scarlett.leen.35" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to= {{ pathname: "https://www.instagram.com/daniaa.py/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link 
              class='social-icon-link linkedin' 
              to= {{ pathname: "https://www.linkedin.com/in/dania-adimi-766842199/" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link github'
              to= {{ pathname: "https://github.com/adimidania" }}
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;