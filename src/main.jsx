import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./containers/header/header"
import Footer from "./containers/footer/footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Resume from "./pages/resume/Resume"
import Error from "./pages/Error"
import "./main.scss"

const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:'+(e.pageY - 7)+"px; left:"+(e.pageX - 7)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add('expand')

  setTimeout(() => {
    cursor.classList.remove("expand")
  }, 500)
})

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
