import { useMutation } from 'react-query'
import api from '@/services/api'

interface InputRequestExchangeOrder {
    id: string
    orderItems: any[]
}

async function requestExchangeOrder(input: InputRequestExchangeOrder) {
    await api.post(`/orders/${input.id}/request-exchange`, {
        orderItems: input.orderItems,
    })
}

export function useRequestExchangeOrder() {
    return useMutation(requestExchangeOrder)
}
