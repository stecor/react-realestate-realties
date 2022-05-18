import React from 'react'
import App from './App'
import './css/main.css'
import Details from './components/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/details/:post_id' element={<Details />} />
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
)
