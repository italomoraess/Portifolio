import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    background-color: #000;
    font-family: 'Roboto', serif;
    color: #FFF;

    scroll-behavior: smooth
  }

  body::-webkit-scrollbar {
    width: 5px;
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