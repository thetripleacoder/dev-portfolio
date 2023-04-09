import React, { Fragment, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from './Contact';

export default function Home(props) {
  let activeTab = props.location.activeTab;

  let options = { threshold: 0.5 };
  useEffect(() => {
    initializeIntersectionObservers();
    navigateTabSection(activeTab);
  }, []);

  function initializeIntersectionObservers() {
    // About
    const hiddenEls = document.querySelectorAll('.hidden-el');
    const scaleUpEls = document.querySelectorAll('.scale-up-el');
    const slideUpEls = document.querySelectorAll('.slide-up-el');
    const slideLeftEls = document.querySelectorAll('.slide-left-el');
    const slideRightEls = document.querySelectorAll('.slide-right-el');
    const showUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, options);

    hiddenEls.forEach((el) => showUpObserver.observe(el));
    scaleUpEls.forEach((el) => showUpObserver.observe(el));
    slideUpEls.forEach((el) => showUpObserver.observe(el));
    slideLeftEls.forEach((el) => showUpObserver.observe(el));
    slideRightEls.forEach((el) => showUpObserver.observe(el));
  }

  function navigateTabSection(id) {
    const element = document.getElementById(id);
    // console.log(id)
    if (element) {
      element.scrollIntoView();
    }
  }
  return (
    <Fragment>
      <Jumbotron />
      <About />
      <Projects />
      {/* <Contact /> */}
    </Fragment>
  );
}
