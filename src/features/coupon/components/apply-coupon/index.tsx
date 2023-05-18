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

    const coupons = useCoupons()
    const { addCoupon, removeCoupon } = useCheckoutActions()

    const onSubmit = useCallback(
        async (input: InputForm) => {
            try {
                const data = await queryClient.fetchQuery(
                    ['coupon', input.voucherCode],
                    () => findByVoucherCodeCoupon(input)
                )

                const couponModel = new CouponModel()
                Object.assign(couponModel, data)

                if (couponModel.status === 'USED') {
                    throw new Error(
                        'Cupom já utilizado, tente utilizar outro código de voucher'
                    )
                }

                addCoupon(couponModel)
            } catch (e: any) {
                alert(e.message)
            }
        },
        [addCoupon]
    )

    return (
        <S.Container onSubmit={handleSubmit(onSubmit)}>
            <S.Title>Coupons</S.Title>
            <S.SubTitle>
                Cada produto pode ter apenas um cupom aplicado.
            </S.SubTitle>

            <Text
                placeholder="Inserir código do cupom"
                error={errors.voucherCode}
                {...register('voucherCode')}
            />

            <Button title="Aplicar" />

            {coupons.length > 0 &&
                coupons.map((coupon) => (
                    <S.ListCoupons>
                        <S.ItemCoupon>
                            <span>
                                {coupon.voucherCode} -{' '}
                                {formatCurrency(coupon.amount)}
                            </span>

                            <S.ActionCoupon>
                                <div style={{ marginTop: -20, marginRight: 8 }}>
                                    <Button
                                        title="Remover"
                                        color="link"
                                        onClick={() => removeCoupon(coupon.id)}
                                    />
                                </div>

                                <S.Badge color="new">
                                    {coupon.getStatus()}
                                </S.Badge>
                            </S.ActionCoupon>
                        </S.ItemCoupon>
                    </S.ListCoupons>
                ))}
        </S.Container>
    )
}
