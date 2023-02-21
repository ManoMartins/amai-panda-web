import { styled } from 'stitches.config'

export const Container = styled('form', {
    py: '$6',
    margin: '0 auto',
    maxWidth: '512px',

    button: {
        marginTop: '$4',
    },
})

export const Form = styled('section', {
    'div + div': {
        marginTop: '$4',
    },
})
