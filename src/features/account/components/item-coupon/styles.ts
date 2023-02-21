import { styled } from 'stitches.config'

export const Container = styled('div', {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '$6 0',
})

export const Content = styled('div', {
    '> h1': {
        fontSize: '$4m',
        fontWeight: 500,
        color: '$grey1',
        margin: '$4 0 $4',
    },
})

export const Item = styled('div', {
    backgroundColor: '$white1',
    borderRadius: '0.4rem',
})

export const Top = styled('div', {
    padding: '$4 $6 $2',
})

export const Title = styled('h3', {
    fontSize: '$4m',
    fontWeight: 600,
    color: '$grey1',
    marginBottom: '$1',
})

export const SubTitle = styled('span', {
    display: 'block',
    fontSize: '$3',
    color: '$grey7',
})

export const DieCut = styled('div', {
    width: '100%',
    height: '20px',
    margin: 0,
    position: 'relative',

    '&::after': {
        content: '',
        borderBottom: '1px dashed $opac3',
        left: '16px',
        position: 'absolute',
        right: '16px',
        top: '30%',
        zIndex: 1,
    },

    div: {
        '&::before': {
            content: '',
            borderBottomRightRadius: '32px',
            borderTopRightRadius: '32px',
            left: 0,
        },

        '&::after': {
            content: '',
            borderBottomLeftRadius: '32px',
            borderTopLeftRadius: '32px',
            right: -1,
            overflow: 'hidden',
        },

        '&::before, &::after': {
            background: '$grey15',
            bottom: 0,
            content: '',
            display: 'block',
            height: '16px',
            width: '8px',
            top: -2,
            position: 'absolute',
            overflow: 'hidden',
        },
    },
})

export const Bottom = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 $6 $2',
})

export const DueDate = styled('span', {
    fontSize: '$3',
    color: '$grey7',
})
