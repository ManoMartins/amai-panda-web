import { useMutation } from 'react-query'

import api from '@/services/api'

interface InputOrder {
    addressId: string
    payments: Array<{
        paymentId: string
        totalInCents: number
    }>
    orderItems: Array<{
        productId: string
        quantity: number
    }>
}

async function createOrder(input: InputOrder) {
    await api.post('/orders', input)
}

export function useCreateOrder() {
    return useMutation(createOrder)
}
