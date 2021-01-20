import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import round_ttf from "../assets/fonts/Nanum-Round/NanumSquareRoundR.ttf";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        margin: 0;
        padding: 0;
    }
    @font-face {
      font-family: "NanumSquare";
      src: url("https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css");
    }
    @font-face{
        font-family:'Nanum-round';
        src: url(${round_ttf})
    }
    body{
        font-family: "Noto Sans KR", sans-serif;
    }
`;

export default GlobalStyles;
