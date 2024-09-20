import React from 'react';
import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../UI/Header';
import { Background } from '../UI/Background';
import { Home } from './Home';
import { About } from './About';
import { Studies } from './Studies';

function App() {

  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre-mi' element={<About/>} />
          <Route path='/estudio/:name' element={<Studies/>} />
          <Route path='*' element={<p>Not found</p>} />
        </Routes>

        <Background/>

      </HashRouter>
    </>
  )
}

export default App
