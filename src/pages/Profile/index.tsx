import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Product from '../../models/ProductData'

import marguerita from '../../assets/images/marguerita.png'
import Banner from '../../components/Banner'

const products: Product[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 2,
    title: 'Pizza Calabresa',
    description:
      'Uma pizza irresistiível: molho de tomate suculento, mussarela derretida, calabresa crocante e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 3,
    title: 'Pizza Portuguesa',
    description:
      'Uma pizza irresistiível: molho de tomate suculento, mussarela derretida, calabresa crocante e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 4,
    title: 'Pizza Quatro Queijos',
    description:
      'Uma pizza irresistiível: molho de tomate suculento, mussarela derretida, calabresa crocante e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 5,
    title: 'Pizza Napolitana',
    description:
      'Uma pizza irresistiível: molho de tomate suculento, mussarela derretida, calabresa crocante e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  },
  {
    id: 6,
    title: 'Pizza Frango com Catupiry',
    description:
      'Uma pizza irresistiível: molho de tomate suculento, mussarela derretida, calabresa crocante e um toque de azeite. Sabor e simplicidade!',
    image: marguerita
  }
]

const Profile = () => (
  <>
    <Header />
    <Banner />
    <ProductsList products={products} />
  </>
)

export default Profile
