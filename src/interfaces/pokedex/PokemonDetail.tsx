export interface IPokemonDetail {
  abilities: Ability[]
  base_experience: number
  forms: BasicDetail[]
  game_indices: Index[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: any[]
  species: BasicDetail
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: BasicDetail
  is_hidden: boolean
  slot: number
}

export interface Index {
  game_index: number
  version: BasicDetail
}

export interface Mfe {
  move: BasicDetail
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: BasicDetail
  version_group: BasicDetail
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: any
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
}

export interface DreamWorld {
  front_default: string
  front_female: any
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Stat {
  base_stat: number
  effort: number
  stat: BasicDetail
}

export interface Type {
  slot: number
  type: BasicDetail
}

export interface BasicDetail {
  name: string
  url: string
}
