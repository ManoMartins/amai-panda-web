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
    voucherCodes?: string[]
}

async function createOrder(input: InputOrder) {
    const response = await api.post<{
        data: {
            couponMoneyExchange?: any
        }
    }>('/orders', input)

    return response.data
}

export function useCreateOrder() {
    return useMutation(createOrder)
}
