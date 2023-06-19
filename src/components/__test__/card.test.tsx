import {render, screen} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"
import Card from "../card/PokemonCard"

// jest.mock("./PermissionContainer", () => "This is PermissionsContainer")

const item = {
  id: 6,
  name: "Bulbasaur",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  types: ["satu", "dua"]
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
    // screen.debug is going to print the current DOM into the console
    // screen.debug()
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument()
  })
})
