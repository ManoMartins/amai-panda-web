import { useMutation } from 'react-query'

import api from '@/services/api'
import { queryClient } from '@/services/query-client'

interface InputDeleteCreditCard {
    creditCardId: string
}

async function deleteCreditCard(input: InputDeleteCreditCard) {
    const { creditCardId } = input

    await api.delete(`/payments/credit-card/${creditCardId}`)
}

export function useDeleteCreditCard() {
    return useMutation(deleteCreditCard, {
        onSuccess() {
            queryClient.invalidateQueries(['credit-cards'])
        },
    })
}
