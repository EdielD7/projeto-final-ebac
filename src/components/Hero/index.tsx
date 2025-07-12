import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Hero = () => (
  <S.HeroBar>
    <div className="container">
      <S.Logo src={logo} alt="EFOOD" />
      <S.Title>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </S.Title>
    </div>
  </S.HeroBar>
)

export default Hero
