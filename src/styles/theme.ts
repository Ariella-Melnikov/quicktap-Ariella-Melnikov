import { createTheme, Theme } from '@mui/material/styles';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

export const baseTheme = {
  colors: {
    primary: '#212721',
    pinkSecondary: '#EA3784',
    pinkBackground: '#FFE0EE',
    white: '#fafafa',
    gray: '#969894',
    gray3: '#D8D8D8',
    info: {
      red: '#F04747',
      green: '#30A66D',
    },
  },
  spacingValues: {
    xs: '4px',
    sm: '8px',
    sm2: '10px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
  },
  fontSizes: {
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
    xxxl: '36px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fonts: {
    primary: `'Montserrat', sans-serif`,
  },
  lineHeights: {
    sm: '18px',
    base: '22px',
    lg: '28px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  customSpacing: {
    storyboardMarginX: '35px',
    storyboardMarginY: '30px',
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
  },
  shadows: {
    drop: '0px 5px 16px 0px rgba(12, 12, 12, 0.3)', 
    droplight: '0px 4px 14px 0px rgba(33, 39, 33, 0.14)',
    dropsoft: '0px 0px 50px 1px rgba(0, 0, 0, 0.1)',
    dropheader: '0px 5px 16px 0 rgba(0, 0, 0, 0.1)',
    dropButton:'0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    dropTable: '0px 0px 14px 0px rgba(232, 232, 232, 1)',
  },
} as const;

export const muiTheme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: baseTheme.fonts.primary,
  },
  palette: {
    primary: { main: baseTheme.colors.primary },
    secondary: { main: baseTheme.colors.pinkSecondary },
    background: {
      default: baseTheme.colors.white,
      paper: baseTheme.colors.pinkBackground,
    },
    info: { main: baseTheme.colors.info.red },
    success: { main: baseTheme.colors.info.green },
  },
}) as Theme & { baseTheme: typeof baseTheme };

(muiTheme as any).baseTheme = baseTheme;

export type AppTheme = typeof muiTheme;
