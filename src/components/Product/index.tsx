import { Card, Title, Descricao, Img, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <Img src={image} alt={title} />

    <Title>{title}</Title>

    <Descricao>{description}</Descricao>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default Product
