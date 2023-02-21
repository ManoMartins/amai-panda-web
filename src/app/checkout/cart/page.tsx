'use client'

import * as S from '@/styles/checkout.style'
import { Cart } from '@/features/checkout/components/cart'

export default function CartPage() {
    return (
        <S.Container>
            <Cart />
        </S.Container>
    )
}
