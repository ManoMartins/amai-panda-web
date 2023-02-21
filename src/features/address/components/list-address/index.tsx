import Link from 'next/link'
import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Stack } from '@/components/stack'
import { Button } from '@/components/button'
import { useListAddress } from '@/features/address/queries/use-list-address'
import { useDeleteAddress } from '@/features/address/mutations/use-delete-address'

import * as S from './styles'

export function ListAddress() {
    const router = useRouter()
    const pathname = usePathname()

    const listAddresses = useListAddress()
    const deleteAddress = useDeleteAddress()

    const handleDelete = useCallback(
        async (id: string) => {
            try {
                await deleteAddress.mutateAsync({ addressId: id })
            } catch (e) {
                console.log(e)
            }
        },
        [deleteAddress]
    )

    const handleShow = useCallback(
        (id: string) => {
            router.push(`${pathname}/${id}`)
        },
        [router, pathname]
    )

    return (
        <S.Container>
            <S.Title>Endereços</S.Title>

            <S.Content>
                {listAddresses.data?.map((address) => (
                    <S.Item key={address.id}>
                        <S.Street>
                            {address.street} {address.number}
                        </S.Street>

                        <S.Detail>
                            <p>
                                CEP {address.zipCode} - {address.state} -{' '}
                                {address.city}
                            </p>
                        </S.Detail>

                        <Stack>
                            <Button
                                title={'Excluir'}
                                color={'link'}
                                onClick={() => handleDelete(address.id)}
                            />
                            <div>-</div>
                            <Button
                                title={'Editar'}
                                color={'link'}
                                onClick={() => handleShow(address.id)}
                            />
                        </Stack>
                    </S.Item>
                ))}

                <Link href={'/account/address/create'}>
                    <S.Footer>Adicionar endereço</S.Footer>
                </Link>
            </S.Content>
        </S.Container>
    )
}
