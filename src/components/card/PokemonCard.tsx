import {useNavigate} from "react-router-dom"
import {StyledCard} from "./PokemonCardStyles"

const Card = () => {
  const navigate = useNavigate()
  return (
    <StyledCard onClick={() => navigate('/pokemon/1')}>
      <div className="card-image-wrapper">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          alt=""
          className="card-image"
        />
      </div>
      <div className="card-number">#0001</div>
      <div className="card-title">Bulbasaur</div>
      <div className="card-type">
        <div className="type">Satu</div>
        <div className="type">Satu</div>
      </div>
    </StyledCard>
  )
}

export default Card
