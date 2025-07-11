import RestaurantList from '../../components/RestaurantList'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

// const restaurants: RestaurantData[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     rating: 4.9,
//     infos: ['Japonesa', 'Desdaque do Dia'],
//     image: imagem
//   },
//   {
//     id: 2,
//     title: 'Restaurante 2',
//     description:
//       'O restaurante 2 tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade.',
//     rating: 5.0,
//     infos: ['Informação 1', 'Informação 2', 'Informação 3'],
//     image: imagem2
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     rating: 4.8,
//     infos: ['Italiana'],
//     image: imagem2
//   },
//   {
//     id: 4,
//     title: 'Hioki Sushi',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     rating: 4.9,
//     infos: ['Japonesa', 'Desdaque do Dia'],
//     image: imagem
//   },
//   {
//     id: 5,
//     title: 'Restaurante 2',
//     description:
//       'O restaurante 2 tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade. Ele tem uma descrição muito grande para testar o layout da grade.',
//     rating: 5.0,
//     infos: ['Informação 1', 'Informação 2', 'Informação 3'],
//     image: imagem2
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     rating: 4.8,
//     infos: ['Italiana'],
//     image: imagem2
//   }
// ]

const Home = () => {
  const { data: restaurantes, isLoading, isError } = useGetRestaurantesQuery()

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="loading">
          <h3>Carregando...</h3>
        </div>
      </>
    )
  }

  // Se a requisição falhou
  if (isError) {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{ textAlign: 'center', padding: '80px 0' }}
        >
          <h2>Ocorreu um erro ao buscar os restaurantes.</h2>
          <p>Por favor, tente novamente mais tarde.</p>
        </div>
      </>
    )
  }

  // Se a requisição foi bem-sucedida, mas não retornou restaurantes
  if (!restaurantes || restaurantes.length === 0) {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{ textAlign: 'center', padding: '80px 0' }}
        >
          <h2>Nenhum restaurante encontrado.</h2>
        </div>
      </>
    )
  }

  // Se tudo deu certo
  return (
    <>
      <Header />
      <RestaurantList restaurantes={restaurantes} />
    </>
  )
}

export default Home
