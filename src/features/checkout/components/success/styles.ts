import { styled } from 'stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '$12',

    button: {
        marginTop: '$24',
    },
})

export const Title = styled('h1', {
    marginTop: '$10',
    marginBottom: '$20',
    color: '$grey1',
    fontSize: '$15',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
})

export const Subtitle = styled('p', {
    fontSize: '$5',
    color: '$grey1',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
})
