import { Tag, ButtonLink, DefaultButton } from './styles'

type Props = {
  variant?: 'tag' | 'link' | 'button'
  title: string
  type?: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ variant, title, to, onClick, children }: Props) => {
  if (variant === 'tag') {
    return (
      <Tag title={title} onClick={onClick}>
        {children}
      </Tag>
    )
  } else if (variant === 'button') {
    return (
      <DefaultButton title={title} onClick={onClick}>
        {children}
      </DefaultButton>
    )
  }

  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
