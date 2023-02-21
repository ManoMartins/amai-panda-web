import * as S from './styles'

interface Props {
    amount: number
    onPlus: () => void
    onRemove: () => void
    onChange?: (quantity: number) => void
}

export function QuantitySelector({
    amount,
    onPlus,
    onRemove,
    onChange,
}: Props) {
    return (
        <S.Container>
            <button type={'button'} onClick={onRemove}>
                -
            </button>

            <input
                type={'number'}
                value={amount}
                disabled={!onChange}
                onChange={(e) =>
                    onChange ? onChange(+e.target.value) : undefined
                }
            />

            <button type={'button'} onClick={onPlus}>
                +
            </button>
        </S.Container>
    )
}
