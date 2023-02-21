import { useMutation } from 'react-query'

import api from '@/services/api'

interface InputSignIn {
    email: string
    password: string
}

async function signIn(input: InputSignIn) {
    const response = await api.post('/login', input)

    api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`

    return response.data
}

export function useSignIn() {
    return useMutation(signIn)
}
