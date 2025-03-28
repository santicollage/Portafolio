import React, { useEffect } from 'react';
import './Study.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { studies } from '../../studies.js' 
import iconArrow from '../../assets/icons/flecha.svg';

function Study() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);    
  }, [navigate]);

  const study = studies.find(study => study.id == params.name);

  const text = study.text.split('<br/>').map((line, index) => 
    <span key={index}>
      {line}
      <br/>
    </span>
  )

  return (
    <section className='study'>
      <button onClick={() => navigate(-1)} className='study__button'>
        <img src={iconArrow} alt="Flecha" />
      </button>
      <h2 className='study__title'>{study.title}</h2>
      <h3 className='study__university'>{study.university}</h3>
      <p className='study__years'>{study.years}</p>
      <p className='study__text'>{text}</p>
    </section>
  );
}

export {Study};