import { styled } from 'stitches.config'

export const Container = styled('form', {
    margin: '0 auto',
    maxWidth: '760px',

    py: '$6',

    button: {
        marginTop: '20px',
    },
})

export const Title = styled('h1', {
    fontSize: '$4m',
    fontWeight: 500,

    margin: '$4 0 $4',
})

export const Form = styled('div', {
    padding: '$8',
    borderRadius: 4,
    background: '$white1',

    'div + div': {
        marginTop: '$6',
    },
})
