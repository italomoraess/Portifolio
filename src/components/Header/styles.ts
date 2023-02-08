import styled from "styled-components";

export const Header = styled.header`
  background-color: #04080f;
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  width: 100%;
    a:hover {
      color: #507DBC;
    }
`;

export const Logo = styled.img`
  background-color: #04080f;
  height: 100%;
  padding-left: 200px;
`;

export const Menu = styled.ul`
  display: flex;
  margin-right: 200px;

  li { 
    background-color: #04080f;
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 900;
  }

  a{
    background-color: #04080f;
    color: white;
  }
`;