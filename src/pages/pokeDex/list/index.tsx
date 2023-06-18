import {PokedexListWrapper} from "./ListStyle"
import Card from "../../../components/card/PokemonCard"

const PokeListPage = () => {
  return (
    <PokedexListWrapper>
      <div className="filter">
        <select>
          <option value="0" disabled>Choose type:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
          <option value="5">Honda</option>
          <option value="6">Jaguar</option>
          <option value="7">Land Rover</option>
          <option value="8">Mercedes</option>
          <option value="9">Mini</option>
          <option value="10">Nissan</option>
          <option value="11">Toyota</option>
          <option value="12">Volvo</option>
        </select>
      </div>
      <div className="list">
        {[0, 1, 2, 3, 4].map((val: number) => {
          return <Card key={val} />
        })}
      </div>
    </PokedexListWrapper>
  )
}

export default PokeListPage
