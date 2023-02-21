import * as S from './styles'
import { ChangeEvent, useRef } from 'react'

export interface RadioButtonProps {
    name?: string
    label: string
    value: string | number
    defaultValue?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function RadioButton({
    name,
    value,
    label,
    onChange,
    defaultValue,
}: RadioButtonProps) {
    if (!name) {
        throw new Error('Name is required')
    }

    return (
        <S.Label>
            <input
                type={'radio'}
                name={name}
                value={value}
                onChange={onChange}
                checked={defaultValue === value}
            />
            {label}
        </S.Label>
    )
}
