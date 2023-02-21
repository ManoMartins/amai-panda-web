import { styled } from 'stitches.config'

export const Container = styled('section', {
    backgroundColor: '$grey14',
    width: '344px',
    maxWidth: '344px',
    marginLeft: '$12',
    marginRight: 'auto',
    px: '$12',
    paddingTop: '$12',

    h2: {
        fontSize: '$4',
        color: '$grey1',
        marginTop: '$5',
        fontWeight: 500,
        paddingBottom: '$2',
        borderBottom: '1px solid $opac2',
    },
})

export const Overview = styled('div', {
    py: '$3',

    'div:last-child': {
        marginTop: '$3',
        paddingTop: '$5',
        wborderTop: '1px solid $opac2',
        fontWeight: 400,
        fontSize: '$4m',

        p: {
            fontWeight: 400,
        },
    },
})

export const OverviewRow = styled('div', {
    padding: '$1',
    color: '$grey1',
    display: 'flex',
    justifyContent: 'space-between',

    p: {
        fontWeight: 300,
    },
})
