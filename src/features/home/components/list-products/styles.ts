import { styled } from 'stitches.config'

export const Container = styled('section', {
    padding: '0 $5',
    maxWidth: '1440px',
    margin: '0 auto',
})

export const Title = styled('h2', {
    fontSize: '$5',
    marginBottom: '$3',
    fontWeight: '600',

    ':nth-child(1)': {
        fontSize: '$5',
        color: '$primary8',
    },
})

export const List = styled('li', {
    display: 'grid',
    gap: '$8 $3',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
})
