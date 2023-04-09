import React from 'react';

export default function Footer() {
  return (
    <footer className='d-flex flex-wrap justify-content-center' id='footer'>
      <div className='footer-container col-sm-12 col-md-10 col-lg-8 col-xl-6'>
        <div
          className='row justify-content-center mt-4'
          id='contact-links-section'
        >
          <a
            className='btn btn-outline-secondary rounded-circle contact-link-button'
            href='https://www.linkedin.com/in/aldous-aldwin-alde/'
            role='button'
            target='_blank'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            className='btn btn-outline-secondary rounded-circle contact-link-button'
            href='https://github.com/thetripleacoder'
            role='button'
            target='_blank'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            className='btn btn-outline-secondary rounded-circle contact-link-button'
            href='mailto:alde.aldous@gmail.com'
            role='button'
            target='_blank'
          >
            <i className='far fa-envelope'></i>
          </a>
        </div>
        <div className='row justify-content-center text-center mb-0 pb-4'>
          <span> Copyright © 2023 Aldous Aldwin Alde </span>
        </div>
      </div>
    </footer>
  );
}
