import Link from 'next/link'
import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import * as S from './styles'
import { Stack } from '@/components/stack'
import { Button } from '@/components/button'
import { useListCreditCard } from '@/features/credit-card/queries/use-list-credit-card'
import { useDeleteCreditCard } from '@/features/credit-card/mutations/use-delete-credit-card'

export function ListCreditCard() {
    const router = useRouter()
    const pathname = usePathname()

    const deleteCreditCard = useDeleteCreditCard()
    const listCreditCard = useListCreditCard()

    const handleDelete = useCallback(
        async (id: string) => {
            try {
                await deleteCreditCard.mutateAsync({ creditCardId: id })
            } catch (e) {
                console.log(e)
            }
        },
        [deleteCreditCard]
    )

    return (
        <S.Container>
            <S.Title>Meus cartões</S.Title>

            <S.Content>
                {listCreditCard.data?.map((creditCard) => (
                    <S.Item key={creditCard.id}>
                        <S.CardNumber>
                            **** **** **** {creditCard.cardLastNumber}
                        </S.CardNumber>

                        <S.Detail>
                            <p>{creditCard.cardHolder}</p>
                        </S.Detail>

                        <Stack>
                            <Button
                                title="Excluir"
                                color="link"
                                onClick={() => handleDelete(creditCard.id)}
                            />
                        </Stack>
                    </S.Item>
                ))}

                <Link href="/account/credit-card/create">
                    <S.Footer>Adicionar cartão</S.Footer>
                </Link>
            </S.Content>
        </S.Container>
    )
}
