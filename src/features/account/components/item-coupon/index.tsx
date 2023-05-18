import dayjs from 'dayjs'
import { useMemo } from 'react'
import { Button } from '@/components/button'
import { formatCurrency } from '@/utils/format-currency'

import * as S from './styles'
import { useGetCoupons } from '@/features/coupon/queries/use-coupons'

export function ItemCoupon() {
    const { data } = useGetCoupons()

    const handleClipboard = (voucherCode: string) => {
        window.navigator.clipboard.writeText(voucherCode)
        // alert('Código do voucher copiado com sucesso')
    }

    const enabledCoupons = useMemo(() => {
        return data?.filter((i) => i.status === 'NEW') ?? []
    }, [data])

    return (
        <S.Container>
            <S.Content>
                <h1>Cupons</h1>

                {enabledCoupons.map((i) => (
                    <S.Item>
                        <S.Top>
                            <S.Title>
                                {formatCurrency(i.amount)} OFF em todos os
                                produtos
                            </S.Title>
                            <S.SubTitle>Sem compra mínima</S.SubTitle>
                            <S.SubTitle>
                                Código do voucher{' '}
                                <strong data-test="voucher-code">
                                    {i.voucherCode}
                                </strong>
                            </S.SubTitle>
                        </S.Top>

                        <S.DieCut>
                            <div />
                        </S.DieCut>

                        <S.Bottom>
                            <S.DueDate>
                                Criado em:{' '}
                                {dayjs(i.createdAt).format('DD/MM/YYYY')}
                            </S.DueDate>
                            <Button
                                title="copiar"
                                onClick={() => handleClipboard(i.voucherCode)}
                            />
                        </S.Bottom>
                    </S.Item>
                ))}
            </S.Content>
        </S.Container>
    )
}
