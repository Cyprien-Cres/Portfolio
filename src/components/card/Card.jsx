import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "../../containers/modalContent/ModalContent"
import projectsList from "../../data/projectsList"
import "./Card.scss"

function Card() {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="card-container">
      {projectsList.map(({id, title, cover, pictures, description, technologies, site, github}) => (
        <div key={id} className="card">
          <img src={`src/assets/${cover}.png`} alt={title} onClick={() => setSelectedCard(id)}/>
          <h1 onClick={() => setSelectedCard(id)}>{title}</h1>
          {selectedCard === id && 
          createPortal(
            <ModalContent closeModal={() => setSelectedCard(null)} cover={cover} pictures={pictures} title={title} description={description} technologies={technologies} site={site} github={github}/>,
            document.body
          )}
        </div>
      ))}
    </div>
  )
}

export default Card