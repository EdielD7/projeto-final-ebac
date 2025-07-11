import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import Banner from '../../components/Banner'

import { useGetRestauranteQuery } from '../../services/api'
import Cart from '../../components/Cart'
// import Checkout from '../../components/Checkout'

const Profile = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id ?? '')

  if (!restaurante) {
    return (
      <>
        <Header />
        <div className="loading">
          <h3>Carregando...</h3>
        </div>
      </>
    )
  }

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
      {/* <Checkout /> */}
    </>
  )
}

export default Profile
