import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Text, Select } from '@/components/form'
import { Stack } from '@/components/stack'
import { Button } from '@/components/button'
import { useSignUp } from '@/features/auth/mutations/use-sign-up'

import { schema } from './schema'

import * as S from './styles'

interface InputForm {
    name: string
    email: string
    password: string
    gender: string
    phoneNumber: string
    documentNumber: string
}

export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>({
        resolver: zodResolver(schema),
    })
    const signUp = useSignUp()
    const router = useRouter()

    const handleBack = useCallback(() => {
        router.back()
    }, [router])

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                await signUp.mutateAsync(input)
                router.back()
            } catch (e) {
                console.log(e)
            }
        },
        [router, signUp]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Form>
                <Text
                    label="Nome completo"
                    error={errors.name}
                    {...register('name')}
                />
                <Text
                    label="Email"
                    error={errors.email}
                    {...register('email')}
                />
                <Text
                    label="Senha"
                    error={errors.password}
                    {...register('password')}
                />
                <Select
                    label="Gênero"
                    options={[
                        { value: 'male', label: 'Masculino' },
                        { value: 'female', label: 'Feminino' },
                    ]}
                    error={errors.gender}
                    {...register('gender')}
                />
                <Text
                    label="Número de telefone"
                    error={errors.phoneNumber}
                    {...register('phoneNumber')}
                />
                <Text
                    label="CPF"
                    error={errors.documentNumber}
                    {...register('documentNumber')}
                />
            </S.Form>

            <Stack>
                <Button
                    title="Voltar"
                    color="secondary"
                    type="button"
                    onClick={handleBack}
                />
                <Button title="Criar conta" type="submit" />
            </Stack>
        </S.Container>
    )
}
