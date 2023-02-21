import { styled } from 'stitches.config'

export const Container = styled('div', {
    flex: 1,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '$10 $14',

    h2: {
        marginBottom: '$4',
        color: '$primary9',
    },
})

export const Item = styled('div', {
    display: 'flex',
    color: '$grey1',
    borderTop: '1px solid $opac2',
    paddingTop: '$8',
    paddingBottom: '$10',
})

export const Details = styled('div', {
    width: '63%',

    span: {
        fontSize: '$5',
        fontWeight: 600,
        color: '$grey1',
    },

    p: {
        marginTop: '$2',
        marginBottom: '$4',
        fontWeight: 300,

        color: '$grey7',
        fontSize: '$3m',
    },
})

export const QuantityContainer = styled('div', {
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    span: {
        marginTop: '$2',
        color: '$grey7',
        fontSize: '$3',
    },
})

export const PriceContainer = styled('div', {
    marginLeft: 'auto',
    fontSize: '$7',
})

export const TicketRow = styled('div', {
    width: '100%',
    paddingTop: '$8',
    paddingBottom: '$10',
    borderTop: '1px solid $opac2',

    '.shippingFeePrice': {
        fontSize: '$6',
    },
})

export const Row = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',

    '> button': {
        fontSize: '$4m',
    },
})

export const TicketRowPrice = styled('div', {
    minWidth: '166px',

    span: {
        fontSize: '$7',
        display: 'block',
        textAlign: 'end',
    },
})

export const ShippingFee = styled('span', {
    fontSize: '$4m',
})

export const Total = styled('span', {
    fontSize: '$6m',
})

export const Footer = styled('footer', {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
})
