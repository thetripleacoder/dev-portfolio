import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let listener = null;
  let tabsArr = [
    {
      name: 'Home',
      href: 'jumbotron',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Works',
      href: 'projects',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ];
  const [previousTab, setPreviousTab] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const [isRouteTriggered, setIsRouteTriggered] = useState(false);
  const [isScrollingIntoView, setIsScrollingIntoView] = useState(false);

  useEffect(() => {
    observePageSection();
    listenScrollBehavior();
  }, [isRouteTriggered]);

  function observePageSection() {
    const options = {
      threshold: 0.3,
    };
    let pageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);
    const pages = document.querySelectorAll('.section');
    pages.forEach((el) => pageObserver.observe(el));
  }

  function listenScrollBehavior() {
    let navBar = document.getElementById('navbar');
    listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        navBar.classList.add('bg-white');
      } else {
        navBar.classList.remove('bg-white');
      }
      let formButton = document.getElementById('formbutton-button');
      let formIframe = document.getElementById('formbutton-iframe');
      var totalPageHeight = document.body.scrollHeight;

      // @var int scrollPoint
      var scrollPoint = window.scrollY + window.innerHeight;

      // check if we hit the bottom of the page
      if (scrollPoint >= totalPageHeight && formIframe) {
        setActiveTab('contact');
        console.log('at the bottom');
        console.log(formButton.style);
        console.log(formIframe.style.opacity)
        if (formIframe.style.opacity == 0) {

          formButton.click();
        }
      } else {
        observePageSection();
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }

  function navigateTabSection(id) {
    // pageObserver.disconnect()
    // if (activeTab === '/contact' && activeTab !== id) {
    //   console.log('route triggered');
    //   setIsRouteTriggered(!isRouteTriggered);
    // } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // }
    }
    setActiveTab(id);
  }

  return (
    <nav className='container-fluid navbar navbar-expand-lg' id='navbar'>
      <button
        className='navbar-toggler justify-content-center order-2'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse justify-content-center'
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          {tabsArr.map((tab) => (
            <li key={tab.name} className='nav-item'>
              {/* {tab.name === 'Contact' ? (
                <Link
                  className={`nav-link cursor-pointer ${
                    activeTab === tab.href && 'active-tab'
                  }`}
                  to={tab.href}
                  onClick={() => navigateTabSection(tab.href)}
                >
                  {tab.name}
                </Link>
              ) : ( */}
              <Link
                to={{
                  pathname: '/',
                  activeTab: tab.href,
                }}
                className={`nav-link cursor-pointer ${
                  activeTab === tab.href && 'active-tab'
                }`}
                onClick={() => navigateTabSection(tab.href)}
              >
                {tab.name}
              </Link>
              {/* )} */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
