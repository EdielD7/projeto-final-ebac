class ProductData {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, title: string, description: string, image: string) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default ProductData
