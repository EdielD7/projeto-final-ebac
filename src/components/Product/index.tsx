import * as S from './styles'
import fechar from '../../assets/images/fechar.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { CardapioItem } from '../../pages/Home'
import { formataPreco } from '../../utils'
import Button from '../Button'

type Props = {
  cardapioitem: CardapioItem
  title: string
  description: string
  image: string
  portion: string
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
      <S.Card>
        <S.Img src={image} alt={title} />

        <S.Title>{title}</S.Title>

        <S.Descricao>{getDescricao(description)}</S.Descricao>
        <Button
          variant="button"
          title="Adicionar ao carrinho"
          onClick={() => setModalVisible(true)}
        >
          Adicionar ao carrinho
        </Button>
      </S.Card>
      <S.Modal className={isModalVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <S.ModalContainer>
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <br />
                <br />
                {portion}
              </p>
              <S.ModalButton title="Adicionar ao carrinho" onClick={botaoModal}>
                {`Adicionar ao carrinho - ${formataPreco(cardapioitem.preco)}`}
              </S.ModalButton>
            </div>
          </S.ModalContainer>
          <img
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => {
              closeModal()
            }}
          />
        </S.ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Product
