import {useState, useEffect} from "react"
import axios from "axios"
import {PokedexListWrapper} from "./ListStyles"
import {BASE_API_URL} from "../../../utils/constans"
import {
  IPokemonDetail,
  BasicDetail
} from "../../../interfaces/pokedex/PokemonDetail"

import Card from "../../../components/card/PokemonCard"
import InfiniteScroll from "react-infinite-scroll-component"

const PokeListPage = () => {
  const LIMIT = 8
  const [pokemons, setPokemons] = useState<BasicDetail[]>([])
  const [pokeList, setPokeList] = useState<IPokemonDetail[]>([])
  const [types, setTypes] = useState<BasicDetail[]>([])
  const [selectedType, setSelectedType] = useState("")
  const [totalData, setTotalData] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchData()
    getTypes()
  }, [offset]) // eslint-disable-line

  useEffect(() => {
    fetchDetail()
  }, [pokemons]) // eslint-disable-line

  const fetchData = async () => {
    const resPokemons = await axios.get(
      `${BASE_API_URL}/pokemon?limit=${LIMIT}&offset=${offset}`
    )

    setPokemons(pokemons.concat(resPokemons.data.results))
    setTotalData(resPokemons.data.count)
  }

  const fetchDetail = async () => {
    Promise.all(pokemons.map((poke: BasicDetail) => getDetail(poke.url))).then(
      (res: IPokemonDetail[]) => {
        setPokeList([...res])
      }
    )
  }

  const getTypes = async () => {
    axios.get(`${BASE_API_URL}/type`).then((res: any) => {
      setTypes([...res.data.results])
    })
  }

  const getDetail = async (url: string) => {
    const pokeId = url.split("/")[6]

    const detail = await axios.get(
      `${BASE_API_URL}/pokemon/${parseInt(pokeId)}`
    )
    const {data} = detail

    return data
  }

  const onFilterType = (value: string) => {
    setSelectedType(value)
    axios.get(`${BASE_API_URL}/type/${value}`).then((res: any) => {
      const _pokTypes: BasicDetail[] = []

      res.data.pokemon.forEach((poke: {slot: number; pokemon: BasicDetail}) => {
        _pokTypes.push({...poke.pokemon})
      })

      setTotalData(res.data.pokemon.length)
      setPokemons(_pokTypes)
    })
  }

  const fetchMoreData = () => {
    setOffset(offset + LIMIT)
  }

  return (
    <PokedexListWrapper>
      <div className="filter">
        <select
          value={selectedType}
          onChange={(e) => onFilterType(e.target.value)}
        >
          <option value="" disabled>
            Choose type:
          </option>
          {types.map((val: BasicDetail, idx: number) => {
            return (
              <option value={val.name} key={`${val.name}-${idx}`}>
                {val.name}
              </option>
            )
          })}
        </select>
        <div>Total: {totalData}</div>
      </div>
      <InfiniteScroll
        dataLength={pokeList.length}
        next={fetchMoreData}
        hasMore={pokeList.length < totalData}
        loader={<h4>Loading...</h4>}
        className="list"
      >
        {pokeList.map((val: IPokemonDetail, key: number) => {
          return (
            <Card
              item={{
                id: val.id,
                name: val.name,
                image: val.sprites.other["official-artwork"].front_default,
                types: val.types
              }}
              key={key}
            />
          )
        })}
      </InfiniteScroll>
    </PokedexListWrapper>
  )
}

export default PokeListPage
