import styled from 'styled-components'

interface Props {
    children: string
}

const PageTitle = ({ children }: Props) => {
    return <StyledTitle>{children}</StyledTitle>
}

export default PageTitle

const StyledTitle = styled.h1`
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.xxxl};
    color: ${({ theme }) => theme.baseTheme.colors.primary};
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-weight: 600;
    text-align: center;
    width: auto; 
    margin: 0 auto; 
    display: inline-block; 
`
