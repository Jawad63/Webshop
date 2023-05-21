import { createTheme } from '@mui/material/styles';

export const shades = {
    primaryBlack: {
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },

    secondaryIndigo: {
        100: "#d0dbe2",
        200: "#a0b7c5",
        300: "#7193a7",
        400: "#416f8a",
        500: "#124b6d",
        600: "#0e3c57",
        700: "#0b2d41",
        800: "#071e2c",
        900: "#040f16"
    },

    NeutralTurquoise : {
        100: "#d0e2e0",
        200: "#a0c5c1",
        300: "#71a8a3",
        400: "#418b84",
        500: "#126e65",
        600: "#0e5851",
        700: "#0b423d",
        800: "#072c28",
        900: "#041614"
    },
}


export const theme = createTheme({
    palette: {
        primaryBlack: {
            main: shades.primaryBlack[500]
        },

        secondaryIndigo: {
            main: shades.secondaryIndigo[500]
        },

        NeutralTurquoise: {
            dark: shades.NeutralTurquoise[700],
            main: shades.NeutralTurquoise[500],
            light: shades.NeutralTurquoise[100]
        }
    },

    typography: {
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontFamily: 48,
        },

        h2: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontFamily: 38,
        },

        h3: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontFamily: 24,
        },

        h4: {
            fontFamily: ["Cinzel", "sans-serif"].join(","),
            fontFamily: 18,
        },
    }
});