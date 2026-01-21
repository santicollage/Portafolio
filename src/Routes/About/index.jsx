import React, { useEffect } from 'react';
import './About.scss';
import { useNavigate } from 'react-router-dom';
import iconArrow from '../../assets/icons/flecha.svg';
import image1 from '../../assets/images/about-1.jpg';
import image2 from '../../assets/images/about-2.jpg';
import image3 from '../../assets/images/about-3.jpg';
import image4 from '../../assets/images/about-4.jpg';

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);    
  }, [navigate]);

  return (
    <section className='about'>
      <button onClick={() => navigate(-1)} className='about__button'>
        <img src={iconArrow} alt="Flecha" />
      </button>
      <h2 className='about__title'>Sobre mí</h2>
      <p className='about__text'>
        <span>Desde pequeño, siempre me ha caracterizado una curiosidad innata por descubrir cómo funcionan las cosas. En el colegio, disfrutaba resolviendo acertijos y juegos matemáticos que me desafiaban a pensar de manera diferente. Me gustaba encontrar formas más eficientes de hacer las tareas cotidianas. Sin embargo, a pesar de mi interés en las matemáticas, mi primer acercamiento a la programación no llegó sino hasta la universidad, ya que en el colegio no tuve acceso a clases de tecnología o programación, y mi contacto con internet era limitado a breves visitas a cafés internet.
        </span>
        <span>Mi afinidad por las matemáticas aplicadas me llevó a estudiar ingeniería agrícola en la Universidad Nacional, donde, en sexto semestre, tomé una clase de programación básica que me abrió las puertas al mundo de la lógica computacional. Esa asignatura me hizo redescubrir el placer de resolver problemas, esta vez a través de la programación. Motivado por este nuevo interés, decidí tomar una optativa de programación orientada a objetos, donde mi pasión por el código se consolidó.
        </span>
        <span>Lo que comenzó como un hobby pronto se convirtió en algo más grande. Después de finalizar mi carrera y trabajar en algunos proyectos agricolas, decidí dar un paso más y estudiar programación de manera formal. Mi interés por el diseño y la fotografía me guió hacia el desarrollo front-end, donde puedo combinar creatividad y tecnología. Aunque apenas estoy comenzando en esta industria, estoy emocionado por las oportunidades que ofrece y el impacto que puedo generar al aplicar mis diversas áreas de conocimiento.
        </span>
      </p>
    </section>
  );
}

export {About};