import { styled } from 'stitches.config'

export const Container = styled('div', {
    minHeight: '100vh',
    backgroundColor: '$grey15',
})

export const Content = styled('div', {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 $5',
    height: 'calc(100% - $14)',
})
