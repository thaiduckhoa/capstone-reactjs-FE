import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Router } from './Router'

import { Login } from './pages'

function App()  {
  const [count, setCount] = useState(0)

  return (
    
      <Router/>

  
  )
}

export default App