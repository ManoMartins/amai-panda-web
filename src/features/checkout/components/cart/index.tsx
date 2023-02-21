import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Modal } from '@/components/modal'
import { Button } from '@/components/button'
import { QuantitySelector } from '@/components/quantity-selector'

import { formatCurrency } from '@/utils/format-currency'

import { ApplyCoupon } from '@/features/coupon/components/apply-coupon'
import {
    useCheckoutActions,
    useCheckoutFormatters,
    useOrderItem,
} from '@/features/checkout/stores/checkout'

import * as S from './styles'
import { useModal } from '@/components/modal/useModal'

export function Cart() {
    const router = useRouter()

    const { isOpen, onOpen, onClose } = useModal()

    const orderItems = useOrderItem()
    const { updateOrderItem } = useCheckoutActions()
    const { totalPriceInCents, shippingFeePrice } = useCheckoutFormatters()

    const handlePlus = useCallback(
        (productId: string, oldQuantity: number) => {
            updateOrderItem(productId, oldQuantity + 1)
        },
        [updateOrderItem]
    )

    const handleRemove = useCallback(
        (productId: string, oldQuantity: number) => {
            updateOrderItem(productId, oldQuantity - 1)
        },
        [updateOrderItem]
    )

    const handleChange = useCallback(
        (productId: string, quantity: number) => {
            updateOrderItem(productId, quantity)
        },
        [updateOrderItem]
    )

    const handleSubmit = useCallback(() => {
        router.push('/checkout/address')
    }, [router])

    return (
        <S.Container>
            <Modal isOpen={isOpen} onRequestClose={onClose}>
                <ApplyCoupon />
            </Modal>

            <h2>Seu carrinho</h2>

            {orderItems.map((orderItem) => (
                <S.Item key={orderItem.product.id}>
                    <S.Details>
                        <span>{orderItem.product.name}</span>

                        <p>{orderItem.product.flavor}</p>
                    </S.Details>

                    <S.QuantityContainer>
                        <QuantitySelector
                            amount={orderItem.quantity}
                            onPlus={() =>
                                handlePlus(
                                    orderItem.product.id,
                                    orderItem.quantity
                                )
                            }
                            onRemove={() =>
                                handleRemove(
                                    orderItem.product.id,
                                    orderItem.quantity
                                )
                            }
                            onChange={(quantity) =>
                                handleChange(orderItem.product.id, quantity)
                            }
                        />

                        <span>{orderItem.product.quantity} disponíveis</span>
                    </S.QuantityContainer>

                    <S.PriceContainer>
                        <S.TicketRowPrice>
                            <span>
                                {formatCurrency(
                                    orderItem.product.priceInCents *
                                        orderItem.quantity
                                )}
                            </span>
                        </S.TicketRowPrice>
                    </S.PriceContainer>
                </S.Item>
            ))}

            <S.Footer>
                <S.TicketRow>
                    <S.Row>
                        <S.ShippingFee>Frete</S.ShippingFee>
                        <S.TicketRowPrice>
                            <span className={'shippingFeePrice'}>
                                {formatCurrency(shippingFeePrice)}
                            </span>
                        </S.TicketRowPrice>
                    </S.Row>

                    <S.Row>
                        <Button
                            title={'Inserir código do cupom'}
                            color={'link'}
                            onClick={onOpen}
                        />

                        <S.TicketRowPrice />
                    </S.Row>
                </S.TicketRow>

                <S.TicketRow>
                    <S.Row>
                        <S.Total>Total com frete</S.Total>
                        <S.TicketRowPrice>
                            <span>
                                {formatCurrency(
                                    totalPriceInCents + shippingFeePrice
                                )}
                            </span>
                        </S.TicketRowPrice>
                    </S.Row>
                </S.TicketRow>

                <Button title={'Continuar a compra'} onClick={handleSubmit} />
            </S.Footer>
        </S.Container>
    )
}
