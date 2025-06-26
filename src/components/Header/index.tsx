import { HeaderBar, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <Link to="/">
      <img src={logo} alt="efood" />
    </Link>
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header
