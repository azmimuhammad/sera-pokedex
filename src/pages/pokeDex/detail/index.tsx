import {DetailStyled, PokemonStats, Progress} from "./DetailStyles"
import {PokemonType} from "../../../components/card/PokemonCardStyles"

const PokeDetailPage = () => {
  return (
    <DetailStyled>
      <div className="title">
        Bulbasaur<div className="number">#0001</div>
      </div>
      <div className="poke-detail">
        <div className="card-image-wrapper">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt=""
            className="card-image"
          />
        </div>
        <div className="description">
          <div className="charasteristic">
            <div className="char-item">
              <span className="label">Height</span>: 20
            </div>
            <div className="char-item">
              <span className="label">Weight</span>: 20
            </div>
            <div className="char-item">
              <span className="label">Category</span>: 20
            </div>
            <div className="char-item">
              <span className="label">Ability</span>: 20
            </div>
          </div>
          <div className="sub-item">
            <div className="subtitle">Type</div>
            <PokemonType>
              <div className="type">11</div>
              <div className="type">22</div>
            </PokemonType>
          </div>
          <div className="sub-item">
            <div className="subtitle">Stats</div>
            <PokemonStats>
              <div className="stat">
                <div>Hp</div>
                <div className="progress"><Progress value={10} /></div>
                <div className="value">20</div>
              </div>
            </PokemonStats>
          </div>
        </div>
      </div>
    </DetailStyled>
  )
}

export default PokeDetailPage
