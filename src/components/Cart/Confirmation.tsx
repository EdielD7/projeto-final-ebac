import Button from '../Button'
import { Title, Paragraph } from './styles' // Vamos adicionar o Paragraph aos estilos

type Props = {
  orderId: string
  onConclude: () => void
}

const Confirmation = ({ orderId, onConclude }: Props) => {
  return (
    <>
      <Title>Pedido realizado - {orderId}</Title>
      <Paragraph>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Paragraph>
      <Paragraph>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Paragraph>
      <Paragraph>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Paragraph>
      <Paragraph>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Paragraph>
      <Button
        variant="button"
        type="button"
        title="Clique aqui para concluir e fechar o carrinho"
        onClick={onConclude}
      >
        Concluir
      </Button>
    </>
  )
}

export default Confirmation
