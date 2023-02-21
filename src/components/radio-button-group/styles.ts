import { styled } from 'stitches.config'

export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontSize: '$5',
        marginBottom: '$10',
        fontWeight: 600,
        color: '$grey1',
    },

    ul: {
        listStyle: 'none',

        'li + li': {
            marginTop: '$3',
        },
    },
})
