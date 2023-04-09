import React from 'react';

export default function Contact() {

  return (
    <div className='section section-container min-h-50 flex justify-center items-center' id='contact'>
      <div className='scale-up-el col-sm-12 col-md-6 col-lg-4'>
        <div className='card my-5' id='contact-form-card'>
          <h3 className='mt-5 text-center'>Get in Touch!</h3>
          <div id='contact-form'>
            <form
              className='p-5'
              action='https://formspree.io/f/xrgvyqjb'
              method='post'
            >
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Enter name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='Enter email'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows='3'
                  placeholder='Enter message'
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type='submit'
                  className='d-flex btn btn-dark contact-button'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </div>

  );
}
