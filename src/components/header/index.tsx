import { useRouter } from 'next/navigation'
import { CiShoppingCart } from 'react-icons/ci'

import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'

import { useIsLogged, useUser } from '@/features/auth/stores/auth'
import { useCheckoutFormatters } from '@/features/checkout/stores/checkout'

import * as S from './styles'

export function Header() {
    const router = useRouter()

    const user = useUser()
    const isLogged = useIsLogged()
    const { amountProducts } = useCheckoutFormatters()

    return (
        <S.Container>
            <S.Content>
                <S.Logo onClick={() => router.push('/')}>AMAI PANDA</S.Logo>

                <S.Actions>
                    <IconButton
                        data-test="shopping-cart"
                        icon={CiShoppingCart}
                        color="secondary"
                        badgeNumber={
                            amountProducts > 0 ? amountProducts : undefined
                        }
                        onClick={() => router.push('/checkout/cart')}
                    />

                    {isLogged && user ? (
                        <Button
                            data-test="profile"
                            title={`Olá, ${user.name}`}
                            onClick={() => router.push('/account')}
                        />
                    ) : (
                        <>
                            <Button
                                title="Entrar"
                                color="secondary"
                                onClick={() => router.push('/sign-in')}
                            />
                            <Button
                                title="Cadastrar-se"
                                onClick={() => router.push('/sign-up')}
                            />
                        </>
                    )}
                </S.Actions>
            </S.Content>
        </S.Container>
    )
}
