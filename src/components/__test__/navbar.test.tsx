import {render, screen} from "@testing-library/react"

import Navbar from "../navbar"

describe("Navbar", () => {
  it("Render Navbar component", () => {
    render(<Navbar />)

    expect(screen.getByText("Pokédex")).toBeInTheDocument()
  })
})
