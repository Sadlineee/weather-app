import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@styles/global'
import Home from '@views/Home/Home'

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path='/weather-app' element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App