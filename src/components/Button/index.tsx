import { Tag, ButtonLink } from './styles'

type Props = {
  type?: 'tag' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'tag') {
    return (
      <Tag title={title} onClick={onClick}>
        {children}
      </Tag>
    )
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
