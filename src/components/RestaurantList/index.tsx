import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.destacado) {
      tags.push('Destaque')
    }
    tags.push(restaurante.tipo)

    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <Restaurant
              key={restaurante.id}
              id={restaurante.id}
              image={restaurante.capa}
              infos={getRestauranteTags(restaurante)}
              title={restaurante.titulo}
              description={restaurante.descricao}
              rating={restaurante.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
