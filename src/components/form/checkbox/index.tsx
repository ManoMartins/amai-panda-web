import * as S from './styles'
import {
    forwardRef,
    ForwardRefRenderFunction,
    InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    error?: FieldError
}

const BaseCheckbox: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    { label, name, error, ...rest },
    ref
) => {
    return (
        <S.Container>
            <S.Checkbox
                id={name}
                ref={ref}
                name={name}
                type={'checkbox'}
                {...rest}
            />
            <S.Label htmlFor={name}>{label}</S.Label>
            {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Container>
    )
}

const Checkbox = forwardRef(BaseCheckbox)

export { Checkbox }
