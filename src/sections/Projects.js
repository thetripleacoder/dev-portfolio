import React, { useState } from 'react';
import { projects } from '../data';

let featured = [];
let others = [];
projects.forEach((project) => {
  project.featured ? featured.push(project) : others.push(project);
});

function ProjectInfo({ project }) {
  return (
    <div className='flex flex-col justify-center text-center my-auto'>
      <p className=''>{project.dateCreated}</p>
      <h3>{project.title}</h3>
      <p className=''>{project.tools}</p>
      <p className='mt-2 text-lg'>{project.description}</p>
    </div>
  );
}
export default function Projects() {
  const [otherWorksToShow, setOtherWorksToShow] = useState(4);
  const [isPastProjectsExpanded, setIsPastProjectsExpanded] = useState(false);

  function showMore() {
    let additionalotherWorksToShow =
      (otherWorksToShow + 4) < others.length
        ? 4
        : (otherWorksToShow + (others.length - otherWorksToShow));
        // console.log(additionalotherWorksToShow)
        // console.log(otherWorksToShow)
        // console.log(others.length)
    setOtherWorksToShow(additionalotherWorksToShow);
    setIsPastProjectsExpanded(true);
  }

  function showLess() {
    setOtherWorksToShow(4);
    if (otherWorksToShow === others.length) {
      setIsPastProjectsExpanded(false);
    }
  }

  return (
    <section className='section section-container text-center border-t-8 border-black border-dashed' id='projects'>
      {/* <div className='py-1'>
        <h1 className='font-bold underline'>Projects</h1>
      </div> */}
      <div className='bg-white'>
        <div className='mt-10'>
          <h1 className='underline'>Featured Works</h1>
          <div className='mt-10 container p-4 d-flex flex-wrap justify-content-center'>
            {featured.map((project) => (
              <div
                key={project.title}
                className='hidden-el grid md:grid-cols-2 border-2'
              >
                <div>
                  <a href={project.link} target='_blank'>
                    <div className='featured-card-image h-full'>
                      <img
                        alt={project.title}
                        className='featured-card-img border-2 border-gray-100 border-solid h-full w-full object-cover object-center '
                        src={project.image}
                        onMouseEnter={(e) =>
                          (e.currentTarget.src = project.gif)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.src = project.image)
                        }
                      />
                    </div>
                  </a>
                </div>
                <div className='featured-card-info p-4 flex overflow-y-auto'>

                <ProjectInfo project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-2xl'>More works</p>
          <div className='mt-10 container grid gap-10 md:grid-cols-2 md:gap-10'>
            {others.slice(0, otherWorksToShow).map((project, index) => (
              <div
                key={project.title}
                className={`card ${
                  index < 4 ? 'slide-up-el': 'w3-animate-bottom'
                }`}
              >
                <a href={project.link} className='hover:no-underline' target='_blank'>
                  <img
                    alt={project.title}
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src={project.image}
                  />
                  <div className='project-card-info card relative px-4 z-10 w-full opacity-0 hover:opacity-100  hover:relative'>
                    <ProjectInfo project={project} />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className='mt-10'>
            {!isPastProjectsExpanded ? (
              <a className='w3-animate-bottom btn cursor-pointer other-projects-show-btn' onClick={showMore}>
                <p className='m-0'>See more</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='black'
                  className='h-14 text-center'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            ) : (
              <a className='w3-animate-top btn cursor-pointer flex flex-col justify-center' onClick={showLess}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='black'
                  className='h-14 m-0'
                >
                  <path
                    fillRule='evenodd'
                    d='M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='m-0'>See less</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
