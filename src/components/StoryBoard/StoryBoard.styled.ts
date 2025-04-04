import styled from 'styled-components'
import { Box } from '@mui/material'

export const StoryBoardContainer = styled(Box)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 170px 440px;
    margin: ${({ theme }) =>
        `${theme.baseTheme.customSpacing.storyboardMarginY} ${theme.baseTheme.customSpacing.storyboardMarginX}`};
    background-color: ${({ theme }) => theme.baseTheme.colors.white};
    border: 1px solid #bcbdbb;
    border-radius: ${({ theme }) => theme.baseTheme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.baseTheme.shadows.dropsoft};
    position: relative;
    display: flex;
    flex-direction: column;
`

export const Header = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    padding: 0 ${({ theme }) => theme.baseTheme.spacingValues.lg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bcbdbb;
    box-shadow: ${({ theme }) => theme.baseTheme.shadows.dropheader};
    z-index: 1;
`

export const PlayerName = styled.span`
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.baseTheme.fontWeights.semiBold};
    line-height: ${({ theme }) => theme.baseTheme.lineHeights.base};
    color: ${({ theme }) => theme.baseTheme.colors.primary};
`

export const PlayerScore = styled.span`
    font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
    font-size: ${({ theme }) => theme.baseTheme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.baseTheme.fontWeights.semiBold};
    line-height: ${({ theme }) => theme.baseTheme.lineHeights.base};
    color: ${({ theme }) => theme.baseTheme.colors.pinkSecondary};
`

export const Content = styled(Box)`
    flex-grow: 1;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const EndGameButton = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.baseTheme.spacingValues.sm2};
  right: ${({ theme }) => theme.baseTheme.spacingValues.sm2};
  z-index: 9;
`;
