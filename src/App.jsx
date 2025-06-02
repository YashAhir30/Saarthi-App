import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import { AppProvider } from './context/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <div className="mx-4 sm:mx-[3%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="myappointments" element={<MyAppointment/>} />
          <Route path="MyProfile" element={<MyProfile/>} />
          <Route path="/appointment" element={<Appointment/>} />
        </Routes>
        <Fotter />
      </div>
    </AppProvider>
  )
}

export default App
