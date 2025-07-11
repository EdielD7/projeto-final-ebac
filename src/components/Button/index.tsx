import * as S from './styles'

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
      <S.DefaultButton type={type} title={title} onClick={onClick}>
        {children}
      </S.DefaultButton>
    )
  }

  if (variant === 'tag') {
    return (
      <S.Tag title={title} onClick={onClick}>
        {children}
      </S.Tag>
    )
  }

  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
