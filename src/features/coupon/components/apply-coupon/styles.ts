import { styled } from 'stitches.config'

export const Container = styled('form', {
    margin: '0 auto',
    width: '760px',
    maxWidth: '760px',

    py: '$6',

    button: {
        marginTop: '20px',
    },
})

export const Title = styled('h1', {
    fontSize: '$4m',
    fontWeight: 500,

    margin: '$4 0 $1',
})

export const SubTitle = styled('h2', {
    fontSize: '$3',
    fontWeight: 300,

    marginBottom: '$4',
})

export const Form = styled('div', {
    padding: '$8',
    borderRadius: 4,
    background: '$white1',

    'div + div': {
        marginTop: '$6',
    },
})

export const ListCoupons = styled('ul', {
    marginTop: '$3',
})

export const ItemCoupon = styled('li', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const Badge = styled('span', {
    variants: {
        color: {
            new: {
                fontSize: '$3m',
                color: '$white1',
                padding: '$1 $2',
                background: 'green',
                borderRadius: '0.4rem',
            },
        },
    },
})

export const ActionCoupon = styled('div', {
    display: 'flex',
    alignItems: 'center',
})
