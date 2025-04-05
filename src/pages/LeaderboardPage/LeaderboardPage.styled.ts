import styled from 'styled-components';
import { Box, Table, TableCell, TableRow, TableContainer } from '@mui/material';

export const LeaderboardWrapper = styled(Box)`
  padding-top: ${({ theme }) => theme.baseTheme.spacingValues.xxl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.baseTheme.spacingValues.xxl};
  overflow: hidden;
`;

export const StyledTableContainer = styled(TableContainer)`
  max-width: 1000px;
  border-radius: ${({ theme }) => theme.baseTheme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.baseTheme.shadows.dropTable};
  border: 1px solid ${({ theme }) => theme.baseTheme.colors.pinkSecondary};
  background-color: ${({ theme }) => theme.baseTheme.colors.white};
  overflow: auto;
`;

export const StyledTable = styled(Table)`
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;

export const HeaderCell = styled(TableCell)`
  font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
  font-size: ${({ theme }) => theme.baseTheme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.baseTheme.fontWeights.semiBold};
  color: ${({ theme }) => theme.baseTheme.colors.primary};
  text-align: center;
  vertical-align: middle;
  padding: ${({ theme }) => theme.baseTheme.spacingValues.sm};
  border-right: 1px solid ${({ theme }) => theme.baseTheme.colors.gray3};
  border-bottom: 1px solid ${({ theme }) => theme.baseTheme.colors.gray3};
  background-color: ${({ theme }) => theme.baseTheme.colors.pinkBackground};

  &:last-of-type {
    border-right: none;
  }
`;

export const BodyRow = styled(TableRow)<{ isTop?: boolean; isLast?: boolean }>`
  & td {
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.xl};
    font-weight: ${({ theme, isTop }) =>
      isTop ? theme.baseTheme.fontWeights.semiBold : theme.baseTheme.fontWeights.medium};
    color: ${({ theme, isTop }) =>
      isTop ? theme.baseTheme.colors.info.green : theme.baseTheme.colors.primary};
    text-align: center;
    vertical-align: middle;
    width: 33.33%;
    padding: ${({ theme }) => theme.baseTheme.spacingValues.sm};
    border-right: 1px solid ${({ theme }) => theme.baseTheme.colors.gray3};
    border-bottom: ${({ theme, isLast }) =>
      isLast ? 'none' : `1px solid ${theme.baseTheme.colors.gray3}`};

    &:last-of-type {
      border-right: none;
    }
  }
`;

export const BodyCell = styled(TableCell)``;

export const CrownWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.baseTheme.spacingValues.xs};
`;
