import { styled } from 'stitches.config'

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',

    '* + *': {
        marginLeft: '$2',
    },
})
