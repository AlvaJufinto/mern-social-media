import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: quicksand, Arial;
    }
`

export const GlobalColors = {
    blue: "#0187ff",
    black: "#181E26",
    grey: "#4C5259",
    white: "#FFF",
    green: "#7EBE9A",
    red: "rgb(255, 134, 134)"
}

export const GlobalMeasurement = {
    navbarHeight: 50,
    extendedNavbarHeight: 350,
    sidebarWidth: 280,
    squareBorderRadius: 5,
    containerWidth: 1200,
}