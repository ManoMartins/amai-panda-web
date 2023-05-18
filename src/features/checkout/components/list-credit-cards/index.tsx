import { ChangeEvent, useCallback } from 'react'

import { useRouter } from 'next/navigation'
import { parseReal2Cent } from '@/utils/parse-real-2-cent'

import { PaymentCheckbox } from '@/components/payment-checkbox'
import { RadioButtonGroup } from '@/components/radio-button-group'

import {
    useCheckoutActions,
    usePayment,
} from '@/features/checkout/stores/checkout'
import { useListCreditCard } from '@/features/credit-card/queries/use-list-credit-card'

export function ListCreditCards() {
    const router = useRouter()
    const listCreditCard = useListCreditCard()

    const payments = usePayment()
    const { addPayment, removePayment, updatePayment } = useCheckoutActions()

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target

            const payment = payments.find((p) => p.paymentId === value)

            if (payment) {
                removePayment(payment.paymentId)
                return
            }

            addPayment(value, 0)
        },
        [payments, addPayment, removePayment]
    )

    const handlePaymentChange = useCallback(
        (paymentId: string, event: ChangeEvent<HTMLInputElement>) => {
            const value = +event.target.value

            if (payments.length > 1 && value < 10 && value !== 0) {
                alert('O valor deve ser no mínimo R$ 10,00 por cartão.')
                return
            }

            updatePayment(paymentId, parseReal2Cent(+event.target.value))
        },
        [payments, updatePayment]
    )

    return (
        <RadioButtonGroup
            title="Meus cartões"
            name="payments"
            onChange={handleChange}
            onAdd={() =>
                router.push(
                    '/account/credit-card/create?redirectTo=/checkout/credit-card'
                )
            }
        >
            {listCreditCard.data?.map((creditCard) => (
                <PaymentCheckbox
                    key={creditCard.id}
                    label={`**** **** **** ${creditCard.cardLastNumber}`}
                    value={creditCard.id}
                    isChecked={
                        !!payments.find((p) => p.paymentId === creditCard.id)
                    }
                    paymentValue={
                        payments.find((p) => p.paymentId === creditCard.id)
                            ?.totalInCents || 0
                    }
                    onPaymentChange={handlePaymentChange}
                />
            ))}
        </RadioButtonGroup>
    )
}
