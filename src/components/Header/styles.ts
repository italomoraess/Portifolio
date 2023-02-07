import styled from "styled-components";

export const Header = styled.header`
  background-color: #202124;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding-right: 100px;
  padding-left: 100px;
`;

export const Logo = styled.img`
  background-color: #202124;  
  height: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  
  li {
    background-color: #202124;  
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 20px;
  }

  a{
    background-color: #202124; 
    color: white;
  }
`;