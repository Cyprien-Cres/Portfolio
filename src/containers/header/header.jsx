import { Link, useLocation } from "react-router-dom"
import sun from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/sun.svg"
import "./header.scss"

function Header() {
  const location = useLocation()

  const isProjects = location.pathname === "/Projects"
  const isAbout = location.pathname === "/About"
  const isResume = location.pathname === "/Resume"

  if (window.matchMedia("(min-width: 768px)").matches){
    return <div className="header">
      <div className="username">
        <Link to={"/"}>
          <h1>Cyprien.</h1>
        </Link>
      </div>
      <div className= "menu">
        <Link to={"/Projects"} className={isProjects ? "active" : ""}>
          <button>Projets</button>
        </Link>
        <Link to={"/About"} className={isAbout ? "active" : ""}>
          <button>Présentation</button>
        </Link>
        <Link to={"/Resume"} className={isResume ? "active" : ""}>
          <button>CV</button>
        </Link>
        <a href="mailto:kanki.dev@gmail.com">
          <button>Contact</button>
        </a>
        <button>
          <img src={sun} alt="sun" />
        </button>
      </div>
    </div>
  } else {
    return <div className="header">
      <div className="username">
        <Link to={"/"}>
          <h1>Cyprien.</h1>
        </Link>
      </div>
      <div className= "menu">
        <Link to={"/Projects"} className={isProjects ? "active" : ""}>
          <button>Projets</button>
        </Link>
        <Link to={"/About"} className={isAbout ? "active" : ""}>
          <button>Présentation</button>
        </Link>
        <Link to={"/Resume"} className={isResume ? "active" : ""}>
          <button>CV</button>
        </Link>
        <a href="mailto:kanki.dev@gmail.com">
          <button>Contact</button>
        </a>
        <button>
          <img src={sun} alt="sun" />
        </button>
      </div>
    </div>
  }
}

export default Header