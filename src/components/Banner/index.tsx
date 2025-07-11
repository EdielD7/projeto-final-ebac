import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Banner = ({ tipo, titulo, capa }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <S.Tipo>{tipo}</S.Tipo>
      <S.Titulo>{titulo}</S.Titulo>
    </div>
  </S.Imagem>
)

export default Banner
