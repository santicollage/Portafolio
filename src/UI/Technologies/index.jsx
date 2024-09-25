import React, {useEffect} from 'react';
import { technologies } from '../../technologies';
import './technologies.scss'


function Technologies() {
  const [positions, setPositions] = React.useState(1);

  const calculatePosition = (i) => {
    if(positions <= (i + 1)) {    
      return i - positions;
    } else {
      return technologies.length - positions + i;
    }
  }
  
  const technologiesCopy = technologies.map((obj, i) => ({ ...obj,  position: calculatePosition(i)}));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prevPosition => prevPosition == technologiesCopy.length? 1 : prevPosition + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='technologies-section'>
      <h2 className='technologies-section__title'>Tecnologias</h2>
      <div className='card-technology-container'>
        {technologiesCopy.map((technology) => 
          <div 
          className='card-technology' 
          key={technology.name} 
          style={{left: `${technology.position * 100}px`, opacity: `${(technology.position == -1 || technology.position >= technologiesCopy.length - 2) ? 0 : 1}`}}>
            <img className='card-technology__image' src={technology.svg} alt={technology.name} />
            <p className='card-technology__name'>{technology.name}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export {Technologies};