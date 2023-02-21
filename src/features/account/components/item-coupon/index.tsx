import { Button } from '@/components/button'

import * as S from './styles'
export function ItemCoupon() {
    return (
        <S.Container>
            <S.Content>
                <h1>Cupons</h1>

                <S.Item>
                    <S.Top>
                        <S.Title>R$ 15 OFF em todos os produtos</S.Title>
                        <S.SubTitle>Sem compra mínima</S.SubTitle>
                        <S.SubTitle>Limite de R$ 15,00</S.SubTitle>
                    </S.Top>

                    <S.DieCut>
                        <div />
                    </S.DieCut>

                    <S.Bottom>
                        <S.DueDate>Vence 31 de janeiro</S.DueDate>
                        <Button title={'copiar'} />
                    </S.Bottom>
                </S.Item>
            </S.Content>
        </S.Container>
    )
}
