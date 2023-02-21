import { useCallback, useState } from 'react'
import { useFindByIdOrder } from '@/features/order/queries/use-find-by-id-order'
import { Text } from '@/components/form'

import * as S from './styles'
import { Button } from '@/components/button'
import { Stack } from '@/components/stack'
import { useRequestExchangeOrder } from '@/features/order/mutations/use-request-exchange-order'

interface Props {
    orderId: string
    onClose: () => void
}

export function RequestExchangeOrders({ orderId, onClose }: Props) {
    const { data, isLoading } = useFindByIdOrder({ id: orderId })
    const requestExchange = useRequestExchangeOrder()

    const [orderItems, setOrderItems] = useState<any[]>([])

    const handleRequestExchange = useCallback(async () => {
        try {
            await requestExchange.mutateAsync({ id: orderId, orderItems })
            onClose()
        } catch (error) {
            console.log(error)
        }
    }, [requestExchange, orderId, orderItems])

    const handleChange = useCallback(
        (id: string, value: number) => {
            const draft = [...orderItems]

            const orderItemIndex = draft.findIndex(
                (orderItem) => orderItem.productId === id
            )

            if (orderItemIndex !== -1) {
                draft[orderItemIndex].quantity = value
            } else {
                draft.push({ productId: id, quantity: value })
            }

            setOrderItems(draft)
        },
        [orderItems]
    )

    if (isLoading) {
        return <span>Carregando...</span>
    }

    if (!data) return null

    return (
        <S.Container>
            <S.Title>Solicitar trocas</S.Title>
            <S.SubTitle>
                Solicite os itens e a quantidade que deseja trocar e iremos
                vericar se é possível realizar a troca.
            </S.SubTitle>

            {data.orderItems.map((orderItem) => (
                <Text
                    key={orderItem.id}
                    min={0}
                    max={orderItem.quantity}
                    type="number"
                    name="quantity"
                    placeholder="Quantidade"
                    label={`${orderItem.product.name} - ${orderItem.product.flavor}`}
                    onChange={(e) =>
                        handleChange(orderItem.productId, +e.target.value)
                    }
                />
            ))}

            <Stack>
                <Button title="Fechar" color="secondary" onClick={onClose} />
                <Button
                    data-test="request_exchange_submit"
                    title="Solicitar troca"
                    onClick={handleRequestExchange}
                />
            </Stack>
        </S.Container>
    )
}
