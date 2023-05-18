interface Props {
    id: string

    subTotalInCents: number

    totalInCents: number

    status:
        | 'WAITING_PAYMENT'
        | 'PREPARING'
        | 'IN_TRANSIT'
        | 'DELIVERED'
        | 'EXCHANGE_REQUEST'
        | 'EXCHANGE_RECEIVED'
        | 'ACCEPT_EXCHANGE_REQUEST'
        | 'DENY_EXCHANGE_REQUEST'

    payments: string

    deliveredFee: number

    couponId: string

    addressId: string

    address: string

    userId: string

    user: string

    createdAt: Date

    updatedAt: Date
}

export class OrderModel {
    id: string

    subTotalInCents: number

    totalInCents: number

    status:
        | 'WAITING_PAYMENT'
        | 'PREPARING'
        | 'IN_TRANSIT'
        | 'DELIVERED'
        | 'EXCHANGE_REQUEST'
        | 'EXCHANGE_RECEIVED'
        | 'ACCEPT_EXCHANGE_REQUEST'
        | 'DENY_EXCHANGE_REQUEST'

    payments: string

    deliveredFee: number

    couponId: string

    addressId: string

    address: string

    userId: string

    user: string

    createdAt: Date

    updatedAt: Date

    constructor({
        id,
        subTotalInCents,
        totalInCents,
        status,
        payments,
        deliveredFee,
        couponId,
        addressId,
        address,
        userId,
        user,
        createdAt,
        updatedAt,
    }: Props) {
        this.id = id
        this.subTotalInCents = subTotalInCents
        this.totalInCents = totalInCents
        this.status = status
        this.payments = payments
        this.deliveredFee = deliveredFee
        this.couponId = couponId
        this.addressId = addressId
        this.address = address
        this.userId = userId
        this.user = user
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    getStatus() {
        const statusTranslate = {
            WAITING_PAYMENT: 'Aguardando pagamento',
            PREPARING: 'Preparando',
            IN_TRANSIT: 'Em trânsito',
            DELIVERED: 'Entregue',
            EXCHANGE_REQUEST: 'Troca solicitada',
            EXCHANGE_RECEIVED: 'Troca realizada',
            ACCEPT_EXCHANGE_REQUEST: 'Troca aceita',
            DENY_EXCHANGE_REQUEST: 'Troca negada',
        }

        return statusTranslate[this.status || 'WAITING_PAYMENT']
    }
}
