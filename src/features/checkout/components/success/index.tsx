import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { Button } from '@/components/button'

import * as S from './styles'

export default function Success() {
    const params = useSearchParams()
    const router = useRouter()

    const handleSubmit = useCallback(() => {
        router.push('/')
    }, [router])

    return (
        <S.Container>
            <S.Title>Obrigado</S.Title>

            <S.Subtitle>Sua compra foi realizada com sucesso.</S.Subtitle>

            {params.get('couponMoneyExchange') && (
                <S.Subtitle>
                    Verifique a listagem de coupons para utilizar o seu novo
                    cupom.
                </S.Subtitle>
            )}

            <Button title="Continuar comprando" onClick={handleSubmit} />
        </S.Container>
    )
}
