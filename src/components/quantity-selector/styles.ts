import { styled } from 'stitches.config'

export const Container = styled('form', {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.2rem',
    border: '1px solid $opac2',
    px: '$3',
    py: '$2',
    width: 'fit-content',

    'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        // display: 'none',
        '-webkit-appearance': 'none',
        margin: 0 /* <-- Apparently some margin are still there even though it's hidden */,
    },

    'input[type=number]': {
        '-moz-appearance': 'textfield' /* Firefox */,
        textAlign: 'center',
        fontSize: '$4',

        '&:focus': {
            outline: 'none',
        },
    },

    input: {
        width: '74px',
        border: 'none',
        backgroundColor: 'transparent',
    },

    button: {
        width: '12px',
        height: '100%',
        border: 'none',
        fontSize: '$6',
        color: '$primary8',
        backgroundColor: 'transparent',

        '&:hover': {
            cursor: 'pointer',
        },
    },
})
