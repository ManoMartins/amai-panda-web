import { useQuery } from 'react-query'

import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'
import { ProductModel } from '@/models/product.model'

interface OutputListProducts {
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

async function listProducts() {
    const response = await api.get<ApiResponse<OutputListProducts[]>>(
        '/products'
    )

    return response.data.data
}

export function useListProducts() {
    return useQuery(['products'], listProducts)
}
