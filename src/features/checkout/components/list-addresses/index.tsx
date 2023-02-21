import { RadioButton } from '@/components/radio-button'
import { RadioButtonGroup } from '@/components/radio-button-group'
import { useListAddress } from '@/features/address/queries/use-list-address'
import { ChangeEvent, useCallback } from 'react'
import {
    useAddress,
    useCheckoutActions,
} from '@/features/checkout/stores/checkout'

export function ListAddresses() {
    const listAddresses = useListAddress()

    const addressId = useAddress()
    const { addAddress } = useCheckoutActions()

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            addAddress(e.target.value)
        },
        [addAddress]
    )

    return (
        <RadioButtonGroup
            title={'Meus endereços'}
            name={'addressId'}
            defaultValue={addressId}
            onChange={handleChange}
        >
            {listAddresses.data?.map((address) => (
                <RadioButton
                    key={address.id}
                    label={`${address.street}`}
                    value={address.id}
                />
            ))}
        </RadioButtonGroup>
    )
}
