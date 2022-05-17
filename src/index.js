import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/main.css'
import Details from './components/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/details' element={<Details />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
