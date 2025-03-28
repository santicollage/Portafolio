import React from 'react';
import './Header.scss'
import {links} from '../../links'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  let limit = 3;

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  if (viewportWidth <= 360) {
    limit = 1;
  } else if (viewportWidth <= 420) {
    limit = 2;
  }

  return (
    <header className='header'>
      <h2 onClick={() => navigate('/')} className='header-title'>santi.collage</h2>
      <nav className='nav'>
        <ul className='nav__list'>
          {links.slice(0,limit).map(link => 
            <li key={link.name}>
              <a className='nav__item' href={link.url} target="_blank">
                <img className='nav__icon' src={link.svg} alt={link.name} />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export {Header};