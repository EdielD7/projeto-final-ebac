import {
  Card,
  Title,
  Descricao,
  Img,
  Button,
  Modal,
  ModalContent,
  ModalContainer
} from './styles'
import fechar from '../../assets/images/fechar.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { CardapioItem } from '../../pages/Home'
import { formataPreco } from '../../utils'

type Props = {
  cardapioitem: CardapioItem
  title: string
  description: string
  image: string
  portion: string
}

interface ModalState {
  url: string
  isVisible: boolean
}

const Product = ({
  cardapioitem,
  title,
  description,
  image,
  portion
}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(cardapioitem))
    dispatch(open())
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const botaoModal = () => {
    addToCart()
    closeModal()
  }

  return (
    <>
      <Card>
        <Img src={image} alt={title} />

        <Title>{title}</Title>

        <Descricao>{getDescricao(description)}</Descricao>
        <Button onClick={() => setModalVisible(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>
      <Modal className={isModalVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <ModalContainer>
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <br />
                <br />
                {portion}
              </p>
              <Button onClick={botaoModal}>
                Adicionar ao carrinho - {formataPreco(cardapioitem.preco)}
              </Button>
            </div>
          </ModalContainer>
          <img
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => {
              closeModal()
            }}
          />
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Product
