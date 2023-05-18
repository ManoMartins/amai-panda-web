import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/button'
import { Checkbox, Text } from '@/components/form'

import * as S from './styles'
import { schema } from './schema'
import { useCreateAddress } from '@/features/address/mutations/use-create-address'

interface InputForm {
    zipCode: string
    state: string
    city: string
    neighborhood: string
    street: string
    number: string
    complement: string
    isMain: boolean
}

export function CreateAddress() {
    const router = useRouter()
    const params = useSearchParams()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>({
        resolver: zodResolver(schema),
    })

    const createAddress = useCreateAddress()

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                await createAddress.mutateAsync(input)

                const redirectTo = params.get('redirectTo')

                if (redirectTo) {
                    router.push(redirectTo)
                } else {
                    router.back()
                }
            } catch (err) {
                console.log(err)
            }
        },
        [createAddress]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Adicione um endereço</S.Title>

            <S.Form>
                <Text
                    label="CEP"
                    error={errors.zipCode}
                    {...register('zipCode')}
                />
                <Text
                    label="Estado"
                    error={errors.state}
                    {...register('state')}
                />
                <Text
                    label="Cidade"
                    error={errors.city}
                    {...register('city')}
                />
                <Text
                    label="Bairro"
                    error={errors.neighborhood}
                    {...register('neighborhood')}
                />
                <Text
                    label="Rua/Avenida"
                    error={errors.street}
                    {...register('street')}
                />
                <Text
                    label="Número"
                    error={errors.number}
                    {...register('number')}
                />
                <Text
                    label="Complemento"
                    error={errors.complement}
                    isOptional
                    {...register('complement')}
                />
                <Checkbox
                    label="Utilizar como endereço principal"
                    error={errors.isMain}
                    {...register('isMain')}
                />
            </S.Form>

            <Button title="Salvar" />
        </S.Container>
    )
}
