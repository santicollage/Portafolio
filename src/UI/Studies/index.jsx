import React from 'react';
import './Studies.scss';
import iconPlatzi from '../../assets/icons/platzi.svg';
import iconUnal from '../../assets/icons/unal.svg';
import iconPlus from '../../assets/icons/mas.svg'
import { useNavigate } from 'react-router-dom';


function Studies() {
  const navigate = useNavigate();

  return (
    <section className='studies-section'>
      <h2 className='studies-section__title'>Studies</h2>
      <div className='studies-container'>
        <div className='studies-container--left'>
          <div className='study-card'>
            <button className='study-card__button' onClick={() => navigate('/studies/platzi')}>
              <img src={iconPlus} alt="Mas" />
            </button>
            <h3 className='study-card__title'>Desarrollo Web</h3>
            <p className='study-card__text'>nov 2023 - actualidad</p>
            <img className='study-card__image platzi' src={iconPlatzi}alt="Icon Platzi" />
          </div>
          <div className='study-card'>
            <button className='study-card__button' onClick={() => navigate('/studies/unal')}>
              <img src={iconPlus} alt="Mas" />
            </button>
            <h3 className='study-card__title'>Ingenieria Agricola</h3>
            <p className='study-card__text'>2016-2022</p>
            <img className='study-card__image unal' src={iconUnal} alt="Icon Unal" />
          </div>
        </div>
        <div className='studies-container--right'>  
          <div className='study-card --big'>
            <h3 className='study-card__title'>Estudio Autonomo</h3>
            <p className='study-card__text'>Siempre mi curiosidad me ha mantenido en un aprendizaje constante, algunas areas que aprendi de esta manera son:</p>
            <ul className='study-card__list'>
              <li>Programacion</li>
              <li>Fotografia</li>
              <li>Ilustracion</li>
              <li>Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export {Studies};