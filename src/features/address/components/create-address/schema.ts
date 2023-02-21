import { z } from 'zod'

export const schema = z.object({
    zipCode: z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    isMain: z.boolean(),
})
