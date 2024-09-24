import React from 'react';
import './Home.scss'
import {Profile} from '../../UI/Profile';
import {Technologies} from '../../UI/Technologies';
import {Projects} from '../../UI/Projects';
import {Studies} from '../../UI/Studies';
import {Tools} from '../../UI/Tools';


function Home() {

  return (
    <main>
      <Profile/>
      <Technologies/>
      <Projects/>
      <Studies/>
      <Tools/>
    </main>
  );
}

export {Home};