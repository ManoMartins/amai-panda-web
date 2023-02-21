import {
    ChangeEvent,
    Children,
    cloneElement,
    isValidElement,
    ReactElement,
} from 'react'

import { Props } from '@/components/payment-checkbox'

import * as S from './styles'

interface PaymentCheckboxGroupProps {
    title: string
    name: string
    children: React.ReactNode
    defaultValue?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function PaymentCheckboxGroup({
    name,
    title,
    children,
    onChange,
    defaultValue,
}: PaymentCheckboxGroupProps) {
    const arrayChildren = Children.toArray(children)

    return (
        <S.Container>
            <h2>{title}</h2>

            {Children.map(arrayChildren, (child) => {
                if (!isValidElement(child)) {
                    return child
                }

                const paymentCheckbox = child as ReactElement<Props>

                return cloneElement(paymentCheckbox, {
                    key: Math.random(),
                    name,
                    onChange,
                    defaultValue,
                })
            })}
        </S.Container>
    )
}
