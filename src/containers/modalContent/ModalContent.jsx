import cancel from "D:/formation_openclassrooms/projet_12/Portfolio/src/assets/cancel.svg"
import Slideshow from "../../components/slideshow/Slideshow"
import Techno from "../../components/techno/Techno"
import "./ModalContent.scss"
import { useSelector } from "react-redux"
import { currentMode } from "../darkmode/Darkslice"

function ModalContent({ closeModal, id, title, pictures, description, technologies, site, github }) {
  const mode = useSelector(currentMode)


  return (
    <>
      {mode ? (
          <>
            <div key={id} className={`${title}`}>
            <div onClick={closeModal} className="overlay"></div>
            <div className="modal dark">
              <img src={cancel} alt="cancel" className="close-modal" onClick={closeModal}/>
              <h1>{title}</h1>
              <Slideshow pictures={pictures} />
              <p>{description}</p>
              <div><Techno technologies={technologies}/></div>
                <div className="link-dark">
                  <a href={`${site}`}><button><i className="fa-brands fa-safari"></i> Projet</button></a>
                  <a href={`${github}`}><button><i className="fa-solid fa-code"></i> Code</button></a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div key={id} className={`${title}`}>
              <div onClick={closeModal} className="overlay"></div>
              <div className="modal">
                <img src={cancel} alt="cancel" className="close-modal" onClick={closeModal}/>
                <h1>{title}</h1>
                <Slideshow pictures={pictures} />
                <p>{description}</p>
                <div><Techno technologies={technologies}/></div>
                  <div className="link-projects">
                    <a href={`${site}`}><button><i className="fa-brands fa-safari"></i> Projet</button></a>
                    <a href={`${github}`}><button><i className="fa-solid fa-code"></i> Code</button></a>
                  </div>
                </div>
              </div>
          </>
        )}
    </>
  )
}

export default ModalContent
