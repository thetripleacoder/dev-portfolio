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
      href: 'footer',
    },
  ];
  const [activeTab, setActiveTab] = useState('');
  // const [isRouteTriggered, setIsRouteTriggered] = useState(false);

  useEffect(() => {
    // observePageSection();
    listenScrollBehavior();
  }, []);
  // }, [isRouteTriggered]); - useEffect logic runs if routing changes

  // Remove observer to set styling to active class when visible in view
  // function observePageSection() {
  //   const options = {
  //     threshold: 0.3,
  //   };
  //   let pageObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveTab(entry.target.id);
  //       }
  //     });
  //   }, options);
  //   const pages = document.querySelectorAll('.section');
  //   pages.forEach((el) => pageObserver.observe(el));
  // }

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
      if (scrollPoint >= totalPageHeight) {
        setActiveTab('contact');
        if (parseInt(formIframe.style.opacity, 0) === 0) {
          formButton.click();
        }
      } else {
        // observePageSection();
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }

  function navigateTabSection(id) {
    // pageObserver.disconnect()
    // if (activeTab === '/contact' && activeTab !== id) {
    //   setIsRouteTriggered(!isRouteTriggered);
    // } else {
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      if (id === 'contact') {
        let formButton = document.getElementById('formbutton-button');
        let formIframe = document.getElementById('formbutton-iframe');
        if (formButton) {
          if (parseInt(formIframe.style.opacity, 0) === 0) {
            formButton.click();
          }
        }
      } else {
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveTab(id);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light' id='navbar'>
      <a className='navbar-brand d-md-none' href='/'>
        AAA
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav flex justify-center w-full'>
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
