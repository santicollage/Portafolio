import React from 'react';
import './Profile.scss';
import imgProfile from '../../assets/images/profile.jpg';
import {links} from '../../links'


function Profile() {

  return (
    <>
      <div>
        <img src={imgProfile} alt="Foto de perfil" />
        <h1>Santiago Urrego</h1>
        <h3>Junior Developer Frontend &lt/&gt</h3>
        <div>
          {links.map(link => 
            <a href={link.url} target="_blank" key={link.name}>
              <img src={link.svg} alt={link.name} />
            </a>
          )}
        </div>
        <p>Soy un desarrollador frontend multidisciplinario, apasionado por la programación, el diseño y la fotografía, combinando creatividad y tecnología para crear y desarrollar proyectos relevantes y emocionantes.</p>
      </div>
      <button>Sobre mí</button>
    </>
  );
}

export {Profile};