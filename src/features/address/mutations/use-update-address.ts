import { useMutation } from 'react-query'

import api from '@/services/api'
import { queryClient } from '@/services/query-client'

interface InputUpdateAddress {
    addressId: string
    city: string
    state: string
    street: string
    number: string
    neighborhood: string
    zipCode: string
    isMain: boolean
}

async function updateAddress(input: InputUpdateAddress) {
    const { addressId, ...update } = input

    await api.put(`/users/address/${addressId}`, update)
}

export function useUpdateAddress() {
    return useMutation(updateAddress, {
        onSuccess(_, input) {
            queryClient.invalidateQueries([
                'addresses',
                'address',
                input.addressId,
            ])
        },
    })
}
