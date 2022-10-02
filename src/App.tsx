import { useState, useEffect } from 'react'
import { Home } from './pages/Home/Home'
import { Store } from './pages/Store/Store'
import { About } from './pages/About/About'
import { Navbar } from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context/ContextProvider'

function App() {

  return (
    <div className="App">
      <Navbar />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </ContextProvider>
    </div>
  )
}

export default App
