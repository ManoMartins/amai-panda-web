import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Text } from '@/components/form'
import { Button } from '@/components/button'

import {
    useCheckoutActions,
    useCoupons,
} from '@/features/checkout/stores/checkout'

import { schema } from './schema'

import * as S from './styles'
import {
    findByVoucherCodeCoupon,
    useFindByVoucherCodeCoupon,
} from '@/features/coupon/queries/use-find-by-voucher-code-coupon'
import { queryClient } from '@/services/query-client'
import { CouponModel } from '@/models/coupon.model'
import { formatCurrency } from '@/utils/format-currency'

interface InputForm {
    voucherCode: string
}

export function ApplyCoupon() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputForm>({
        resolver: zodResolver(schema),
    })

    const coupon = useCoupons()
    const { addVoucherCode } = useCheckoutActions()

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                const data = await queryClient.fetchQuery(
                    ['coupon', input.voucherCode],
                    () => findByVoucherCodeCoupon(input)
                )

                const couponModel = new CouponModel()

                addVoucherCode(Object.assign(couponModel, data))
            } catch (e) {
                console.log(e)
            }
        },
        [addVoucherCode]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Coupons</S.Title>
            <S.SubTitle>
                Cada produto pode ter apenas um cupom aplicado.
            </S.SubTitle>

            <Text
                placeholder={'Inserir código do cupom'}
                error={errors.voucherCode}
                {...register('voucherCode')}
            />

            <Button title={'Aplicar'} />

            {coupon && (
                <S.ListCoupons>
                    <S.ItemCoupon>
                        <span>
                            {coupon.voucherCode} -{' '}
                            {formatCurrency(coupon.amount)}
                        </span>

                        <S.Badge color={'new'}>{coupon.getStatus()}</S.Badge>
                    </S.ItemCoupon>
                </S.ListCoupons>
            )}
        </S.Container>
    )
}
