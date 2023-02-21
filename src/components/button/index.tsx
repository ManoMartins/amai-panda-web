import { IconType } from 'react-icons'
import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType
    title: string
    color?: 'primary' | 'secondary' | 'link'
    size?: 'md'
    badgeNumber?: number
}

export function Button({
    title,
    icon: Icon,
    color = 'primary',
    size = 'md',
    badgeNumber,
    ...rest
}: ButtonProps) {
    return (
        <S.Button color={color} size={size} {...rest}>
            {Icon && <Icon size={16} />}
            {title}

            {badgeNumber && <S.BadgeNumber>{badgeNumber}</S.BadgeNumber>}
        </S.Button>
    )
}
