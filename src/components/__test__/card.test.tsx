import {render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import Card from "../card/PokemonCard"


const item = {
  id: 6,
  name: "Bulbasaur",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  types: [
    {
      slot: 1,
      type: {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/"
      }
    }
  ]
}

describe("Card", () => {
  const renderCard = () =>
    render(
      <BrowserRouter>
        <Card item={item} />
      </BrowserRouter>
    )

  test("renders app", () => {
    renderCard()
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument()
  })
})
