import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import LoginPage from './pages/login'
import Catalogo from './pages/catalogo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  )
}

export default App
