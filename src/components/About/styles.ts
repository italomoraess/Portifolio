import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: cente;
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #1A293D;
    h1{
      background-color: #1A293D;
      font-size: 50px;
      font-weight: 500;
    }
`
export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-top: 30px;
  background-color: #1A293D;
    p {
      background-color: #1A293D; 
      line-height: 25px;
      text-align: justify;
    }
  @media (max-width:1024px) {
    width: 80%;
  } 
`
export const ContainerLink = styled.a`
  background-color: #1A293D;
  font-weight: bold;
  font-style: oblique;
`;

export const ContainerContacts = styled.div`
  display: flex;
  width: 30%;
  padding-left: 30px;
  background-color: #1A293D;
    a {
      background-color: #1A293D; 
      height: 0;
    }

    img {
      width: 40px;
      background-color: #1A293D; 
      margin: 6px;
      border-radius: 10px;
    }
`
export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1A293D; 
  margin-top: 20px;
`

export const Logo = styled.img`
  width: 200px;
  margin: 10px;
  margin-left: 35px;
  background-color: #1A293D; 
  border-radius: 10px;
`