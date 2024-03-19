import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./containers/header/header"
import Footer from "./containers/footer/footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Error from "./pages/Error"
import "./main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
