import styled from 'styled-components';
import { Container, Box, TextField } from '@mui/material';

export const StyledContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;

margin-top: 100px;
gap: ${({ theme }) => theme.baseTheme.spacingValues.xxxl};
`;

export const SigninBox = styled(Box)`
  width: 472px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.baseTheme.spacingValues.lg};

  background-color: ${({ theme }) => theme.baseTheme.colors.white};
  border-radius: ${({ theme }) => theme.baseTheme.borderRadius.lg};
  padding: ${({ theme }) => theme.baseTheme.spacingValues.lg};
  box-shadow: ${({ theme }) => theme.baseTheme.shadows.drop};
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.baseTheme.spacingValues.sm};
`;

export const StyledTextField = styled(TextField)`
  width: 280px;
  height: 28px;

  background-color: ${({ theme }) => theme.baseTheme.colors.white};
  border-radius: ${({ theme }) => theme.baseTheme.borderRadius.sm};

  input {
    padding: ${({ theme }) => `${theme.baseTheme.spacingValues.xs} ${theme.baseTheme.spacingValues.md}`};
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.sm};
    color: ${({ theme }) => theme.baseTheme.colors.gray};
    font-style: italic;
    line-height: ${({ theme }) => theme.baseTheme.lineHeights.sm};
  }

  // Outline styles
  .MuiOutlinedInput-root {
    border-radius: ${({ theme }) => theme.baseTheme.borderRadius.md};
    
    // Normal (default)
    fieldset {
      border: 1px solid ${({ theme }) => theme.baseTheme.colors.gray};
    }

    // Focused
    &:hover fieldset,
    &.Mui-focused fieldset {
      border: 1px solid ${({ theme }) => theme.baseTheme.colors.gray};
    }
  }
`;