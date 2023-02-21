import * as S from './styles'
import {
    forwardRef,
    ForwardRefRenderFunction,
    InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name: string
    isOptional?: boolean
    error?: FieldError
}

const BaseText: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    { name, error, label, isOptional = false, ...rest },
    ref
) => {
    return (
        <S.Container>
            <S.Label htmlFor={name}>
                {label} {isOptional && '(optional)'}
            </S.Label>
            <S.Text id={name} name={name} ref={ref} {...rest} />
            {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
        </S.Container>
    )
}

const Text = forwardRef(BaseText)

export { Text }
