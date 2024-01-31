import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './components/Header'


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}
