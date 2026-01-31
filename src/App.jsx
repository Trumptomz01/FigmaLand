import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/LandingPage.jsx'

function App() {

  return (
    <Routes>
      <Route index element={<Landing/>} />
    </Routes>
  )
}

export default App
