import { useQuery } from 'react-query'

import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'

interface OutputListAddress {
    id: string
    city: string
    state: string
    street: string
    number: string
    zipCode: string
    neighborhood: string
    isMain: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
}

async function listAddress() {
    const response = await api.get<ApiResponse<OutputListAddress[]>>(
        '/users/address'
    )

    return response.data.data
}

export function useListAddress() {
    return useQuery(['addresses'], listAddress)
}
