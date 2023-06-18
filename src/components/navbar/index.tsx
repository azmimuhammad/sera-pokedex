import { StyledNavbar } from "./NavbarStyles"
const Navbar = () => {
  return (
    <StyledNavbar>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        height={50}
        alt="pokedex-logo"
      />
      <div className="title">Pokédex</div>
    </StyledNavbar>
  )
}

export default Navbar
