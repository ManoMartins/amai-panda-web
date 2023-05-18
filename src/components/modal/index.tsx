import { ReactNode } from 'react'
import ReactModal, { Props as ReactModelProps } from 'react-modal'

import { Button } from '@/components/button'

import * as S from './styles'

interface Props extends ReactModelProps {
    children: ReactNode
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export function Modal({ children, onRequestClose, ...rest }: Props) {
    return (
        <ReactModal
            style={customStyles}
            onRequestClose={onRequestClose}
            {...rest}
        >
            <S.Container>
                <Button
                    data-test="close-modal"
                    title="x"
                    color="secondary"
                    onClick={onRequestClose}
                />
            </S.Container>
            {children}
        </ReactModal>
    )
}
