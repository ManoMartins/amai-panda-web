'use client'

import { ShowAddress } from '@/features/address/components/show-address'
import { useShowAddress } from '@/features/address/queries/use-show-address'

interface Props {
    params: {
        id: string
    }
}

export default function ShowAddressPage({ params }: Props) {
    const { data } = useShowAddress({ addressId: params.id })

    if (!data) return null

    return (
        <ShowAddress
            id={data.id}
            data={{
                id: data.id,
                city: data.city,
                isMain: data.isMain,
                complement: data.complement,
                neighborhood: data.neighborhood,
                state: data.state,
                number: data.number,
                street: data.street,
                zipCode: data.zipCode,
            }}
        />
    )
}
