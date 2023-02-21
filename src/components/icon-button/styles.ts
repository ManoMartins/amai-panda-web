import { styled } from 'stitches.config'

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    border: 'transparent',
    borderRadius: '0.4rem',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',

    variants: {
        color: {
            primary: {
                background: '$primary9',
                color: '$white1',

                '&:hover': {
                    background: '$primary8',
                },
            },
            secondary: {
                background: '$opac1',
                color: 'grey1',

                '&:hover': {
                    background: '$opac2',
                },
            },
            link: {
                background: 'none',
                color: '$primary9',
                px: '0',

                '&:hover': {
                    color: '$primary8',
                },
            },
        },
        size: {
            md: {
                height: '$7m',
                px: '$2',
            },
        },
    },

    defaultVariants: {
        color: 'primary',
        size: 'md',
    },
})

export const BadgeNumber = styled('span', {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$error',
    fontSize: '$3',
    margin: '0',
    height: '8px',
    padding: '6px',
    borderRadius: '9999999px',
    marginLeft: '4px',
    color: '$white1',

    position: 'absolute',
    top: -8,
    right: -8,
})
