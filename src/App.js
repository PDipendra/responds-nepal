import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import './styles/_base.scss'

function App () {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  )
}

export default App
