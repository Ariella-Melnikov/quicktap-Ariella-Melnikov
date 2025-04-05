import { Button } from '@mui/material'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    onClick?: () => void
}

const SecondaryButton = ({ children, onClick }: Props) => {
    return (
        <StyledSecondaryButton variant='outlined' onClick={onClick}>
            {children}
        </StyledSecondaryButton>
    )
}

export default SecondaryButton

const StyledSecondaryButton = styled(Button)`
    background-color: ${({ theme }) => theme.baseTheme.colors.white};
    color: ${({ theme }) => theme.baseTheme.colors.primary};
    border: 1px solid ${({ theme }) => theme.baseTheme.colors.primary};
    border-radius: ${({ theme }) => theme.baseTheme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.baseTheme.shadows.dropButton};

    padding: ${({ theme }) => `${theme.baseTheme.spacingValues.sm} ${theme.baseTheme.spacingValues.md}`};

    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.base};
    font-weight: ${({ theme }) => theme.baseTheme.fontWeights.medium};
    line-height: ${({ theme }) => theme.baseTheme.lineHeights.sm};
    text-transform: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.baseTheme.shadows.dropsoft};

    &:hover {
        background-color: ${({ theme }) => theme.baseTheme.colors.white};
        opacity: 0.9;
    }
`
