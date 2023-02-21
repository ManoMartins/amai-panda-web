export class CouponModel {
    id: string
    status: 'NEW' | 'USED'
    voucherCode: string
    userId: string
    amount: number
    createdAt: Date
    updatedAt: Date

    getStatus() {
        const status = {
            NEW: 'Novo',
            USED: 'Usado',
        }

        return status[this.status]
    }
}
