import { styled } from 'stitches.config'

export const Label = styled('label', {
    padding: '$5',
    borderRadius: '0.2rem',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$white1',

    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$grey14',
    },

    input: {
        marginRight: '$3',
    },
})
