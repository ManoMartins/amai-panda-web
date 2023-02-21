import * as z from 'zod'

export const schema = z.object({
    name: z.string({
        required_error: 'Preenchimento obrigatório',
    }),
    email: z
        .string({
            required_error: 'Preenchimento obrigatório',
        })
        .email(),
    password: z.string({
        required_error: 'Preenchimento obrigatório',
    }),
    gender: z.enum(['male', 'female']),
    phoneNumber: z.string({
        required_error: 'Preenchimento obrigatório',
    }),
    documentNumber: z.string({
        required_error: 'Preenchimento obrigatório',
    }),
})
