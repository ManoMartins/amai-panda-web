import { useMemo } from 'react'
import { formatCurrency } from '@/utils/format-currency'

import * as S from './styles'
import {
    useCheckoutFormatters,
    useCoupons,
} from '@/features/checkout/stores/checkout'

export function Resume() {
    const coupons = useCoupons()
    const { totalPriceInCents, shippingFeePrice, amountProducts } =
        useCheckoutFormatters()

    const couponAmount = useMemo(() => {
        return coupons.reduce((acc, cur) => acc + cur.amount, 0)
    }, [coupons])

    const totalPrice = useMemo(() => {
        return totalPriceInCents + shippingFeePrice - couponAmount
    }, [])

    return (
        <S.Container>
            <h2>Resumo da compra</h2>

            <S.Overview>
                <S.OverviewRow>
                    <p>Produtos ({amountProducts})</p>
                    <span>{formatCurrency(totalPriceInCents)}</span>
                </S.OverviewRow>

                <S.OverviewRow>
                    <p>Frete</p>
                    <span>{formatCurrency(shippingFeePrice)}</span>
                </S.OverviewRow>

                <S.OverviewRow>
                    <p>Desconto</p>
                    <span>{formatCurrency(couponAmount)}</span>
                </S.OverviewRow>

                <S.OverviewRow>
                    <p>Você pagará</p>
                    <span data-test="total-price">
                        {totalPrice < 0
                            ? formatCurrency(0)
                            : formatCurrency(totalPrice)}
                    </span>
                </S.OverviewRow>
            </S.Overview>
        </S.Container>
    )
}
