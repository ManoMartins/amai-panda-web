import { useQuery } from 'react-query'

import api from '@/services/api'
import { ApiResponse } from '@/@types/api-response'

interface InputFindByVoucherCodeCoupon {
    voucherCode: string
}

interface OutputFindByVoucherCodeCoupon {
    id: string
    status: 'NEW' | 'USED'
    voucherCode: string
    userId: string
    amount: number
    createdAt: Date
    updatedAt: Date
}

export async function findByVoucherCodeCoupon(
    input: InputFindByVoucherCodeCoupon
) {
    const { voucherCode } = input

    const response = await api.get<ApiResponse<OutputFindByVoucherCodeCoupon>>(
        `/coupons/${voucherCode}`
    )

    return response.data.data
}

export function useFindByVoucherCodeCoupon(
    input: InputFindByVoucherCodeCoupon
) {
    return useQuery(['coupon', input.voucherCode], () =>
        findByVoucherCodeCoupon(input)
    )
}
