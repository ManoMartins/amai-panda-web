'use client'

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import dynamic from 'next/dynamic'
import { Text } from '@/components/form'
import { Stack } from '@/components/stack'
import { Button } from '@/components/button'
import { useSignIn } from '@/features/auth/mutations/use-sign-in'

import { schema } from './schema'

import * as S from './styles'
import { useAuthActions } from '../../stores/auth'

// const { useAuthActions } = dynamic(
//  () => import('@/features/auth/stores/auth'),
// { ssr: false }
// ) as any

interface InputForm {
    email: string
    password: string
}

export function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>({
        resolver: zodResolver(schema),
    })
    const params = useSearchParams()
    const router = useRouter()
    const signIn = useSignIn()
    const { login } = useAuthActions()

    const handleSignUp = useCallback(() => {
        router.push('/sign-up')
    }, [router])

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                const response = await signIn.mutateAsync(input)

                login({
                    user: response.data.user,
                    token: response.data.token,
                })

                const redirectTo = params.get('redirectTo')

                if (redirectTo) {
                    router.push(redirectTo)
                } else {
                    router.push('/')
                }
            } catch (e) {
                console.log(e)
            }
        },
        [login, signIn, router, params]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Form>
                <Text
                    label="Usuário"
                    error={errors.email}
                    {...register('email')}
                />
                <Text
                    label="Senha"
                    error={errors.password}
                    type="password"
                    {...register('password')}
                />
            </S.Form>

            <Stack>
                <Button
                    title="Criar conta"
                    color="secondary"
                    type="button"
                    onClick={handleSignUp}
                />
                <Button data-test="sign-in" title="Entrar" type="submit" />
            </Stack>
        </S.Container>
    )
}
