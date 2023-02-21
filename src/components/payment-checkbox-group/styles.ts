import { styled } from 'stitches.config'

export const Container = styled('li', {
    display: 'flex',
    flexDirection: 'column',

    'label + label': {
        marginTop: '$3',
    },

    h2: {
        fontSize: '$5',
        marginBottom: '$10',
        fontWeight: 600,
        color: '$grey1',
    },
})
