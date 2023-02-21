import { useMutation } from 'react-query'

import api from '@/services/api'
import { queryClient } from '@/services/query-client'

interface InputCreateCreditCard {
    cardLastNumber: string
    cardHolder: string
    cardIdentification: string
    cardSecurityCode: string
    cardExpirationDate: string
    cardBrand: string
}

async function createCreditCard(input: InputCreateCreditCard) {
    await api.post('/payments/credit-card', input)
}

export function useCreateCreditCard() {
    return useMutation(createCreditCard, {
        onSuccess() {
            queryClient.invalidateQueries(['credit-cards'])
        },
    })
}
