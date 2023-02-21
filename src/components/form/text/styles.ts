import { styled } from 'stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const Label = styled('label', {
    fontSize: '$3',
    fontWeight: 400,
    color: '$grey1',
    marginBottom: '$1',
    marginLeft: '$2',
})

export const Text = styled('input', {
    border: '1px solid $grey14',
    borderRadius: '0.5rem',
    height: '$10',
    px: '$4',
})

export const ErrorMessage = styled('span', {
    color: '$error',
    fontWeight: 600,
    fontSize: '$3',
    marginLeft: '$2',
    marginTop: '$2',
})
