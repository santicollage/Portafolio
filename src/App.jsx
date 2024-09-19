import { useState } from 'react'
import './App.css'
import { HashRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

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

      </HashRouter>
    </>
  )
}

export default App
