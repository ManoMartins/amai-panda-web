import { styled } from 'stitches.config'

export const Container = styled('div', {
    'div + div': {
        marginTop: '$4',
    },

    button: {
        marginTop: '$4',
    },
})

export const Title = styled('h1', {
    fontSize: '$4m',
    fontWeight: 500,

    margin: '$4 0 $1',
})

export const SubTitle = styled('h2', {
    fontSize: '$3',
    fontWeight: 300,

    marginBottom: '$4',
})
