import { ProductModel } from '@/models/product.model'

import { ItemProduct } from '@/features/home/components/item-product'
import {
    List,
    Container,
    Title,
} from '@/features/home/components/list-products/styles'

interface ListProductsProps {
    products?: ProductModel[]
}

export function ListProducts({ products }: ListProductsProps) {
    return (
        <Container>
            <Title>
                <span>Todos os produtos</span>{' '}
                <span>que recomendamos para você</span>
            </Title>

            {products && products.length > 0 && (
                <List>
                    {products.map((product) => (
                        <ItemProduct key={product.id} product={product} />
                    ))}
                </List>
            )}
        </Container>
    )
}
