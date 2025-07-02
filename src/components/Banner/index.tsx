import { Imagem, Titulo, Tipo } from './styles'

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const Banner = ({ tipo, titulo, capa }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Titulo>{titulo}</Titulo>
    </div>
  </Imagem>
)

export default Banner
