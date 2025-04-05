import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        baseTheme: {
            fonts: {
                primary: string;
            };
            fontSizes: {
                sm: string;
                base: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
            };
            fontWeights: {
                regular: number;
                medium: number;
                semiBold: number;
                bold: number;
            };
            colors: {
                primary: string;
                pinkBackground: string;
                pinkSecondary: string;
                white: string;
                gray: string;
                gray3: string;
                info: {
                    red: string;
                    green: string;
                };
            };
            borderRadius: {
                sm: string;
                md: string;
                lg: string;
            };
            shadows: {
                drop: string;
                droplight: string;
                dropsoft: string;
                dropheader: string;
                dropButton: string;
                dropTable: string;
            };
            spacingValues: {
                xs: string;
                sm: string;
                sm2: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
            };
            lineHeights: {
                sm: string;
                base: string;
                lg: string;
            };
            customSpacing: {
                storyboardMarginX: string;
                storyboardMarginY: string;
            };
            breakpoints: {
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
        };
    }
} 