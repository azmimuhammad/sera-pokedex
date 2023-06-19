import {useNavigate} from "react-router-dom"
import {StyledCard, PokemonType} from "./PokemonCardStyles"

interface ItemProps {
  id: number
  name: string
  image: string
  types: any[]
}

const Card = (props: {item: ItemProps}) => {
  const navigate = useNavigate()
  const {item} = props

  return (
    <StyledCard onClick={() => navigate(`/pokemon/${item.name}`)}>
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.name} className="card-image" />
      </div>
      <div className="card-number">{`#${("0000" + item.id).slice(-4)}`}</div>
      <div className="card-title">{item.name}</div>
      <PokemonType>
        {item.types.map((val: any, key: number) => {
          return (
            <div className="type" key={key}>
              {val.type.name}
            </div>
          )
        })}
      </PokemonType>
    </StyledCard>
  )
}

export default Card
