import { Text } from '@/components/form'
import { Button } from '@/components/button'

import * as S from './styles'

export function ShowCreditCard() {
    return (
        <S.Container>
            <S.Title>Informações do meu cartão</S.Title>

            <S.Form>
                <Text name={'cardLastNumber'} label={'Número do cartão'} />
                <Text name={'cardHolder'} label={'Titular do cartão'} />
                <Text name={'cardExpirationDate'} label={'Data de expiração'} />
                <Text name={'cardSecurityCode'} label={'Código de segurança'} />
                <Text name={'cardIdentification'} label={'CPF do titular'} />
            </S.Form>

            <Button title={'Salvar'} />
        </S.Container>
    )
}
