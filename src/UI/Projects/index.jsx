import React from 'react';
import './Projects.scss'
import {projects} from '../../projects'


function Projects() {

  return (
    <section className='projects-section'>
      <h2 className='projects-title'>Projects</h2>
      <div className='projects-container'>
        {projects.map(project => 
          <div key={project.name} className='project-card'>
            <img className='project-card__image' src={project.image} alt={project.name} />
            <div className='project-card__info'>
              <h3 className='project-card__title'>{project.name}</h3>
              <p className='project-card__paragraph'>{project.text}</p>
              <div className='project-card__buttons-container'>
                <a className='project-card__button' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25" fill="#0C1524"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>
                </a>
                <a className='project-card__button' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="#0C1524">
                    <g>
                      <path
                        style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                        d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387 c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416 C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237 c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93 c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23 C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23 c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921 c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576 c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export {Projects};