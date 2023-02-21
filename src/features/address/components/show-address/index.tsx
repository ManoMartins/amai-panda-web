import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Stack } from '@/components/stack'
import { Button } from '@/components/button'
import { Checkbox, Text } from '@/components/form'

import { useUpdateAddress } from '@/features/address/mutations/use-update-address'

import { AddressModel } from '@/models/address.model'

import * as S from './styles'

interface InputForm {
    zipCode: string
    state: string
    city: string
    neighborhood: string
    street: string
    number: string
    complement?: string
    isMain: boolean
}

interface Props {
    id: string
    data: AddressModel
}

export function ShowAddress({ data }: Props) {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>({
        defaultValues: data,
    })

    const updateAddress = useUpdateAddress()

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                await updateAddress.mutateAsync({
                    ...input,
                    addressId: data.id,
                })
            } catch (err) {
                console.log(err)
            }
        },
        [data.id, updateAddress]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Informações do endereço</S.Title>

            <S.Form>
                <Text label={'CEP'} {...register('zipCode')} />
                <Text label={'Estado'} {...register('state')} />
                <Text label={'Cidade'} {...register('city')} />
                <Text label={'Bairro'} {...register('neighborhood')} />
                <Text label={'Rua/Avenida'} {...register('street')} />
                <Text label={'Número'} {...register('number')} />
                <Text
                    label={'Complemento'}
                    isOptional
                    {...register('complement')}
                />
                <Checkbox
                    label={'Utilizar como endereço principal'}
                    {...register('isMain')}
                />
            </S.Form>

            <Stack>
                <Button title={'Voltar'} onClick={() => router.back()} />

                <Button title={'Salvar'} />
            </Stack>
        </S.Container>
    )
}
