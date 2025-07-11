import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <S.Logo src={logo} alt="efood" />
    <S.Social>
      <li>
        <a target="_blank" href="https://instagram.com" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://facebook.com" rel="noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com" rel="noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </S.Social>
    <S.Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Texto>
  </S.FooterBar>
)

export default Footer
