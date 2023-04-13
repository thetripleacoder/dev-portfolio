import React from 'react';
import { skills } from '../data';

let frontendList = [];
let backendList = [];
skills.forEach((skill) => {
  if (skill.technology === 'frontend') {
    frontendList.push(skill);
  } else {
    backendList.push(skill);
  }
});

function SkillSection({ title, listIcon }) {
  return (
    <div
      className={`card bg-transparent ${
        title === 'Frontend' ? 'slide-left-el' : 'slide-right-el'
      }`}
    >
      <h4 className='text-center pt-4'>{title}</h4>
      <ul>
        {listIcon.map((icon) => (
          <div key={icon.name} className='flip-card'>
            <div className='card-container'>
              <div className='icon-card'>
                <div className='front'>
                  <img className='front-img' src={icon.logo} alt={icon.name}/>
                </div>
                <div className='back'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section className='bg-transparent' id='skills'>
      <div className='grid md:grid-cols-2'>
        <SkillSection title='Frontend' listIcon={frontendList} />
        <SkillSection title='Backend' listIcon={backendList} />
      </div>
      {/* <ul>
        {skills.map((icon) => (
          <div key={icon.name} className='flip-card'>
            <div className='card-container'>
              <div className='icon-card'>
                <div className='front'>
                  <img className='front-img' src={icon.logo} />
                </div>
                <div className='back'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul> */}
    </section>
  );
}
