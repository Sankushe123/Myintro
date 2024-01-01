import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Dash from './Components/Dashboard/Dash'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Header/>}/>
            {/* <Route path='/dashboard' element={<Dash/>}/> */}
            
        </Routes>
      </Router>
    </div>
  )
}

export default App