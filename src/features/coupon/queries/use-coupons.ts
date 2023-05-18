import { useQuery } from 'react-query'

import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'
import { useUser } from '@/features/auth/stores/auth'

interface OutputGetCoupons {
    id: string
    status: 'NEW' | 'USED'
    voucherCode: string
    userId: string
    amount: number
    createdAt: Date
    updatedAt: Date
}

export async function getCoupons() {
    const response = await api.get<ApiResponse<OutputGetCoupons[]>>(`/coupons`)

    return response.data.data
}

export function useGetCoupons() {
    const user = useUser()

    return useQuery(['coupons'], () => getCoupons(), {
        select: (data) => data.filter((item) => item.userId === user?.id),
    })
}
