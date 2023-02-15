import styled from "styled-components";

export const ContainerGeralSkills = styled.div`
  background-color: #1A293D;
  height: 700px;
  padding-top: 200px;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 50px;
  background-color: #1A293D;
`;

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 60%;
  flex-wrap: wrap;
  background-color: #1A293D;

`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70px;
  margin: 30px;
  background-color: #1A293D;
    span {
      margin-top: 5px;
      font-weight: 200;
      font-family: 'Roboto';
      background-color: #1A293D;
    }
    img {
      background-color: #1A293D;
    }
`;