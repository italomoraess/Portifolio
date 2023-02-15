import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 50px;
  padding-top: 200px;
`;

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  height: 700px;
  width: 60%;
  flex-wrap: wrap;

`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 70px;
  margin: 30px;
    span {
      margin-top: 5px;
      font-weight: 200;
      font-family: 'Roboto';
    }
`;