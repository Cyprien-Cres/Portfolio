import { Link } from "react-router-dom"
import "./header.scss"

function Header() {
  return(
    <div className="header">
      <div className="username">
        <Link to={"/"}>
          <h1>Cyprien.</h1>
        </Link>
      </div>
      <div className="menu">
        <Link to={"/Projects"}>
          <button>Projets</button>
        </Link>
        <Link to={"/About"}>
          <button>Présentation</button>
        </Link>
        <Link to={"/Resume"}>
          <button>CV</button>
        </Link>
        <a href="mailto:kanki.dev@gmail.com">
          <button>Contact</button>
        </a>
      </div>
    </div>
  )
}

export default Header