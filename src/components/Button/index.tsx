import { Tag, ButtonLink, DefaultButton } from './styles'

type Props = {
  variant: 'tag' | 'link' | 'button'
  title: string
  type?: 'button' | 'submit' | 'reset'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({
  variant,
  title,
  to,
  onClick,
  children,
  type = 'button'
}: Props) => {
  if (variant === 'button') {
    return (
      <DefaultButton type={type} title={title} onClick={onClick}>
        {children}
      </DefaultButton>
    )
  }

  if (variant === 'tag') {
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
