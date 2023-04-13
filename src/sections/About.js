import React from 'react';
import Skills from './Skills';

export default function About() {
  return (
    <section
      className='section section-container text-center min-h-screen flex items-center'
      id='about'
    >
      <div className='container'>
        <div className='flex flex-col justify-center text-center'>
          <div className='hidden-el flex justify-center'>
            <img
              src='../assets/images/miscellaneous/logo.png'
              className='about-profile-img rounded-full'
              alt='logo'
            ></img>
          </div>

          <div className='mt-10'>
            <p className='slide-up-el text-2xl'>
              Hi! My name is Aldous. I am a Full Stack Web Developer and
              currently working as a Frontend Developer at TTEC. I am a graduate of a coding bootcamp training and below is my current tech stack.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <Skills />
        </div>
      </div>
    </section>
  );
}
