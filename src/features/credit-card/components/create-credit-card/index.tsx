import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import { Text } from '@/components/form'
import { Button } from '@/components/button'

import * as S from './styles'
import { useCreateCreditCard } from '@/features/credit-card/mutations/use-create-credit-card'

interface InputForm {
    cardLastNumber: string
    cardHolder: string
    cardExpirationDate: string
    cardSecurityCode: string
    cardIdentification: string
}

export function CreateCreditCard() {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>()

    const createCreditCard = useCreateCreditCard()

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                await createCreditCard.mutateAsync({
                    ...input,
                    cardBrand: 'VISA',
                })
                router.back()
            } catch (e) {
                console.log(e)
            }
        },
        [createCreditCard]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Adicione um novo cartão</S.Title>

            <S.Form>
                <Text
                    label="Número do cartão"
                    error={errors.cardLastNumber}
                    {...register('cardLastNumber')}
                />

                <Text
                    label="Titular do cartão"
                    error={errors.cardHolder}
                    {...register('cardHolder')}
                />

                <Text
                    label="Data de expiração"
                    error={errors.cardExpirationDate}
                    {...register('cardExpirationDate')}
                />

                <Text
                    label="Código de segurança"
                    error={errors.cardSecurityCode}
                    {...register('cardSecurityCode')}
                />

                <Text
                    label="CPF do titular"
                    error={errors.cardIdentification}
                    {...register('cardIdentification')}
                />
            </S.Form>

            <Button title="Salvar" type="submit" />
        </S.Container>
    )
}
