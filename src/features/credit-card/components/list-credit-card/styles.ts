import { styled } from 'stitches.config'
import Link from 'next/link'

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
    background: '$white1',
    borderRadius: 4,
    marginTop: '$4',

    '> div + div': {
        borderTop: '1px solid $grey14',
    },
})

export const Item = styled('div', {
    padding: '$5 $6 $8',
})

export const CardNumber = styled('h2', {
    fontWeight: 400,
    fontSize: '$4',
    color: '$grey1',
})

export const Detail = styled('div', {
    display: 'flex',
    marginTop: '$2',
    marginBottom: '$2',

    p: {
        color: '$grey7',
        fontSize: '$3m',
    },
})

export const Footer = styled('footer', {
    padding: '$5 $6',
    borderTop: '1px solid $grey14',
    background: '$white1',

    '&:hover': {
        filter: 'brightness(0.99)',
    },
})
