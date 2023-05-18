import { ChangeEvent, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { RadioButton } from '@/components/radio-button'
import { RadioButtonGroup } from '@/components/radio-button-group'
import { useListAddress } from '@/features/address/queries/use-list-address'
import {
    useAddress,
    useCheckoutActions,
} from '@/features/checkout/stores/checkout'

export function ListAddresses() {
    const router = useRouter()
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
            title="Meus endereços"
            name="addressId"
            defaultValue={addressId}
            onChange={handleChange}
            onAdd={() =>
                router.push(
                    '/account/address/create?redirectTo=/checkout/address'
                )
            }
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
