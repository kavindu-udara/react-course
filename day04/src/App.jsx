import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Regitser from './pages/Regitser'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regitser />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/profile/:name' element={<Profile />} />
      </Route>

      <Route path="*" element={<h1>404 Not Found</h1>} />



    </Routes>
  )
}

export default App
