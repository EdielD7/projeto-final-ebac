import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="efood" />
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header
