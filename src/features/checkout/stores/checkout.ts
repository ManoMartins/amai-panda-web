import { create } from 'zustand'
import { ProductModel } from '@/models/product.model'
import { CouponModel } from '@/models/coupon.model'

interface Checkout {
    addressId?: string
    payments: Array<{
        paymentId: string
        totalInCents: number
    }>
    orderItems: Array<{
        product: ProductModel
        quantity: number
    }>
    voucherCode?: CouponModel

    formatters: () => {
        amountProducts: number
        shippingFeePrice: number
        totalPriceInCents: number
        totalPaymentPriceInCents: number
    }

    actions: {
        addVoucherCode: (voucherCode: CouponModel) => void
        removeVoucherCode: () => void
        addAddress: (addressId: string) => void
        addPayment: (paymentId: string, totalInCents: number) => void
        removePayment: (paymentId: string) => void
        updatePayment: (paymentId: string, totalInCents: number) => void
        addOrderItem: (product: ProductModel, quantity: number) => void
        removeOrderItem: (productId: string) => void
        updateOrderItem: (productId: string, quantity: number) => void
    }
}

const useCheckoutStore = create<Checkout>((set, get) => {
    return {
        addressId: undefined,
        voucherCode: undefined,
        payments: [],
        orderItems: [],

        formatters: () => ({
            shippingFeePrice: 500,
            totalPaymentPriceInCents: get().payments.reduce(
                (acc, cur) => acc + cur.totalInCents,
                0
            ),
            totalPriceInCents: get().orderItems.reduce(
                (acc, cur) => acc + cur.product.priceInCents * cur.quantity,
                0
            ),
            amountProducts: get().orderItems.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            ),
        }),

        actions: {
            addVoucherCode: (voucherCode) => {
                set(() => {
                    return { voucherCode }
                })
            },
            removeVoucherCode: () => {
                set(() => {
                    return { voucherCode: undefined }
                })
            },
            addAddress: (addressId) => {
                set(() => {
                    return { addressId }
                })
            },
            addPayment: (paymentId, totalInCents) => {
                set((state) => {
                    return {
                        payments: [
                            ...state.payments,
                            { paymentId, totalInCents },
                        ],
                    }
                })
            },
            removePayment: (paymentId) => {
                set((state) => {
                    return {
                        payments: state.payments.filter(
                            (payment) => payment.paymentId !== paymentId
                        ),
                    }
                })
            },
            updatePayment: (paymentId, totalInCents) => {
                set((state) => {
                    const newPayments = state.payments.map((payment) => {
                        if (payment.paymentId === paymentId) {
                            return {
                                ...payment,
                                totalInCents,
                            }
                        }

                        return {
                            ...payment,
                        }
                    })

                    return {
                        payments: newPayments,
                    }
                })
            },
            addOrderItem: (product, quantity) => {
                set((state) => {
                    const alreadyAdded = state.orderItems.find(
                        (orderItem) => orderItem.product.id === product.id
                    )

                    if (alreadyAdded) {
                        const newOrderItems = state.orderItems.map(
                            (orderItem) => {
                                if (orderItem.product.id === product.id) {
                                    return {
                                        ...orderItem,
                                        quantity: orderItem.quantity + 1,
                                    }
                                }

                                return {
                                    ...orderItem,
                                }
                            }
                        )

                        return {
                            orderItems: newOrderItems,
                        }
                    }

                    return {
                        orderItems: [
                            ...state.orderItems,
                            { product, quantity },
                        ],
                    }
                })
            },
            removeOrderItem: (productId) => {
                set((state) => {
                    return {
                        orderItems: state.orderItems.filter(
                            (orderItem) => orderItem.product.id !== productId
                        ),
                    }
                })
            },
            updateOrderItem: (productId, quantity) => {
                set((state) => {
                    const newOrderItems = state.orderItems.map((orderItem) => {
                        if (orderItem.product.id === productId) {
                            return {
                                ...orderItem,
                                quantity,
                            }
                        }

                        return {
                            ...orderItem,
                        }
                    })

                    return {
                        orderItems: newOrderItems,
                    }
                })
            },
        },
    }
})

const useCoupons = () => useCheckoutStore((state) => state.voucherCode)

const useAddress = () => useCheckoutStore((state) => state.addressId)

const usePayment = () => useCheckoutStore((state) => state.payments)

const useOrderItem = () => useCheckoutStore((state) => state.orderItems)

const useCheckoutActions = () => useCheckoutStore((state) => state.actions)

const useCheckoutFormatters = () =>
    useCheckoutStore((state) => state.formatters())

export {
    useAddress,
    useCoupons,
    usePayment,
    useOrderItem,
    useCheckoutActions,
    useCheckoutFormatters,
}
