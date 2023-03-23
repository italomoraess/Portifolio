import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
    h1{
      font-size: 50px;
      font-weight: 500;
    }
`;

export const StylesProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
`

export const StyleProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
    img {
      width: 100%;
      height: 250px;
    }
    a {
      background-color: #1A293D;
    }
`