import styled from "styled-components";

export const Header = styled.header`
  background-color: #1A293D;
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
  background-color: #1A293D;
  height: 100%;
  padding-left: 150px;
`;

export const Menu = styled.ul`
  display: flex;
  margin-right: 150px;

  li { 
    background-color: #1A293D;
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 900;
  }

  a{
    background-color: #1A293D;
    color: white;
  }
`;