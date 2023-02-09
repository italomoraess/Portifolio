import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  background-color: #507DBC;
  padding-top: 200px;
    h1{
      background-color: #507DBC;
      font-size: 50px;
      font-weight: 500;
    }

    p {
      padding-top: 30px;
      background-color: #507DBC; 
      line-height: 25px;
    }

    a {
      border-radius: 10px;
      background-color: #FFF;
      font-size: 30px;
      padding: 10px;
      margin-top: 30px;
      cursor: pointer;
      color: #507DBC;
      transition: background 0.5s;
    }

    a:hover{
      background: #000;
    }
`