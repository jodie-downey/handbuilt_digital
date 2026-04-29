import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import OperatorsEdge from './pages/OperatorsEdge.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/operators-edge" element={<OperatorsEdge />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
