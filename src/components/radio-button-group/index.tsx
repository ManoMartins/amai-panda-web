import { ChangeEvent, Children, cloneElement, isValidElement } from 'react'

import * as S from './styles'
import { Button } from '@/components/button'

interface RadioButtonGroupProps {
    title: string
    name: string
    children: React.ReactNode
    defaultValue?: string | number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onAdd?: () => void
}

export function RadioButtonGroup({
    name,
    title,
    children,
    onChange,
    defaultValue,
    onAdd,
}: RadioButtonGroupProps) {
    const arrayChildren = Children.toArray(children)

    return (
        <S.Container>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}
            >
                <h2>{title}</h2>
                {onAdd && <Button title="Adicionar" onClick={onAdd} />}
            </div>

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
