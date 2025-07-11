import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import Banner from '../../components/Banner'

import { useGetRestauranteQuery } from '../../services/api'
import Cart from '../../components/Cart'
// import Checkout from '../../components/Checkout'

const Profile = () => {
  const { id } = useParams()

  const {
    data: restaurante,
    isLoading,
    isError
  } = useGetRestauranteQuery(id ?? '')

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

  // Tratamento de erro
  if (isError || !restaurante) {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{ textAlign: 'center', padding: '80px 0' }}
        >
          <h2>Ocorreu um erro ao carregar o cardápio.</h2>
          <p>
            Restaurante não encontrado ou indisponível. Tente novamente mais
            tarde.
          </p>
        </div>
      </>
    )
  }

  // Renderização de sucesso
  return (
    <>
      <Header />
      <Banner
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <ProductsList cardapio={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default Profile
