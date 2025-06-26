import RestaurantData from '../../models/RestaurantData'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurants: RestaurantData[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            description={restaurant.description}
            rating={restaurant.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
