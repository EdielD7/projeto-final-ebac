class RestaurantData {
  description: string
  image: string
  rating: number
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    rating: number,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.rating = rating
    this.infos = infos
    this.image = image
  }
}

export default RestaurantData
