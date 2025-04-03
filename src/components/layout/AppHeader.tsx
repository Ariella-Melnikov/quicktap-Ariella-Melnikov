import styled from 'styled-components';

const AppHeader = () => {
  return (
    <StyledHeader>
      <LogoText>mavens Game</LogoText>
    </StyledHeader>
  );
};

export default AppHeader;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.baseTheme.colors.primary};
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // ✅ Drop shadow
`;

const LogoText = styled.div`
  font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.baseTheme.colors.white};
  text-align: center;
`;
