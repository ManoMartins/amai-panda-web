import { styled } from 'stitches.config'
import { getClientStyleLoader } from 'next/dist/build/webpack/config/blocks/css/loaders/client'

export const Container = styled('div', {
    '.container': {
        '&:hover': {
            position: 'relative',
            backgroundColor: '$primary8',

            '&:before &:after': {
                content: '',
                display: 'block',
                backgroundColor: '$primary8',
                width: '8px',
                height: '8px',
                position: 'absolute',
                transition: 'all .15s ease',
            },

            '&:before': {
                top: '0',
                left: '0',
                transformOrigin: 'top left',
                transform: 'rotate(-45deg) scale(0)',
            },

            '&:after': {
                right: '0',
                bottom: '0',
                transformOrigin: 'bottom right',
                transform: 'rotate(45deg) scale(0)',
            },

            '.content': {
                transform: 'translate(0, 0)',
                transition: 'all .15s ease',
                position: 'relative',
                zIndex: '10',
            },

            '&:hover .content': {
                transform: 'translate(8px, -4px)',
            },

            '&:hover:before': {
                transform: 'rotate(-45deg) scale(1)',
            },

            '&:hover:after': {
                transform: 'rotate(45deg) scale(1)',
            },
        },
    },
})

export const Content = styled('div')

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '$3',
})

export const Title = styled('h3', {
    fontSize: '$4',
    margin: '0',
    color: '$grey1',
    marginRight: '$3',
})

export const Description = styled('span', {
    fontSize: '$3',
    my: '$2',
})

export const Price = styled('h2', {
    margin: '0',
    fontSize: '$6',
    color: '$primary8',
})

export const InfoFooter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '$3',
})
