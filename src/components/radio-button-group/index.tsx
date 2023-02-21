import { ChangeEvent, Children, cloneElement, isValidElement } from 'react'

import * as S from './styles'

interface RadioButtonGroupProps {
    title: string
    name: string
    children: React.ReactNode
    defaultValue?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export function RadioButtonGroup({
    name,
    title,
    children,
    onChange,
    defaultValue,
}: RadioButtonGroupProps) {
    const arrayChildren = Children.toArray(children)

    return (
        <S.Container>
            <h2>{title}</h2>

            <ul data-test={name}>
                {Children.map(arrayChildren, (child) => (
                    <li key={Math.random()}>
                        {isValidElement(child)
                            ? cloneElement(child as any, {
                                  name,
                                  onChange,
                                  defaultValue,
                              })
                            : child}
                    </li>
                ))}
            </ul>
        </S.Container>
    )
}
