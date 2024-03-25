import mypicture from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/me.png"
import "./Home.scss"

function Home() {
  return (
    <div className="home">
      <img src={mypicture} alt="Picture of me"/>
      <div className="home-txt">
        <p className="home-about-txt">
        Hello, je suis <span className="firstname">Cyprien</span> <span className="hand">🤚</span><br/ >
        Je suis Développeur Front-End.
        </p>
        <ul className="home-about-li">
          <li><span>🌍</span>Basé en France</li>
          <li><span>💼</span>Étudiant chez OPENCLASSROOMS</li>
          <li><span>🍵</span>Carbure au thé</li>
        </ul>
        <ul className="brand">
          <li><a href="https://www.instagram.com/cypriencres/"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://github.com/Cyprien-Cres/"><i className="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/cyprien-cres-983109275/"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home