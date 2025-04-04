import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    onClick?: () => void
}

const PrimaryButton = ({ children, onClick }: Props) => {
    return (
        <StyledButton variant='contained' onClick={onClick} startIcon={<SendIcon />}>
            {children}
        </StyledButton>
    )
}

export default PrimaryButton

const StyledButton = styled(Button)`
    background-color: ${({ theme }) => theme.baseTheme.colors.primary};
    color: ${({ theme }) => theme.baseTheme.colors.white};
    box-shadow: ${({ theme }) => theme.baseTheme.shadows.drop};
    border-radius: ${({ theme }) => theme.baseTheme.borderRadius.md};
    min-height: 36px;
    min-width: 144px;

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

    &:hover {
        background-color: ${({ theme }) => theme.baseTheme.colors.primary};
        opacity: 0.9;
    }

    svg {
        font-size: ${({ theme }) => theme.baseTheme.fontSizes.lg};
    }
`