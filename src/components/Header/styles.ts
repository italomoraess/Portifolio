import styled from "styled-components";

export const Header = styled.header`
  background-color: #1A293D;
  display: flex;
  justify-content: space-between;
  height: 80px;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  border-bottom: 1px solid black;
    a:hover {
      color: #507DBC;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      height: auto;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-bottom: none;
    }
`;

export const Logo = styled.img`
  background-color: #1A293D;
  height: 100%;
  padding-left: 150px; 


  @media (max-width: 1024px) {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: center;
    padding-left: 0;
  } 
`;

export const Menu = styled.ul`
  display: flex;
  margin-right: 150px;

  @media (max-width: 1024px) {
    margin-right: 0;
  }  

  li { 
    background-color: #1A293D;
    display: flex;
    align-items: center;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 900;  
    
    @media (max-width: 1024px) {
      align-items: center;
      padding: 10px;
    }
  }

  a{
    background-color: #1A293D;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
  
    img {
      width: 20px;
      background-color: #1A293D;
      margin-left: 4px;
    }
  }
`;