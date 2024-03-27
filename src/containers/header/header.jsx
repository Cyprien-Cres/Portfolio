import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Btnmode from "../../components/btnmode/Btnmode"
import menu from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/menu.svg"
import menuwhite from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/menuwhite.svg"
import cancel from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/cancel.svg"
import cancelwhite from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/cancelwhite.svg"
import "./Header.scss"
import { useSelector } from "react-redux"
import { currentMode } from "../darkmode/Darkslice"

function Header() {
  const location = useLocation()
  const mode = useSelector(currentMode)
  const [showEdit, setShowEdit] = useState("")
  const open = () => setShowEdit(true)
  const close = () => setShowEdit(false)
  const isProjects = location.pathname === "/Projects"
  const isAbout = location.pathname === "/About"
  
  return (
    <div className="header">
      {mode ? (
        <>
          <div className="username">
            <Link to={"/"}>
              <h1 className="dark">Cyprien.</h1>
            </Link>
          </div>
          <div className="menu hidden">
            <Btnmode />
            {showEdit ? (
              <>
                <button className="cancel dark" onClick={close}>
                  <img src={cancelwhite} alt="cancel"/>
                </button>
                <div className="little-menu darkbg">
                  <div>
                    <Link to={"/Projects"} onClick={close}>
                      <button className="dark">Projets</button>
                    </Link>
                    <Link to={"/About"} onClick={close}>
                      <button className="dark">Présentation</button>
                    </Link>
                    <a href="src\assets\documents\CV_Cyprien_Cres.pdf" target="_blank">
                      <button className="dark">CV</button>
                    </a>
                    <a href="mailto:kanki.dev@gmail.com" onClick={close}>
                      <button className="dark">Contact</button>
                    </a>
                  </div>
                </div>
              </>
        ) : (
          <button onClick={open}>
            <img src={menuwhite} alt="menu" className="dark"/>
          </button>
        )}
      </div>
      <div className= "menu">
       <Link to={"/Projects"} className={isProjects ? "active" : ""}>
          <button className="dark">Projets</button>
        </Link>
        <Link to={"/About"} className={isAbout ? "active" : ""}>
          <button className="dark">Présentation</button>
        </Link>
        <a href="src\assets\documents\CV_Cyprien_Cres.pdf" target="_blank">
          <button className="dark">CV</button>
        </a>
        <a href="mailto:kanki.dev@gmail.com">
          <button className="dark">Contact</button>
        </a>
        <Btnmode />
      </div>
        </>
      ) : (
        <>
          <div className="username">
            <Link to={"/"}>
              <h1>Cyprien.</h1>
            </Link>
          </div>
          <div className="menu hidden">
            <Btnmode />
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
                <img src={menu} alt="menu"/>
              </button>
            )}
          </div>
          <div className= "menu">
          <Link to={"/Projects"} className={isProjects ? "active" : ""}>
              <button className="btn">Projets</button>
            </Link>
            <Link to={"/About"} className={isAbout ? "active" : ""}>
              <button className="btn">Présentation</button>
            </Link>
            <a href="src\assets\documents\CV_Cyprien_Cres.pdf" target="_blank">
              <button className="btn">CV</button>
            </a>
            <a href="mailto:kanki.dev@gmail.com">
              <button className="btn">Contact</button>
            </a>
            <Btnmode />
          </div>
        </>
      )}
    </div>
  ) 
}

export default Header