import React from 'react';
import './Home.scss'
import { technologies } from '../../technologies';
import { tools } from '../../tools';
import {Profile} from '../../UI/Profile';
import {Technologies} from '../../UI/Technologies';
import {Projects} from '../../UI/Projects';
import {Studies} from '../../UI/Studies';

function Home() {

  return (
    <main>
      <Profile/>
      <Technologies 
        title={'Tecnologias'} 
        technologies={technologies} 
        distance={100}
      /> 
      <Projects/>
      <Studies/>
      <Technologies 
        title={'Otras herramientas'} 
        technologies={tools} 
        distance={120}
      />
    </main>
  );
}

export {Home};