import { IconType } from 'react-icons'

import * as S from './styles'
import { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconType
    color?: 'primary' | 'secondary' | 'link'
    size?: 'md'
    badgeNumber?: number
}

export function IconButton({
    icon: Icon,
    color = 'primary',
    size = 'md',
    badgeNumber,
    ...rest
}: IconButtonProps) {
    return (
        <S.Button size={size} color={color} {...rest}>
            <Icon size={18} />

            {badgeNumber && <S.BadgeNumber>{badgeNumber}</S.BadgeNumber>}
        </S.Button>
    )
}
