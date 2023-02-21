import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

import { styled } from 'stitches.config'

export const Container = styled('nav', {
    height: '$14',
    background: '$white1',
})

export const Content = styled('div', {
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 $5',
})

export const Logo = styled('h2', {
    fontFamily: montserrat.style.fontFamily,
    fontSize: '$4',
    color: '$primary8',

    '&:hover': {
        cursor: 'pointer',
    },
})

export const Actions = styled('div', {
    display: 'flex',

    '* + *': {
        marginLeft: '8px',
    },
})
