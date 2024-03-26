import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import sun from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/sun.svg"
import menu from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/menu.svg"
import cancel from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/cancel.svg"
import "./header.scss"

function Header() {
  const location = useLocation()

  const [showEdit, setShowEdit] = useState("")
  const open = () => setShowEdit(true)
  const close = () => setShowEdit(false)
  const isProjects = location.pathname === "/Projects"
  const isAbout = location.pathname === "/About"
  const isResume = location.pathname === "/Resume"

    return (
    <div className="header">
      <div className="username">
        <Link to={"/"}>
          <h1>Cyprien.</h1>
        </Link>
      </div>
      <div className="menu hidden">
        <button className="sun">
          <img src={sun} alt="sun" />
        </button>
        {showEdit ? (
          <>
            <button className="cancel" onClick={close}>
              <img src={cancel} alt="cancel" />
            </button>
            <div className="little-menu">
              <div>
                <Link to={"/Projects"} onClick={close}>
                  <button>Projets</button>
                </Link>
                <Link to={"/About"} onClick={close}>
                  <button>Présentation</button>
                </Link>
                <a href="src\assets\documents\CV_Cyprien_Cres.pdf" target="_blank">
                  <button>CV</button>
                </a>
                <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                  <button>Contact</button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <button onClick={open}>
            <img src={menu} alt="menu" />
          </button>
        )}
      </div>
      <div className= "menu">
       <Link to={"/Projects"} className={isProjects ? "active" : ""}>
          <button>Projets</button>
        </Link>
        <Link to={"/About"} className={isAbout ? "active" : ""}>
          <button>Présentation</button>
        </Link>
        <a href="src\assets\documents\CV_Cyprien_Cres.pdf" target="_blank">
          <button>CV</button>
        </a>
        <a href="mailto:kanki.dev@gmail.com">
          <button>Contact</button>
        </a>
        <button className="sun">
          <img src={sun} alt="sun" />
        </button>
      </div>
    </div>
  ) 
}

export default Header