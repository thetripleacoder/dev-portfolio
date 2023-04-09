import React, { useEffect } from 'react';

export default function Jumbotron() {
  useEffect(() => {
    initializeJumbotron();
    // handleScroll();
  }, []);

  function initializeJumbotron() {
    let TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }

  // function handleScroll() {
  //   let listener = null;
  //   listener = document.addEventListener('scroll', (e) => {
  //     let scrolled = document.scrollingElement.scrollTop;
  //     const section = document.getElementById('jumbotron');
  //     section.classList.toggle('hidden', scrolled >= 200);
  //   });
  //   return () => {
  //     document.removeEventListener('scroll', listener);
  //   };
  // }

  return (
    <div
      className='section jumbotron jumbotron-fluid d-flex vh-100 flex flex-col justify-center items-center'
      id='jumbotron'
    >
      <h1 className='text-4xl md:text-9xl text-center'>
        Aldous Aldwin Alde
      </h1>
      <h3
        className='typewrite jumbotron-typewrite'
        data-period='2000'
        data-type='[ "Full Stack Developer"]'
      >
        <span className='wrap'></span>
      </h3>

      {/* <div className='mt-5'>
          <a href='#contact'>
            <button type='button' className='home-button'>
              Let's Talk!
            </button>
          </a>
        </div> */}
    </div>
  );
}
