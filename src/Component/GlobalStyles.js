import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'NanumSquareRound';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'KoPubDotum';
        src: url('https://cdn.jsdelivr.net/npm/font-kopub@1.0/fonts/KoPubDotum-Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Jal_Onuel';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        max-width: 768px;
        margin: 0 auto;
        background-color:#f1f1f1;
        font-family: 'KoPubDotum', 'NanumSquareRound', sans-serif;
    }
`;

export default GlobalStyles;
