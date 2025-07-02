import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import Banner from '../../components/Banner'
import { Restaurante } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurante) => setRestaurante(data))
  }, [id])

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
    </>
  )
}

export default Profile
