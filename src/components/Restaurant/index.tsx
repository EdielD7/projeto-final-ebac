import Button from '../Button'

import star from '../../assets/images/star.svg'

import * as S from './styles'

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
    <S.Card>
      <S.Img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Button variant="tag" key={info} title={title}>
            {info}
          </Button>
        ))}
      </S.Infos>
      <S.CardBody>
        <S.CardHeader>
          <h3>{title}</h3>
          <S.Nota>
            {rating} <img src={star} alt="estrela(s)" />
          </S.Nota>
        </S.CardHeader>
        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <Button variant="link" title="Saiba mais" to={`/profile/${id}`}>
          Saiba mais
        </Button>
      </S.CardBody>
    </S.Card>
  )
}

export default Restaurant
