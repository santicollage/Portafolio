import React from 'react';
import './Profile.scss';
import imgProfile from '../../assets/images/profile.jpg';
import {links} from '../../links'
import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <div className='card-profile'>
        <img className='card-profile__image' src={imgProfile} alt="Foto de perfil" />
        <h3 className='card-profile__subtitle'>Web Developer &lt;/&gt;</h3>
        <h1 className='card-profile__title'>Santiago Urrego</h1>
        <div className='buttons-container'>
          {links.map(link => 
            <a className={`button-profile ${link.importance}`} href={link.url} target="_blank" key={link.name}>
              <img className='button__icon' src={link.svg} alt={link.name} />
              {link.text}
            </a>
          )}
        </div>
        <p className='card-profile__paragraph'> Desarrollador Fullstack (Frontend-focused) con experiencia en productos digitales y plataformas web. Transformo requerimientos de negocio en interfaces funcionales y escalables, aplicando pensamiento crítico y analítico para diseñar estrategias técnicas y soluciones optimizadas utilizando React, Tailwind y JavaScript, integradas con APIs REST y bases de datos relacionales.</p>
      </div>
      <button onClick={() => navigate('/sobre-mi')} className='button--about'>Sobre mí</button>
    </>
  );
}

export {Profile};