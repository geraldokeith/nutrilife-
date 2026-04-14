import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BookAppointment from './pages/BookAppointment'
import HealthProfileSetup from './pages/HealthProfileSetup'
import { AuthProvider } from './context/AuthContext'
import DashboardLayout from './layouts/DashboardLayout'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health-profile" element={<HealthProfileSetup />} />
          <Route 
            path="/dashboard" 
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } 
          />
          <Route 
            path="/book-appointment" 
            element={
              <DashboardLayout>
                <BookAppointment />
              </DashboardLayout>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
