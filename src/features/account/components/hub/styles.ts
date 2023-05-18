import { styled } from 'stitches.config'
import Link from 'next/link'

export const Container = styled('ul', {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '$6 0',

    'li + li': {
        borderTop: '1px solid $opac2',
    },
})

export const Title = styled('h1', {
    fontSize: '$4m',
    fontWeight: 500,
    color: '$grey1',
    margin: '$4 0 $4',
})

export const Content = styled('section', {
    backgroundColor: '$white1',
    borderRadius: 4,
    marginTop: '$4',

    'a + a': {
        borderTop: '1px solid $grey14',
    },
})

export const Item = styled(Link, {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: '$5 $8 $5',

    div: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export const Thumbnail = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '56px',
    height: '56px',
    background: '$grey15',
    borderRadius: '50%',
    marginRight: '$4',
})

export const Detail = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h3: {
        fontSize: '$4m',
        fontWeight: 400,
        marginBottom: '$1m',
    },

    span: {
        fontSize: '$4',
        fontWeight: 300,
        color: '$grey7',
    },
})

export const Logout = styled('button', {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    background: '$white1',
    border: 'none',
    padding: '$5 $8 $5',
    borderTop: '1px solid $grey14',
    color: '$error',
    fontSize: '$4',
    fontWeight: '500',

    '&:hover': {
        filter: 'brightness(0.98)',
        cursor: 'pointer',
    },
})
