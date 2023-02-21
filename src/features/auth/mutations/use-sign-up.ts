import { useMutation } from 'react-query'

import api from '@/services/api'

interface InputSignUp {
    name: string
    email: string
    password: string
    gender: string
    phoneNumber: string
    documentNumber: string
}

async function signUp(input: InputSignUp) {
    await api.post('/users', input)
}

export function useSignUp() {
    return useMutation(signUp)
}
