import { useQuery } from 'react-query'
import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'
import { Status } from '@/@types/order/status.d'

interface OutputFindAllOrder {
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
    status: Status
    createdAt: Date
    updatedAt: Date
}

async function findAllOrder() {
    const response = await api.get<ApiResponse<OutputFindAllOrder[]>>(
        '/orders/me'
    )

    return response.data.data
}

export function useFindAllOrder() {
    return useQuery(['orders'], findAllOrder)
}
