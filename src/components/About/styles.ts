import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  background-color: #262626;
  padding-top: 200px;
    h1{
      background-color: #262626;
      font-size: 50px;
      font-weight: 500;
    }


`

export const ContainerGeral = styled.div`
  display: flex;
  width: 60%;
  padding-top: 30px;
  background-color: #262626;
    p {
      background-color: #262626; 
      line-height: 25px;
      text-align: justify;
    }
`
export const ContainerContacts = styled.div`
  display: flex;
  align-items: flex-end;
  width: 30%;
  padding-left: 30px;
  background-color: #262626;

    a {
      background-color: #262626; 
      height: 0;
    }

    img{
      width: 70px;
      background-color: #262626; 
      margin: 10px;
      border-radius: 10px;
    }
`