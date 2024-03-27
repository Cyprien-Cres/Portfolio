import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "../containers/header/Header"
import Footer from "../containers/footer/Footer"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects"
import Error from "../pages/Error"
import "./App.scss"

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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;