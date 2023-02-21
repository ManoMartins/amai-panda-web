import * as z from 'zod'

export const schema = z.object({
    email: z
        .string({
            required_error: 'Preenchimento obrigatório',
        })
        .email(),
    password: z.string({
        required_error: 'Preenchimento obrigatório',
    }),
})
