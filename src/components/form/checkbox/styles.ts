import { styled } from 'stitches.config'

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
})

export const Checkbox = styled('input')

export const Label = styled('label', {
    marginLeft: '$2',
    fontSize: '$3m',
})

export const ErrorMessage = styled('span', {
    color: '$error',
    fontWeight: 600,
    fontSize: '$3',
    marginLeft: '$2',
    marginTop: '$2',
})
