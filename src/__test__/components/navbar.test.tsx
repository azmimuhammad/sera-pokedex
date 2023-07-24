import {render, screen} from "@testing-library/react"

import Navbar from "../../components/navbar"

describe("Navbar", () => {
  it("Render Navbar component", () => {
    render(<Navbar />)

    expect(screen.getByText("Pokédex")).toBeInTheDocument()
  })
})
