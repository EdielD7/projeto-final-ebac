import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Precos>Italiana</Precos>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
