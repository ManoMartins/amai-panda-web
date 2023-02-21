import { useQuery } from 'react-query'

import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'

interface OutputListCreditCard {
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

async function listCreditCard() {
    const response = await api.get<ApiResponse<OutputListCreditCard[]>>(
        '/payments/credit-card'
    )

    return response.data.data
}

export function useListCreditCard() {
    return useQuery(['credit-cards'], listCreditCard)
}
