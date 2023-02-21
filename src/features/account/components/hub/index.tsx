import { HiOutlineChevronRight } from 'react-icons/hi'
import {
    CiBag1,
    CiCreditCard2,
    CiLocationOn,
    CiShoppingTag,
} from 'react-icons/ci'

import * as S from './styles'

export function Hub() {
    return (
        <S.Container>
            <S.Title>Configurações</S.Title>

            <S.Content>
                <S.Item href={'/account/order'}>
                    <div>
                        <S.Thumbnail>
                            <CiBag1 size={32} />
                        </S.Thumbnail>
                        <S.Detail>
                            <h3>Meus pedidos</h3>
                            <span>Cancele ou solicite a troca de pedidos.</span>
                        </S.Detail>
                    </div>

                    <HiOutlineChevronRight />
                </S.Item>

                <S.Item href={'/account/credit-card'}>
                    <div>
                        <S.Thumbnail>
                            <CiCreditCard2 size={32} />
                        </S.Thumbnail>
                        <S.Detail>
                            <h3>Meus cartões</h3>
                            <span>Gerencie seus cartões.</span>
                        </S.Detail>
                    </div>

                    <HiOutlineChevronRight />
                </S.Item>

                <S.Item href={'/account/address'}>
                    <div>
                        <S.Thumbnail>
                            <CiLocationOn size={32} />
                        </S.Thumbnail>
                        <S.Detail>
                            <h3>Endereços</h3>
                            <span>
                                Altere seus endereços ou adicione outro.
                            </span>
                        </S.Detail>
                    </div>

                    <HiOutlineChevronRight />
                </S.Item>

                <S.Item href={'/account/coupon'}>
                    <div>
                        <S.Thumbnail>
                            <CiShoppingTag size={32} />
                        </S.Thumbnail>
                        <S.Detail>
                            <h3>Cupons</h3>
                            <span>
                                Gerencie seus cupons de troca e de troco.
                            </span>
                        </S.Detail>
                    </div>

                    <HiOutlineChevronRight />
                </S.Item>
            </S.Content>
        </S.Container>
    )
}
