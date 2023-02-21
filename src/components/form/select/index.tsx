import { FieldError } from 'react-hook-form'
import {
    forwardRef,
    ForwardRefRenderFunction,
    SelectHTMLAttributes,
} from 'react'

import * as S from './styles'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    name: string
    isOptional?: boolean
    error?: FieldError
    options: Array<{
        value: string | number
        label: string
    }>
}

const BaseSelect: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
    { name, error, label, options, isOptional, ...rest },
    ref
) => {
    return (
        <S.Container>
            <S.Label htmlFor={name}>
                {label} {isOptional && '(optional)'}
            </S.Label>
            <S.Select id={name} name={name} ref={ref} {...rest}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </S.Select>
            {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Container>
    )
}

const Select = forwardRef(BaseSelect)

export { Select }
