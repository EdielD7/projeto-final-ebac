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

type Props = {
  title: string
  description: string
  image: string
  portion: string
}

interface ModalState {
  url: string
  isVisible: boolean
}

const Product = ({ title, description, image, portion }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    url: '',
    isVisible: false
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 170) {
      return descricao.slice(0, 167) + '...'
    }
    return descricao
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
  }

  return (
    <>
      <Card>
        <Img src={image} alt={title} />

        <Title>{title}</Title>

        <Descricao>{getDescricao(description)}</Descricao>
        <Button onClick={() => setModal({ url: image, isVisible: true })}>
          Adicionar ao carrinho
        </Button>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <ModalContainer>
            <img src={modal.url} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>
                {description}
                <br />
                <br />
                {portion}
              </p>
              <Button>Adicionar ao carrinho</Button>
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
