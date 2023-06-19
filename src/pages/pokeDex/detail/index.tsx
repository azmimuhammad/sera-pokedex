import axios from "axios"
import {FC, useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {BASE_API_URL} from "../../../utils/constans"
import {DetailStyled, PokemonStats, Progress} from "./DetailStyles"
import {PokemonType} from "../../../components/card/PokemonCardStyles"
import PageLoading from "../../../components/loading/PageLoading"
import {
  ISimpleDetail,
  Ability,
  Stat
} from "../../../interfaces/pokedex/PokemonDetail"

const initialState: ISimpleDetail = {
  id: 0,
  name: "",
  height: "",
  weight: "",
  ability: "",
  image: "",
  type: [],
  stats: []
}

const PokeDetailPage: FC = () => {
  const {id} = useParams()

  const [loading, setLoading] = useState(false)
  const [detail, setDetail] = useState<ISimpleDetail>(initialState)

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async () => {
    setLoading(true)
    let abilities = ""
    const result = await axios.get(`${BASE_API_URL}/pokemon/${id}`)
    const _detail = result.data
    
    _detail.abilities.forEach(
      (abl: Ability, i: number) =>
        (abilities = `${abilities} ${abl.ability.name} ${
          i !== _detail.abilities.length - 1 && ", "
        }`)
    )
    setDetail({
      ...detail,
      id: _detail.id,
      name: _detail.name,
      height: _detail.height,
      weight: _detail.weight,
      ability: abilities,
      image: _detail.sprites.other["official-artwork"].front_default,
      type: _detail.types,
      stats: _detail.stats
    })
    setLoading(false)
  }

  if (loading) {
    return <PageLoading />
  }

  return (
    <DetailStyled>
      <div className="title">
        {detail.name}
        <div className="number">{`#${("0000" + detail.id).slice(-4)}`}</div>
      </div>
      <div className="poke-detail">
        <div className="card-image-wrapper">
          <img src={detail.image} alt="" className="card-image" />
        </div>
        <div className="description">
          <div className="charasteristic">
            <div className="char-item">
              <span className="label">Height</span>: {detail.height}
            </div>
            <div className="char-item">
              <span className="label">Weight</span>: {detail.weight}
            </div>
            <div className="char-item">
              <span className="label">Ability</span>: {detail.ability}
            </div>
          </div>
          <div className="sub-item">
            <div className="subtitle">Type</div>
            <PokemonType>
              {detail.type.map((val: any, key: number) => {
                return (
                  <div className="type" key={key}>
                    {val.type.name}
                  </div>
                )
              })}
            </PokemonType>
          </div>
          <div className="sub-item">
            <div className="subtitle">Stats</div>
            <PokemonStats>
              {detail.stats.map((val: Stat, idx: number) => {
                return (
                  <div className="stat" key={`${val.stat.name}-${idx}`}>
                    <div>{val.stat.name}</div>
                    <div className="progress">
                      <Progress value={val.base_stat} />
                    </div>
                    <div className="value">{val.base_stat}</div>
                  </div>
                )
              })}
            </PokemonStats>
          </div>
        </div>
      </div>
    </DetailStyled>
  )
}

export default PokeDetailPage
