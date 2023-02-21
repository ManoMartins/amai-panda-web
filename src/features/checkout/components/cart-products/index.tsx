import { RadioButtonGroup } from '@/components/radio-button-group'
import { RadioButton } from '@/components/radio-button'

export function CartProducts() {
    return (
        <RadioButtonGroup title={'Seu carrinho'} name={'credit-card'}>
            <RadioButton label={'.... 1234'} value={'a'} />
            <RadioButton label={'.... 1234'} value={'b'} />
            <RadioButton label={'.... 1234'} value={'c'} />
            <RadioButton label={'.... 1234'} value={'d'} />
            <RadioButton label={'.... 1234'} value={'e'} />
        </RadioButtonGroup>
    )
}
