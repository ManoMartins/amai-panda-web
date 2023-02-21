import { ChangeEvent, useCallback, useState } from 'react'

import * as S from '@/components/payment-checkbox/styles'
import { formatCurrency } from '@/utils/format-currency'
import { parseCent2Real } from '@/utils/parse-cent-2-real'

export interface Props {
    name?: string
    label: string
    value: string | number
    isChecked?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    paymentValue?: number
    onPaymentChange?: (
        paymentId: string,
        event: ChangeEvent<HTMLInputElement>
    ) => void
}

export function PaymentCheckbox({
    name,
    value,
    label,
    onChange,
    isChecked,
    paymentValue,
    onPaymentChange,
}: Props) {
    const [pValue, setPValue] = useState(
        String(parseCent2Real(paymentValue || 0))
    )

    const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        setPValue(value)
    }, [])

    if (!name) {
        throw new Error('Name is required')
    }

    return (
        <S.Label>
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            {label}

            {onPaymentChange && (
                <S.PaymentValueContainer>
                    R$
                    <input
                        data-test="input-payment-value"
                        max={20}
                        value={pValue}
                        disabled={!isChecked}
                        onChange={handleOnChange}
                        onBlur={(e) => onPaymentChange(String(value), e)}
                    />
                </S.PaymentValueContainer>
            )}
        </S.Label>
    )
}
