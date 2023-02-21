import { useMutation } from 'react-query'

import api from '@/services/api'
import { queryClient } from '@/services/query-client'

interface InputCreateAddress {
    city: string
    state: string
    street: string
    number: string
    neighborhood: string
    zipCode: string
    isMain: boolean
}

async function createAddress(input: InputCreateAddress) {
    await api.post('/users/address', input)
}

export function useCreateAddress() {
    return useMutation(createAddress, {
        onSuccess() {
            queryClient.invalidateQueries(['addresses'])
        },
    })
}
