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
        <h1 className='card-profile__title'>Santiago Urrego</h1>
        <h3 className='card-profile__subtitle'>Junior Developer Frontend &lt;/&gt;</h3>
        <div className='buttons-container'>
          {links.map(link => 
            <a className={`button-profile ${link.importance}`} href={link.url} target="_blank" key={link.name}>
              <img className='button__icon' src={link.svg} alt={link.name} />
              {link.text}
            </a>
          )}
        </div>
        <p className='card-profile__paragraph'>Soy un desarrollador frontend multidisciplinario, apasionado por la programación, el diseño y la fotografía, combinando creatividad y tecnología para crear y desarrollar proyectos relevantes y emocionantes.</p>
      </div>
      <button onClick={() => navigate('/sobre-mi')} className='button--about'>Sobre mí</button>
    </>
  );
}

export {Profile};