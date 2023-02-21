import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Button } from '@/components/button'

import * as S from './styles'
import { useFindAllOrder } from '@/features/order/queries/use-find-all-order'
import { useModal } from '@/components/modal/useModal'
import { Modal } from '@/components/modal'
import { RequestExchangeOrders } from '@/features/order/components/request-exchange-orders'

export function ListOrders() {
    const { isOpen, onOpen, onClose } = useModal()
    const { data } = useFindAllOrder()

    const [orderId, setOrderId] = useState<string | null>(null)

    return (
        <S.Container>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                {orderId && (
                    <RequestExchangeOrders
                        orderId={orderId}
                        onClose={onClose}
                    />
                )}
            </Modal>

            <S.Title>Compras</S.Title>

            <S.Content>
                {data?.map((order) => (
                    <S.Item key={order.id}>
                        <S.Header>
                            <span>
                                {dayjs(order.createdAt).format('DD/MM/YYYY')}
                            </span>
                            <S.Status>{order.status}</S.Status>
                        </S.Header>

                        <div>
                            <div>
                                {order.orderItems.map((orderItem) => (
                                    <S.Detail key={orderItem.id}>
                                        <p>imagem</p>

                                        <S.Data>
                                            <S.Description>
                                                {orderItem.product.name}
                                            </S.Description>
                                            <S.Quantity>
                                                {orderItem.quantity} unidade
                                                {orderItem.quantity > 1 && 's'}
                                            </S.Quantity>
                                        </S.Data>
                                    </S.Detail>
                                ))}
                            </div>

                            <S.Actions>
                                <Button
                                    disabled={order.status !== 'DELIVERED'}
                                    title="Solicitar trocar"
                                    onClick={() => {
                                        onOpen()
                                        setOrderId(order.id)
                                    }}
                                />
                                <Button
                                    title="Comprar novamente"
                                    color="secondary"
                                />
                            </S.Actions>
                        </div>
                    </S.Item>
                ))}
            </S.Content>
        </S.Container>
    )
}
