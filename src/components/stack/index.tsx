import { ReactNode } from 'react'

import * as S from './styles'

interface Props {
    children: ReactNode
}

export function Stack({ children }: Props) {
    return <S.Container>{children}</S.Container>
}
