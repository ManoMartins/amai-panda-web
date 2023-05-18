'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'

import { Resume } from '@/features/checkout/components/resume'
import { ListCreditCards } from '@/features/checkout/components/list-credit-cards'

import * as S from '@/styles/checkout.style'
import {
    useAddress,
    useCheckoutActions,
    useCheckoutFormatters,
    useCoupons,
    useOrderItem,
    usePayment,
} from '@/features/checkout/stores/checkout'
import { useCreateOrder } from '@/features/order/mutations/use-create-order'

export default function CreditCardPage() {
    const router = useRouter()

    const { mutateAsync } = useCreateOrder()

    const { reset } = useCheckoutActions()
    const payments = usePayment()
    const addressId = useAddress()
    const orderItems = useOrderItem()
    const coupons = useCoupons()

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

            const couponAmount = coupons.reduce(
                (acc, cur) => acc + cur.amount,
                0
            )

            const total = totalPriceInCents + shippingFeePrice - couponAmount

            if (total > 0 && total !== totalPaymentPriceInCents) {
                alert('O valor de pagamento está diferento do valor total.')
                return
            }

            if (!addressId) {
                alert('Endereço é obrigatorio')
                return
            }

            const result = await mutateAsync({
                addressId,
                payments: paymentsFormatted,
                orderItems: orderItemsFormatted,
                voucherCodes: coupons.map((coupon) => coupon.voucherCode),
            })

            const query = `couponMoneyExchange=${result.data?.couponMoneyExchange?.voucherCode}`

            router.push(
                `/checkout/success${
                    result.data?.couponMoneyExchange?.voucherCode
                        ? `?${query}`
                        : ''
                }`
            )
            reset()
        } catch (e: any) {
            let errorMessage = e.message

            if (e.response?.data?.errorMessage) {
                errorMessage = e.response.data.errorMessage
            }

            alert(errorMessage)
        }
    }, [
        router,
        coupons,
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
                    <Button title="Finalizar" onClick={handleSubmit} />
                </S.CartFooter>
            </S.CartContent>

            <Resume />
        </S.Container>
    )
}
