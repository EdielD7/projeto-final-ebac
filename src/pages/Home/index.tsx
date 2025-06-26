import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'
import RestaurantData from '../../models/RestaurantData'

import imagem from '../../assets/images/image1.png'
import imagem2 from '../../assets/images/image2.png'

const restaurants: RestaurantData[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    infos: ['Japonesa', 'Desdaque do Dia'],
    image: imagem
  },
  {
    id: 2,
    title: 'Restaurante 2',
    description:
      'O restaurante 2 tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade.',
    rating: 5.0,
    infos: ['Informação 1', 'Informação 2', 'Informação 3'],
    image: imagem2
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.8,
    infos: ['Italiana'],
    image: imagem2
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurants} />
  </>
)

export default Home
