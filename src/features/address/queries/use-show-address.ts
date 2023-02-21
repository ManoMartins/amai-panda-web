import api from '@/services/api'
import { useQuery } from 'react-query'
import { ApiResponse } from '@/@types/api-response'

interface InputShowAddress {
    addressId: string
}

interface OutputShowAddress {
    id: string
    city: string
    state: string
    street: string
    number: string
    zipCode: string
    neighborhood: string
    complement?: string
    isMain: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
}

async function showAddress(input: InputShowAddress) {
    const { addressId } = input

    const response = await api.get<ApiResponse<OutputShowAddress>>(
        `/users/address/${addressId}`
    )

    return response.data.data
}

export function useShowAddress(input: InputShowAddress) {
    return useQuery(['address', input.addressId], () => showAddress(input))
}
