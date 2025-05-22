import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Fira Code, monospace;
        color:#113E5A; 
    }`

export default GlobalStyles;