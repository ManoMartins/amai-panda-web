'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'

import { Resume } from '@/features/checkout/components/resume'
import { ListCreditCards } from '@/features/checkout/components/list-credit-cards'

import * as S from '@/styles/checkout.style'
import {
    useAddress,
    useCheckoutFormatters,
    useOrderItem,
    usePayment,
} from '@/features/checkout/stores/checkout'
import { useCreateOrder } from '@/features/order/mutations/use-create-order'

export default function CreditCardPage() {
    const router = useRouter()

    const { mutateAsync } = useCreateOrder()

    const payments = usePayment()
    const addressId = useAddress()
    const orderItems = useOrderItem()

    const { shippingFeePrice, totalPriceInCents, totalPaymentPriceInCents } =
        useCheckoutFormatters()

    const handleSubmit = useCallback(async () => {
        try {
            const orderItemsFormatted = orderItems.map((orderItem) => ({
                productId: orderItem.product.id,
                quantity: orderItem.quantity,
            }))

            const paymentsFormatted = payments.map((payment) => ({
                paymentId: payment.paymentId,
                totalInCents: payment.totalInCents,
            }))

            if (
                totalPriceInCents + shippingFeePrice !==
                totalPaymentPriceInCents
            ) {
                alert('O valor de pagamento está diferento do valor total.')
                return
            }

            if (!addressId) {
                alert('Endereço é obrigatorio')
                return
            }

            await mutateAsync({
                addressId,
                payments: paymentsFormatted,
                orderItems: orderItemsFormatted,
            })

            router.push('/checkout/success')
        } catch (e) {
            console.log(e)
        }
    }, [
        router,
        payments,
        addressId,
        orderItems,
        mutateAsync,
        shippingFeePrice,
        totalPriceInCents,
        totalPaymentPriceInCents,
    ])

    return (
        <S.Container>
            <S.CartContent>
                <ListCreditCards />

                <S.CartFooter>
                    <Button title={'Finalizar'} onClick={handleSubmit} />
                </S.CartFooter>
            </S.CartContent>

            <Resume />
        </S.Container>
    )
}
