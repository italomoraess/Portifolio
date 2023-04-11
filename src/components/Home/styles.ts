import styled from "styled-components";

export const HomeSection = styled.section`
  display: flex;
  justify-content: center;
  img{
    width: 80%;
    max-width: 100%;
    object-fit: cover;
  }
  @media (max-width:1024px) {
    img {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  } 
`;