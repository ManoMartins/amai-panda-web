import { styled } from 'stitches.config'

export const Container = styled('section', {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '$6 0',

    a: {
        textDecoration: 'none',
    },
})

export const Title = styled('h1', {
    fontSize: '$4m',
    fontWeight: 500,

    margin: '$4 0 $4',
})

export const Content = styled('section', {
    borderRadius: 4,
    marginTop: '$4',

    '> div + div': {
        marginTop: '$4',
    },
})

export const Item = styled('div', {
    background: '$white1',

    '> div': {
        display: 'flex',
        marginTop: '$2',
        marginBottom: '$2',
        padding: '$5 $6 $8',
    },
})

export const Header = styled('header', {
    padding: '$5 $6 $4',
    borderBottom: '1px solid $opac2',
    display: 'flex',
    justifyContent: 'space-between',
})

export const Detail = styled('div', {
    display: 'flex',
    marginBottom: '$6',

    p: {
        color: '$grey7',
        fontSize: '$3m',
    },
})

export const Data = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    marginLeft: '$5',

    span: {
        color: '$grey7',
    },
})

export const Status = styled('span', {
    fontSize: '$3m',
    fontWeight: 600,
    marginBottom: '$2',
})

export const Description = styled('span')

export const Quantity = styled('span', {
    fontSize: '$3',
    color: '$grey7',
    fontWeight: 300,
    marginTop: '$1',
})

export const Actions = styled('div', {
    flex: 1,
    marginLeft: 'auto',
    maxWidth: '160px',

    button: {
        justifyContent: 'center',
        width: '100%',
    },

    'button + button': {
        marginTop: '$2',
    },
})
