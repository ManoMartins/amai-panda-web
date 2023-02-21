import api from '@/services/api'
import { useQuery } from 'react-query'
import { ApiResponse } from '@/@types/api-response'

interface InputShowCreditCard {
    creditCardId: string
}

interface OutputShowCreditCard {
    id: string
    cardLastNumber: string
    cardHolder: string
    cardIdentification: string
    cardSecurityCode: string
    cardExpirationDate: string
    cardBrand: string
    createdAt: Date
    updatedAt: Date
}

async function showCreditCard(input: InputShowCreditCard) {
    const { creditCardId } = input

    const response = await api.get<ApiResponse<OutputShowCreditCard>>(
        `/payments/credit-card/${creditCardId}`
    )

    return response.data.data
}

export function useShowCreditCard(input: InputShowCreditCard) {
    return useQuery(['credit-card', input.creditCardId], () =>
        showCreditCard(input)
    )
}
