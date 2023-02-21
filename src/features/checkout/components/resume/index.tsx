import { formatCurrency } from '@/utils/format-currency'

import * as S from './styles'
import { useCheckoutFormatters } from '@/features/checkout/stores/checkout'

export function Resume() {
    const { totalPriceInCents, shippingFeePrice, amountProducts } =
        useCheckoutFormatters()

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
                    <span>{formatCurrency(0)}</span>
                </S.OverviewRow>

                <S.OverviewRow>
                    <p>Você pagará</p>
                    <span data-test="total-price">
                        {formatCurrency(totalPriceInCents + shippingFeePrice)}
                    </span>
                </S.OverviewRow>
            </S.Overview>
        </S.Container>
    )
}
