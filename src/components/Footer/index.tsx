import { FooterBar, Logo, Social, Texto } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterBar>
    <Logo src={logo} alt="efood" />
    <Social>
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
    </Social>
    <Texto>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Texto>
  </FooterBar>
)

export default Footer
