'use client'

import { ListProducts } from '@/features/home/components/list-products'
import { ProductModel } from '@/models/product.model'

import * as S from './home.style'
import { useListProducts } from '@/features/home/queries/use-list-products'

export default function Home() {
    const listProducts = useListProducts()

    return (
        <S.Container>
            <ListProducts products={listProducts.data} />
        </S.Container>
    )
}
