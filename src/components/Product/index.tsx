import { Card, Title, Descricao, Img, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 180) {
      return descricao.slice(0, 177) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <Img src={image} alt={title} />

        <Title>{title}</Title>

        <Descricao>{getDescricao(description)}</Descricao>
        <Button>Adicionar ao carrinho</Button>
      </Card>
    </>
  )
}

export default Product
