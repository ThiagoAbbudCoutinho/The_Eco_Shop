import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/home'
import Products from './pages/Products'
import HowItWorks from './pages/how-it-works'
import FAQs from './pages/faqs'

function App() {
  const isLoggedIn = !!localStorage.getItem("user")

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <Login />}/>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/Home" /> : <Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/Products" element={isLoggedIn ? <Products /> : <Navigate to="/" />} />
        <Route path="/how-it-works" element={isLoggedIn ? <HowItWorks /> : <Navigate to="/" />} />
        <Route path="/faqs" element={isLoggedIn ? <FAQs /> : <Navigate to="/" />} /> 
      </Routes>
    </>
  )
}

export default App
