import {
  Card,
  CardBody,
  Descricao,
  CardHeader,
  Nota,
  Infos,
  Img
} from './styles'

import star from '../../assets/images/star.svg'
import Button from '../Button'

type Props = {
  id: number
  title: string
  description: string
  rating: number
  infos: string[]
  image: string
}

const Restaurant = ({
  id,
  title,
  description,
  rating,
  infos,
  image
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Button type="tag" key={info} title={title}>
            {info}
          </Button>
        ))}
      </Infos>
      <CardBody>
        <CardHeader>
          <h3>{title}</h3>
          <Nota>
            {rating} <img src={star} alt="estrela(s)" />
          </Nota>
        </CardHeader>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button type="link" title="Saiba mais" to={`/profile/${id}`}>
          Saiba mais
        </Button>
      </CardBody>
    </Card>
  )
}

export default Restaurant
