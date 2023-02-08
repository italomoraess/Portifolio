import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    @font-face {
      font-family: 'Greenth';
      src: url('fonts/Greenth_Personal_Use.otf') format('opentype');
    }
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    background-color: #000;
    font-family: 'Greenth', serif;
    color: #FFF;

    scroll-behavior: smooth
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: #202124;
    border-radius: 20px;
  } 

  body::-webkit-scrollbar-thumb {
    background-color: #507DBC;
    border-radius: 20px;
    /* border: 3px solid #FFF; */
  }
`;