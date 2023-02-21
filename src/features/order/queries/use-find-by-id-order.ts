import { useQuery } from 'react-query'
import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'

interface InputFindByIdOrder {
    id: string
}

interface OutputFindByIdOrder {
    id: string
    orderItems: Array<{
        id: string
        productId: string
        orderId: string
        quantity: number
        totalInCents: number
        product: {
            id: string
            name: string
            priceInCents: number
            status: 'ENABLED' | 'DISABLED'
            description: string
            flavor: string
            quantity: number
            imageUrl: string
            createdAt: Date
            updatedAt: Date
        }
        created_at: Date
        updated_at: Date
    }>

    totalInCents: number
    status: 'WAITING_PAYMENT'
    createdAt: Date
    updatedAt: Date
}

async function findByIdOrder(input: InputFindByIdOrder) {
    const { id } = input

    const response = await api.get<ApiResponse<OutputFindByIdOrder>>(
        `/orders/${id}`
    )

    return response.data.data
}

export function useFindByIdOrder(input: InputFindByIdOrder) {
    return useQuery(['orders', input.id], () => findByIdOrder(input))
}
