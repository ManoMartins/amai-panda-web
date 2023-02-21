'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'

import { Resume } from '@/features/checkout/components/resume'
import { ListAddresses } from '@/features/checkout/components/list-addresses'

import * as S from '@/styles/checkout.style'

export default function AddressPage() {
    const router = useRouter()

    const handleSubmit = useCallback(() => {
        router.push('/checkout/credit-card')
    }, [router])

    return (
        <S.Container>
            <S.CartContent>
                <ListAddresses />

                <S.CartFooter>
                    <Button title={'Continuar'} onClick={handleSubmit} />
                </S.CartFooter>
            </S.CartContent>

            <Resume />
        </S.Container>
    )
}
