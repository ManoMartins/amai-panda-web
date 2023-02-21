import { ChangeEvent, useCallback } from 'react'

import { parseReal2Cent } from '@/utils/parse-real-2-cent'

import { PaymentCheckbox } from '@/components/payment-checkbox'
import { RadioButtonGroup } from '@/components/radio-button-group'

import {
    useCheckoutActions,
    usePayment,
} from '@/features/checkout/stores/checkout'
import { useListCreditCard } from '@/features/credit-card/queries/use-list-credit-card'

export function ListCreditCards() {
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
            updatePayment(paymentId, parseReal2Cent(+event.target.value))
        },
        [updatePayment]
    )

    return (
        <RadioButtonGroup
            title={'Meus cartões'}
            name={'payments'}
            onChange={handleChange}
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
