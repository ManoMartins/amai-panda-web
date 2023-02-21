import { Button } from '@/components/button'

import * as S from './styles'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function Success() {
    const router = useRouter()

    const handleSubmit = useCallback(() => {
        router.push('/')
    }, [router])

    return (
        <S.Container>
            <S.Title>Obrigado</S.Title>

            <S.Subtitle>Sua compra foi realizada com sucesso.</S.Subtitle>

            <Button title={'Continuar comprando'} onClick={handleSubmit} />
        </S.Container>
    )
}
