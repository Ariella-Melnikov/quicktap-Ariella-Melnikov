import styled from 'styled-components';
import { Typography } from '@mui/material';

const TextLabel = styled(Typography)`
  font-size: ${({ theme }) => theme.baseTheme.fontSizes.base};
  font-weight: ${({ theme }) => theme.baseTheme.fontWeights.regular};
  line-height: ${({ theme }) => theme.baseTheme.lineHeights.base};
  color: ${({ theme }) => theme.baseTheme.colors.primary};
  margin-bottom: 0;
  text-align: center;
  display: flex;
  align-items: center;
  height: 22px;
  font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
`;

export default TextLabel;
