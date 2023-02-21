import { useMutation } from 'react-query'

import api from '@/services/api'
import { queryClient } from '@/services/query-client'

interface InputDeleteAddress {
    addressId: string
}

async function deleteAddress(input: InputDeleteAddress) {
    const { addressId } = input

    await api.delete(`/users/address/${addressId}`)
}

export function useDeleteAddress() {
    return useMutation(deleteAddress, {
        onSuccess() {
            queryClient.invalidateQueries(['addresses'])
        },
    })
}
