import styled from 'styled-components'
interface Props {
  children: string
  color?: 'red' | 'primary'
}

const PageTitle = ({ children, color = 'primary' }: Props) => {
    return <StyledTitle $color={color}>{children}</StyledTitle>
  }

export default PageTitle

const StyledTitle = styled.h1<{ $color: 'red' | 'primary' }>`
  font-size: ${({ theme }) => theme.baseTheme.fontSizes.xxxl};
  font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
  font-weight: ${({ theme }) => theme.baseTheme.fontWeights.bold};
  color: ${({ $color, theme }) =>
    $color === 'red' ? theme.baseTheme.colors.info.red : theme.baseTheme.colors.primary};
  text-align: center;
  margin: 0;
`
