import Image from 'next/image'

import { Button } from '@/components/button'
import { ProductModel } from '@/models/product.model'
import { formatCurrency } from '@/utils/format-currency'

import * as S from './styles'
import { useCallback } from 'react'
import { useCheckoutActions } from '@/features/checkout/stores/checkout'

interface ItemProductProps {
    product: ProductModel
}

export function ItemProduct({ product }: ItemProductProps) {
    const { addOrderItem } = useCheckoutActions()

    const handleAddOrderItem = useCallback(() => {
        addOrderItem(product, 1)
    }, [product, addOrderItem])

    return (
        <S.Container>
            <div className={'container'}>
                <S.Content className={'content'}>
                    <Image
                        layout="responsive"
                        width={102}
                        height={172}
                        src={product.imageUrl}
                        alt={product.name}
                    />
                </S.Content>
            </div>

            <S.Info>
                <S.Title>{product.name}</S.Title>

                <S.Description>{product.flavor}</S.Description>

                <S.InfoFooter>
                    <S.Price>{formatCurrency(product.priceInCents)}</S.Price>

                    <Button title={'Adicionar'} onClick={handleAddOrderItem} />
                </S.InfoFooter>
            </S.Info>
        </S.Container>
    )
}
