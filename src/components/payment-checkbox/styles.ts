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

export const PaymentValueContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
    fontSize: '$3',
    paddingLeft: '$1',
    borderRadius: '0.25rem',
    borderColor: '$opac3',
    marginLeft: 'auto',
    width: '80px',
    height: '$7',
    color: '$grey7',
    fontWeight: '500',

    input: {
        width: '100%',
        border: 'none',
        outline: 'none',
        paddingLeft: '$2',
        marginRight: '0',
        color: '$grey7',
        background: 'transparent',
    },
})
