export class ProductModel {
    id: string
    name: string
    priceInCents: number
    status: 'ENABLED' | 'DISABLED'
    description: string
    flavor: string
    quantity: number
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}
